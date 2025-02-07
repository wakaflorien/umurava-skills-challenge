"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { decodeUrl } from "@/utils/decodeUrl";

import { useQuery } from "@tanstack/react-query";
import { getSingleChallenge } from "@/apis";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

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

const SingleHackathon = ({ searchParams }) => {
    // In-App imports
    const pathname = usePathname();
    const router = useRouter();

    // URL Params
    const { id }: { id: string } = React.use(searchParams);

    // In-App data states

    // API Queries
    const { data: singleChallenge, isLoading } = useQuery({ queryKey: ['challenges'], queryFn: () => getSingleChallenge(id) })

    // Action Functions
    const selectedChallenge = decodeUrl(pathname.split("/hackathons/")[1])

    return (

        <div className="bg-backgroundA relative flex flex-col zoom-out">
            <Nav />
            <main className="flex flex-col px-4 sm:px-24 py-4 sm:py-16 space-y-4 sm:space-y-8">
                <div className="sm:px-4 flex-1 sm:pb-24 space-y-4">
                    <div className=" bg-white sm:p-4 border rounded-lg">
                        <div className="flex gap-2 sm:gap-4 cursor-pointer">
                            <div className="flex items-center gap-2 text-tertiaryColor" onClick={() => router.push("/hackathons")}>
                                <Image
                                    src="/svgs/arrow-left.svg"
                                    alt="file"
                                    width={4}
                                    height={4}
                                    className="h-4 w-4 text-primary"
                                />
                                Go back</div>
                            <span className="text-tertiaryColor">/</span>
                            <span className="text-tertiaryColor" onClick={() => router.push('/hackathons')}>Challenge & Hackathons</span>
                            <span className="text-tertiaryColor"> / </span>
                            <span className="text-primary capitalize">{selectedChallenge}</span>
                        </div>
                    </div>
                    {isLoading ? <p>Loading ...</p> : (<div className='grid sm:grid-cols-3 gap-2 sm:gap-4'>
                        <div className="col-span-2 bg-white grid sm:space-y-4 sm:p-4 border rounded-lg">

                            <div className="relative bg-primary flex flex-col w-full h-[240px] items-center justify-center rounded-md">
                                <Image
                                    src={`/white_logo.png`}
                                    alt={`Hero challenge photo`}
                                    width={150}
                                    height={50}
                                    priority
                                    className={`object-cover`}
                                />
                            </div>

                            <div className="sm:space-y-2">
                                <h1 className="font-bold text-sm sm:text-md capitalize">Project Brief : {singleChallenge && singleChallenge.data.projectBrief}</h1>
                                <p className="sm:text-md capitalize">{singleChallenge && singleChallenge.data.projectDescription}</p>
                            </div>

                            {/* Product Requirements */}
                            <div className="sm:space-y-2">
                                <h1 className="font-bold text-sm sm:text-md">Tasks:</h1>
                                <h1 className="font-bold text-sm sm:text-md capitalize">Product Requirements</h1>
                                {/* <ul className="sm:text-md list-disc pl-4">
                                        {productRequirements.map(item => (<li key={item}>{item}</li>))}
                                    </ul> */}
                                <p className="sm:text-md capitalize">{singleChallenge && singleChallenge.data.projectTasks}</p>
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
                    </div>)}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SingleHackathon;