"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/Button";
import { decodeUrl } from "@/utils/decodeUrl";
const Modal = React.lazy(() => import('@/components/Modal'));
import { useAuth } from "@/providers/AuthProvider";
import { deleteChallenge, getSingleChallenge } from "@/apis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

    // In-App Data 
    const [modal, setModal] = React.useState({ open: false, message: "", title: "" })
    const [isDeleting, setIsDeleting] = React.useState(false)
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
    const { data: singleChallenge, isLoading, error } = useQuery({ queryKey: ['challenges'], queryFn: () => getSingleChallenge(id) })

    const mutation = useMutation({
        mutationFn: ({ token, id }: { token: string, id: string }) => deleteChallenge(token, id),
        onSuccess: (response) => {
            console.log(response);
            setModal({ ...modal, open: false });
            queryClient.invalidateQueries({ queryKey: ['challenges'] })
            setIsDeleting(false);
            router.push("/admin/dashboard/hackathons");
        },
        onError: (error) => {
            console.log(error);
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
    const selectedChallenge = decodeUrl(pathname.split("/admin/dashboard/hackathons/")[1])

    const navigateToEdit = () => {
        const url = `/admin/dashboard/hackathons/${selectedChallenge}/edit?id=${id}`;
        router.push(url);
    }

    const openDelete = () => {
        setModal({ ...modal, open: true, message: `Are you sure you want to delete ${selectedChallenge} Challenge ?` });
    }

    const closeModal = () => {
        setModal({ ...modal, open: false })
        setIsDeleting(false);
    }

    const confirmDelete = () => {
        setIsDeleting(true);
        mutation.mutate({ token: data.token, id })
    }

    return (
        <div className="sm:px-4 flex-1 sm:pb-24 space-y-4">
            <div className=" bg-white sm:p-4 border rounded-lg">
                <div className="flex gap-2 sm:gap-4 cursor-pointer">
                    <div className="flex items-center gap-2 text-tertiaryColor" onClick={() => router.push("/admin/dashboard/hackathons")}>
                        <Image
                            src="/svgs/arrow-left.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        />
                        Go back</div>
                    <span className="text-tertiaryColor">/</span>
                    <span className="text-tertiaryColor" onClick={() => router.push('/admin/dashboard/hackathons')}>Challenge & Hackathons</span>
                    <span className="text-tertiaryColor"> / </span>
                    <span className="text-primary capitalize">{selectedChallenge}</span>
                </div>
            </div>

            {isLoading ? (<p>Loading ...</p>) : (<div className='grid sm:grid-cols-3 gap-2 sm:gap-4'>
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

                <div className={`flex sm:flex-col gap-4 sm:gap-8`}>

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
                            <div className="w-full flex sm:flex-row flex-wrap sm:gap-4">
                                <Button classNames={`w-[100px] bg-[#E5533C] hover:bg-[#E5533C]/90 text-white sm:text-sm font-bold p-2`} label={"Delete"} onClick={openDelete} />

                                <Button classNames={`w-[100px] bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-2`} label={"Edit"} onClick={navigateToEdit} />
                            </div>
                        </div>

                    </div>

                    <div className=' bg-white h-fit w-full flex sm:flex-col items-start gap-8 sm:gap-4 sm:p-4 border rounded-lg'>
                        <header className='flex items-center gap-2'>
                            <h1 className='font-bold text-sm sm:text-md'>Participants</h1>
                            <span className="bg-primary text-white px-2 rounded-full">{!isLoading && !error && singleChallenge?.data?.participants?.length}</span>
                        </header>

                        <div className="flex sm:flex-col items-start sm:space-y-6">

                            {!isLoading && !error && singleChallenge?.data?.participants?.map((item, index) => (<div key={index} className="flex sm:flex-row items-center justify-center sm:gap-4">
                                <div className='relative bg-[#D0E0FC] flex items-center justify-center h-10 w-10 sm:p-2 rounded-full cursor-pointer'>
                                    {item.image !== "none" && <Image src={item.profile_url} alt="avatar" priority className="rounded-full object-container" width={40} height={40} />}
                                    <div className='absolute bottom-0 right-0 bg-success h-3 w-3 border border-white rounded-full'></div>
                                </div>
                                <div className="flex sm:flex-col">
                                    <p className="text-black text-sm sm:text-md font-bold capitalize">{item.names}</p>
                                    <p className="text-black text-sm sm:text-md"> {item.email}</p>
                                </div>
                            </div>))}
                        </div>

                        <div className="w-full sm:py-4">
                            <Button classNames={`w-full bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-2`} label={"View All"} onClick={() => console.log("Handle submit your work")} />
                        </div>

                    </div>
                </div>
            </div>)}

            <Modal
                isOpen={modal.open}
                onClose={closeModal}
                title={modal.title}
            >
                <div className='flex flex-col items-start justify-start sm:gap-4'>
                    <p className='text-center'>{modal.message}</p>
                </div>
                <div className="flex gap-3 justify-center sm:mt-8">
                    <Button classNames={` text-primary border border-primary sm:text-sm p-2`} label={"Cancel"} onClick={closeModal} />
                    <Button classNames={` bg-red-600 hover:bg-red-600/90 text-white sm:text-sm p-2`} label={"Confirm"} onClick={confirmDelete} icon={isDeleting && <Icon icon="line-md:loading-twotone-loop" width="18" height="18" />} />
                </div>
            </Modal>
        </div>
    );
}

export default DashboardHackathon;