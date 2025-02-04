"use client";
import * as React from "react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Card } from "@/components/Card";
import Link from "next/link";
import Image from "next/image";
import { getChallenges } from "@/apis";
import { useQuery } from "@tanstack/react-query";

const Hackathons = () => {

    const { data, isLoading, error } = useQuery({ queryKey: ['challenges'], queryFn: getChallenges })

    return (
        <div className="bg-backgroundA elative flex flex-col zoom-out">
            <Nav />
            <main className="flex flex-col sm:px-24 py-16 sm:space-y-16">
                <div className="flex gap-2 sm:gap-4 cursor-pointer">
                    <Link href="./" className="flex items-center gap-2 text-tertiaryColor">
                        {/* <ArrowLeft className={`h-5 w-5 !stroke-[0.1] !stroke-current border`} /> */}
                        <Image
                            src="/svgs/arrow-left.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4"
                        />
                        Go back</Link>
                    <span className="text-tertiaryColor">/</span>
                    <span className="text-primary">Challenge & Hackathons</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-4 sm:gap-8">
                    {!isLoading && !error && data && data.data && data.data.challenges.map((item, index) => (<Card
                        status={item.status}
                        key={index}
                        image={`/white_logo.png`}
                        title={item.challengeName}
                        skills={item.skills}
                        seniority={item.levels}
                        timeline={`${item.duration} day(s)`}
                        // onClick={() => router.push("/hackathons")}
                        imageWidth={150}
                        imageHeight={50}
                    />))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Hackathons;