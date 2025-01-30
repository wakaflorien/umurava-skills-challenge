"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/Button";
import { ArrowLeft, Calendar, Case, Dollar, Mail } from "@/components/svgs";
import { decodeUrl } from "@/utils/decodeUrl";
import * as React from "react";
import { Modal } from "@/components/Modal";
import { useAuth } from "@/providers/AuthProvider";

const instructions = [
    {
        title: "talent@umurava.africa",
        subTitle: "Contact Email",
        icon: <Mail className={`h-4 w-4`} />
    },
    {
        title: "Web Design",
        subTitle: "Challenge Category",
        icon: <Case className={`h-4 w-4`} />
    },
    {
        title: "7 Days",
        subTitle: "Duration",
        icon: <Calendar className={`h-4 w-4`} />
    },
    {
        title: "$150 - $400",
        subTitle: "Prize Money",
        icon: <Dollar className={`h-4 w-4`} />
    }
];

const participants = [
    {
        title: "talent@umurava.africa",
        subTitle: "Contact Email",
        image: "/.Sidebar/Image.png"
    },
    {
        title: "Web Design",
        subTitle: "Challenge Category",
        image: "none"
    },
    {
        title: "7 Days",
        subTitle: "Duration",
        image: "none"
    },
    {
        title: "$150 - $400",
        subTitle: "Prize Money",
        image: "none",
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
    const { userType } = useAuth();
    const pathname = usePathname();
    const router = useRouter();

    const [isOpen, setIsOpen] = React.useState(false);

    const selectedChallenge = decodeUrl(pathname.split("dashboard/hackathons/")[1])

    const navigateToEdit = () => {
        router.push(`/dashboard/hackathons/${selectedChallenge}/edit`)
    }

    const openDelete = () => {
        setIsOpen(true);
    }

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
                    <span className="text-primary">{selectedChallenge}</span>
                </div>
            </div>
            <div className='grid sm:grid-cols-3 gap-2 sm:gap-4'>
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

                <div className={`${userType === "admin" && "grid sm:grid-row-2"}`}>

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
                            {userType === "participant" ? (<Button classNames={`w-full bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-2`} label={"Submit your work"} onClick={() => console.log("Handle submit your work")} />) : <div className="w-full flex sm:flex-row flex-wrap sm:gap-4">
                                <Button classNames={`w-[100px] bg-[#E5533C] hover:bg-[#E5533C]/90 text-white sm:text-sm font-bold p-2`} label={"Delete"} onClick={openDelete} />

                                <Button classNames={`w-[100px] bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-2`} label={"Edit"} onClick={navigateToEdit} />
                            </div>}
                        </div>

                    </div>

                    {userType === "admin" && (<div className='row-span-2 bg-white h-fit w-full flex sm:flex-col items-start gap-8 sm:gap-4 sm:p-4 border rounded-lg'>
                        <header className='space-y-2 sm:space-y-4'>
                            <h1 className='font-bold text-sm sm:text-md'>Participants</h1>
                        </header>

                        <div className="flex sm:flex-col items-start sm:space-y-6">

                            {participants.map((item, index) => (<div key={index} className="flex sm:flex-row items-center justify-center sm:gap-4">
                                <div className='relative bg-[#D0E0FC] flex items-center justify-center h-10 w-10 sm:p-2 rounded-full cursor-pointer'>
                                    {item.image !== "none" && <Image src={item.image} alt="avatar" objectFit='contain' priority className="rounded-full" width={40} height={40} />}
                                    <div className='absolute bottom-0 right-0 bg-success h-3 w-3 border border-white rounded-full'></div>
                                </div>
                                <div className="flex sm:flex-col">
                                    <p className="text-black text-sm sm:text-md font-bold">{item.title}</p>
                                    <p className="text-black text-sm sm:text-md"> {item.subTitle}</p>
                                </div>
                            </div>))}
                        </div>

                        <div className="w-full sm:py-4">
                            <Button classNames={`w-full bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-2`} label={"View All"} onClick={() => console.log("Handle submit your work")} />
                        </div>

                    </div>)}
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            // title="Add New Task"
            >
                <div className='flex flex-col items-center justify-center sm:gap-4'>
                    
                    <p className='text-center'>Are you sure you want to delete {selectedChallenge} Challenge ?</p>

                    <div className="flex items-center sm:gap-3">
                        <Button classNames="w-[70px] bg-white text-primary border border-primary sm:text-sm font-semibold p-2 sm:p-3" label="No" onClick={() => setIsOpen(false)
                        } />
                        <Button classNames="w-[70px] bg-[#E5533C] hover:bg-[#E5533C]/90 text-white sm:text-sm font-semibold p-2 sm:p-3" label="Yes" onClick={() => console.log("deleting challenge") 
                        } />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default DashboardHackathon;