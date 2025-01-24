"use client";
import * as React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const Hackathons = () => {
    
    return (
        <div className="bg-backgroundA elative flex flex-col zoom-out">
            <Nav />
            <main className="flex flex-col sm:px-24 py-16 sm:space-y-16">
                <div className="flex gap-2 sm:gap-4 cursor-pointer">
                    <a href="./" className="flex gap-2 text-tertiaryColor"><Icon icon="solar:square-arrow-left-outline" width="24" height="24" style={{ color: "#000000" }} /> Go back</a>
                    <span className="text-tertiaryColor">/</span>
                    <span className="text-primary">Challenge & Hackathons</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-4 sm:gap-8">
                    {Array.from({ length: 16 }).map((_, index) => (<Card
                        key={index}
                        image={`/white_logo.png`}
                        title={'Design a Dashboard for SokoFund'}
                        skills={["UI/UX Design", "User Research", "Product Design"]}
                        security={'(Junior, Intermediate, Senior)'}
                        timeline={'15 Days'}
                        onClick={() => console.log("View Challenge")}
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