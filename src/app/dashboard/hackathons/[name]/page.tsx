"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/Button";
import { decodeUrl } from "@/utils/decodeUrl";
import * as React from "react";
import { Modal } from "@/components/Modal";
import { useAuth } from "@/providers/AuthProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSingleChallenge, joinChallenge } from "@/apis";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

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

const DashboardHackathon = ({ searchParams }) => {
    // In-App imports
    const queryClient = useQueryClient();
    const pathname = usePathname();
    const router = useRouter();
    const { data, authenticate } = useAuth();

    // URL Params
    const { id }: { id: string } = React.use(searchParams);
    const payload: Record<string, string> = data.user ? { participant: data.user._id } : { participant: "" };

    // In-App data states

    const [modal, setModal] = React.useState({ open: false, message: "", title: "" })
    const [isJoining, setIsJoining] = React.useState(false)

    React.useEffect(() => {
        if (!data.token) {
            const handleAuthentication = async () => {
                try {
                    await authenticate({ userRole: "admin" });
                } catch (error) {
                    console.error("Failed to authenticate:", error);
                    router.push("/");
                }
            };

            handleAuthentication();
        }
    }, [authenticate, router, data.token]);

    // API Queries
    const { data: singleChallenge, isLoading } = useQuery({ queryKey: ['challenges'], queryFn: () => getSingleChallenge(data.token, id) })

    const mutation = useMutation({
        mutationFn: ({ token, payload, id }: { token: string, payload: Record<string, string>, id: string }) => joinChallenge(token, payload, id),
        onSuccess: async (response) => {
            console.log('Delete response', response)
            setModal({ ...modal, open: false });
            queryClient.invalidateQueries({ queryKey: ['challenges'] })
            setIsJoining(false);
        },
        onError: (error) => {
            console.log("Errors", error)
            setModal({ open: true, message: error.message, title: "Failed" })
        }
    })

    const instructions = [
        {
            title: singleChallenge?.data?.contactEmail || "N/A",
            subTitle: "Contact Email",
            icon: <Image
                src="/svgs/Message.svg"
                alt="file"
                width={4}
                height={4}
                className="h-4 w-4 text-primary"
            />
        },
        {
            title: singleChallenge?.data?.skills?.[0] || "N/A",
            subTitle: "Challenge Category",
            icon: <Image
                src="/svgs/CaseRound.svg"
                alt="file"
                width={4}
                height={4}
                className="h-4 w-4 text-primary"
            />
        },
        {
            title: `${singleChallenge?.data?.duration || "N/A"} day(s)`,
            subTitle: "Duration",
            icon: <Image
                src="/svgs/Calendar.svg"
                alt="file"
                width={4}
                height={4}
                className="h-4 w-4 text-primary"
            />
        },
        {
            title: singleChallenge?.data?.moneyPrize || "N/A",
            subTitle: "Prize Money",
            icon: <Image
                src="/svgs/Dollar.svg"
                alt="file"
                width={4}
                height={4}
                className="h-4 w-4 text-primary"
            />
        }
    ];

    // Action Functions
    const selectedChallenge = decodeUrl(pathname.split("/dashboard/hackathons/")[1])

    const handleJoinChallenge = () => {
        setModal({ ...modal, open: true, message: `Are you sure you want to join ${selectedChallenge} challenge`, title: "Confirm joining" })
    }

    const closeModal = () => {
        setModal({ ...modal, open: false })
        setIsJoining(false);
    }

    const confirmDelete = () => {
        setIsJoining(true);
        mutation.mutate({ token: data.token, payload: payload, id });
    }

    return (
        <div className="sm:px-4 flex-1 sm:pb-24 space-y-4">
            <div className=" bg-white sm:p-4 border rounded-lg">
                <div className="flex gap-2 sm:gap-4 cursor-pointer">
                    <div className="flex items-center gap-2 text-tertiaryColor" onClick={() => router.push("/dashboard/hackathons")}>
                        <Image
                            src="/svgs/arrow-left.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        />
                        Go back</div>
                    <span className="text-tertiaryColor">/</span>
                    <span className="text-tertiaryColor" onClick={() => router.push('/dashboard/hackathons')}>Challenge & Hackathons</span>
                    <span className="text-tertiaryColor"> / </span>
                    <span className="text-primary capitalize">{selectedChallenge}</span>
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

                <div>

                    <div className='bg-white h-fit w-full flex sm:flex-col items-start gap-8 sm:gap-4 sm:p-4 border rounded-lg'>
                        <header className='space-y-2 sm:space-y-4'>
                            <h1 className='font-bold text-sm sm:text-md'>Key Instructions</h1>
                            <p className="sm:text-md">You are free to schedule the clarification call with the team via this</p>
                        </header>

                        {isLoading ? (<p>Loading ...</p>) : (<div className="flex sm:flex-col items-start sm:space-y-6">

                            {instructions.map((item, index) => (<div key={index} className="flex sm:flex-row items-center justify-center sm:gap-4">
                                <div className='bg-[#D0E0FC] flex items-center justify-center h-10 w-10 sm:p-2 rounded-full cursor-pointer'>
                                    {item.icon}
                                </div>
                                <div className="flex sm:flex-col">
                                    <p className="text-black text-sm sm:text-md font-bold">{item.title}</p>
                                    <p className="text-black text-sm sm:text-md"> {item.subTitle}</p>
                                </div>
                            </div>))}
                        </div>)}

                        <div className="w-full sm:py-4">
                            <div className="w-full flex sm:flex-row flex-wrap sm:gap-4">
                                <Button classNames={` bg-[#E5533C] hover:bg-[#E5533C]/90 text-white sm:text-sm font-bold p-2`} label={"Join Challenge"} onClick={handleJoinChallenge} />

                                <Button classNames={` bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-2`} label={"Submit your Work"} onClick={() => console.log("Submitted")} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Modal
                isOpen={modal.open}
                onClose={closeModal}
                title={modal.title}>
                <div className='flex flex-col items-start justify-start sm:gap-4'>
                    <p className="text-sm">{modal.message}</p>
                </div>
                <div className="flex gap-3 justify-center sm:mt-8">
                    <Button classNames={` text-primary border border-primary sm:text-sm p-2`} label={"Cancel"} onClick={closeModal} />
                    <Button classNames={` bg-red-600 hover:bg-red-600/90 text-white sm:text-sm p-2`} label={"Confirm"} onClick={confirmDelete} icon={isJoining && <Icon icon="line-md:loading-twotone-loop" width="18" height="18" />} />
                </div>
            </Modal>
        </div>
    );
}

export default DashboardHackathon;