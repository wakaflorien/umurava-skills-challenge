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
import { CardSkeleton } from "@/components/Skeletons";
import Oops from "@/components/Oops";

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
        <div className="bg-backgroundA  w-full h-full relative flex flex-col zoom-out scroll-smooth">
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
                {isLoading || error ? (<CardSkeleton count={3} />) : (
                    <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
                        {filteredChallenges?.length > 0 ? filteredChallenges?.slice(0, 3)?.map((item: { status: string, index: string, challengeName: string, skills: Array<string>, levels: Array<string>, duration: number }, index: number) => (<Card
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
                        />)) : (<Oops desc={"Oops!, No Open Challenges available at the moment"} />)}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}

export default Hackathons;