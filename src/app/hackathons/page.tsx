"use client";
import * as React from "react";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Card } from "../components/Card";
import { ArrowLeft } from "../components/svgs";
import { hackathonsData } from "../dashboard/page";

const Hackathons = () => {

    return (
        <div className="bg-backgroundA elative flex flex-col zoom-out">
            <Nav />
            <main className="flex flex-col sm:px-24 py-16 sm:space-y-16">
                <div className="flex gap-2 sm:gap-4 cursor-pointer">
                    <a href="./" className="flex items-center gap-2 text-tertiaryColor">
                        <ArrowLeft className={`h-5 w-5 !stroke-[0.1] !stroke-current border`} />
                        Go back</a>
                    <span className="text-tertiaryColor">/</span>
                    <span className="text-primary">Challenge & Hackathons</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-4 sm:gap-8">
                    {hackathonsData.map((item, index) => (<Card
                        key={index}
                        image={item.image}
                        title={item.title}
                        skills={item.skills}
                        security={item.security}
                        timeline={item.timeline}
                        onClick={item.onClick}
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