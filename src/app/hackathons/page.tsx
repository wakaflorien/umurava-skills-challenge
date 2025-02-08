"use client";
import * as React from "react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Card } from "@/components/Card";
import Link from "next/link";
import Image from "next/image";
import { getChallenges } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Hackathons = () => {
    // In-App imports 
    const router = useRouter();

    const { data, isLoading, error } = useQuery({ queryKey: ['challenges'], queryFn: getChallenges })

    const filteredChallenges = (!isLoading && !error && data?.data?.challenges?.length > 0) ? data?.data?.challenges?.filter((item: { status: string }) => item.status.toLowerCase() === "open" || item.status.toLowerCase() === "ongoing") : [];

    const handleViewSingle = (item) => {
        const url = `/hackathons/${item.challengeName}?id=${item._id}`;
        router.push(url);
    };

    return (
        <div className="bg-backgroundA relative flex flex-col zoom-out">
            <Nav />
            <main className="flex flex-col px-4 sm:px-24 py-4 sm:py-16 space-y-4 sm:space-y-8">
                <div className="flex items-center gap-2 sm:gap-4 cursor-pointer">
                    <Link href="./" className="flex items-center gap-2 text-tertiaryColor">
                        <Image
                            src="/svgs/arrow-left.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4"
                        />
                        <p className="text-sm sm:text-lg"> Go back</p>
                    </Link>
                    <span className="text-tertiaryColor">/</span>
                    <p className="text-primary text-sm sm:text-lg">Challenge & Hackathons</p>
                </div>

                {/* Challeges and Hackathons */}
                {isLoading && (<p>Loading ... </p>)}
                {(filteredChallenges?.length > 0) ? <div className="grid gap-4 sm:grid-cols-4 sm:gap-8">
                    {filteredChallenges.map((item: { status: string, index: string, challengeName: string, skills: Array<string>, levels: Array<string>, duration: number }, index: number) => (<Card
                        status={item.status}
                        key={index}
                        image={`/white_logo.png`}
                        title={item.challengeName}
                        skills={item.skills}
                        seniority={item.levels}
                        timeline={`${item.duration} day(s)`}
                        onClick={() => handleViewSingle(item)}
                        imageWidth={150}
                        imageHeight={50}
                    />))}
                </div> : (<div className='h-[40vh] flex items-center justify-center sm:gap-4'>
                    <Icon icon="tabler:mood-empty" width="34" height="34" className="text-primary" />
                    <p className='text-primary font-bold'>Oops!, No Open Challenges available</p>
                </div>)}
            </main>
            <Footer />
        </div>
    )
}

export default Hackathons;