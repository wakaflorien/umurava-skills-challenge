"use client";

import { Button } from "@/app/components/Button";
import { ArrowLeft, Bell } from "@/app/components/svgs";
import { decodeUrl } from "@/utils/decodeUrl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

const instructions = [
    {
        title: "talent@umurava.africa",
        subTitle: "Contact Email",
        icon: <Bell className={`h-4 w-4`} />
    },
    {
        title: "Web Design",
        subTitle: "Challenge Category",
        icon: <Bell className={`h-4 w-4`} />
    },
    {
        title: "7 Days",
        subTitle: "Duration",
        icon: <Bell className={`h-4 w-4`} />
    },
    {
        title: "$150 - $400",
        subTitle: "Prize Money",
        icon: <Bell className={`h-4 w-4`} />
    }
];

const productRequirements = [
    "UX research to understand Project Requirements",
    "Understanding User Needs",
    "Understanding Business Goals",
    "Determine interaction between users",
    "Requirements Catalog",
];

const productDesign = [
    "User Interface Design for each step",
    "Creating wireframes to outline the basic structure and layout of the web and mobile app.",
    "Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.",
    "Ensuring the web application works seamlessly across web, mobile, and tablet devices.",
    "Provide a feedback session for in-development guidance",
];

const deliverables = [
    "Requirements Catalog and User Interaction Diagram",
    "User Interface Mockups",
    "Payroll and HR System Design Completed",
    "The Product Designer will provide all documents and deliverables to the client before the review meetings.",
]

const DashboardHackathon = () => {
    const pathname = usePathname();
    const router = useRouter();
    
    const selectedChallenge = pathname.split("dashboard/hackathons/")[1]

    return (
        <div className="sm:px-4 flex-1 sm:pb-24 space-y-4">
            <div className=" bg-white sm:p-4 border rounded-lg">
            <div className="flex gap-2 sm:gap-4 cursor-pointer">
                    <div className="flex items-center gap-2 text-tertiaryColor" onClick={() => router.back()}>
                        <ArrowLeft className={`h-5 w-5 !stroke-[0.1] !stroke-current border`} />
                        Go back</div>
                    <span className="text-tertiaryColor">/</span>
                    <span className="text-tertiaryColor" onClick={() => router.push('/dashboard/hackathons')}>Challenge & Hackathons</span>
                    <span className="text-tertiaryColor"> / </span>
                    <span className="text-primary">{decodeUrl(selectedChallenge)}</span>
                </div>
            </div>
            <div className='grid sm:grid-cols-3 gap-2 sm:gap-4'>
                <div className="col-span-2 bg-white grid sm:p-4 gap-4 sm:gap-8 border rounded-lg">

                    <div className="relative bg-primary flex flex-col w-full h-[240px] items-center justify-center rounded-md">
                        <Image
                            src={`/white_logo.png`}
                            alt={`Hero challenge photo`}
                            width={150}
                            height={50}
                            priority
                            objectFit="cover"
                        />
                    </div>

                    <div className="sm:space-y-2">
                        <h1 className="font-bold text-sm sm:text-md">Project Brief : Payroll and HR Management System</h1>
                        <p className="sm:text-md">A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.</p>
                    </div>

                    {/* Product Requirements */}
                    <div className="sm:space-y-2">
                        <h1 className="font-bold text-sm sm:text-md">Tasks:</h1>
                        <h1 className="font-bold text-sm sm:text-md">Product Requirements</h1>
                        <ul className="sm:text-md list-disc pl-4">
                            {productRequirements.map(item => (<li key={item}>{item}</li>))}
                        </ul>
                    </div>

                    {/* Product Design */}
                    <div className="sm:space-y-2">
                        <h1 className="font-bold text-sm sm:text-md">Product Design</h1>
                        <ul className="sm:text-md list-disc pl-4">
                            {productDesign.map(item => (<li key={item}>{item}</li>))}
                        </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="sm:space-y-2">
                        <h1 className="font-bold text-sm sm:text-md">Deliverables</h1>
                        <ul className="sm:text-md list-disc pl-4">
                            {deliverables.map(item => (<li key={item}>{item}</li>))}
                        </ul>
                    </div>

                    {/* Notes */}
                    <div className="sm:space-y-2">
                        <h1 className="font-bold text-sm sm:text-md">Notes</h1>
                        <ul className="sm:text-md list-disc pl-4">
                            <li >Find Product Requirements Summary and Features Description for Saway Pay <a href="#">HERE</a></li>
                        </ul>
                    </div>

                </div>

                <div className='bg-white h-fit w-full flex sm:flex-col items-start gap-8 sm:gap-4 sm:p-4 border rounded-lg'>
                    <header className='space-y-2 sm:space-y-4'>
                        <h1 className='font-bold text-sm sm:text-md'>Key Instructions</h1>
                        <p className="sm:text-md">You are free to schedule the clarification call with the team via this</p>
                    </header>

                    <div className="flex sm:flex-col items-start sm:space-y-6">

                        {instructions.map((item, index) => (<div key={index} className="flex sm:flex-row items-center justify-center sm:gap-4">
                            <div className='bg-[#D0E0FC] flex items-center justify-center h-10 w-10 sm:p-2 rounded-full cursor-pointer'>
                                {item.icon}
                            </div>
                            <div className="flex sm:flex-col">
                                <p className="text-black text-sm sm:text-md font-bold">{item.title}</p>
                                <p className="text-black text-sm sm:text-md"> {item.subTitle}</p>
                            </div>
                        </div>))}
                    </div>

                    <div className="w-full sm:py-4">
                        <Button classNames={`w-full bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-2`} label={"Submit your work"} onClick={() => console.log("Handle submit your work")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardHackathon;