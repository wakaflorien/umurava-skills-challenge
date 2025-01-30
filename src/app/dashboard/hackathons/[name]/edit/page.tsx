"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChallengeFormProps } from "@/@types/global";
import { validateForm } from "@/utils/validation";
import { ChallengeForm } from "@/components/ChallengesForm";
import Image from "next/image";

const EditChallenge = () => {
    const router = useRouter();

    const [errors, setErrors] = React.useState<ChallengeFormProps>({});
    const [formData, setFormData] = React.useState<ChallengeFormProps>({
        title: "",
        deadline: "",
        duration: "",
        prize: "0",
        email: "",
        description: "",
        brief: "",
        tasks: "",
        deliverables: "",
    })

    const formValues = {
        title: "Design a Dashboard for Sokofund",
        deadline: "24/12/2024",
        duration: "7 Days",
        prize: "$150",
        email: "talent@umurava.africa",
        description: "A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.",
        brief: "User Interface Design for each step \n Creating wireframes to outline the basic structure and layout of the web and mobile app \n Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience \n Ensuring the web application works seamlessly across web, mobile, and tablet devices \n Provide a feedback session for in-development guidance",
        tasks: "UX research to understand Project Requirements\n Understanding User Need\n Understanding Business Goals\n Determine interaction between users\n Requirements\n ",
        deliverables: "The Product Designer will provide all documents and deliverables to the client before the review meetings"
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleClearForm = () => {
        setFormData({
            title: "",
            deadline: "",
            duration: "",
            prize: "0",
            email: "",
            description: "",
            brief: "",
            tasks: "",
            deliverables: "",
        });
        setErrors({});
    };

    const handleSubmitForm = async () => {
        if (await validateForm(formData, setErrors)) {
            console.log("Submit the form");
        } else {
            console.log("Validation Errors");
        }
    }

    return (
        <div className="sm:px-4 flex-1 sm:pb-24 space-y-4">
            <div className=" bg-white sm:p-4 border rounded-lg">
                <div className="flex gap-2 sm:gap-4 cursor-pointer">
                    <div className="flex items-center gap-2 text-tertiaryColor" onClick={() => router.back()}>
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
                    <span className="text-primary">Edit a Challenge</span>
                </div>
            </div>

            <div className="w-full flex sm:flex-col items-center">
                <div className="bg-white !w-[500px] flex sm:flex-col items-center sm:p-6 gap-4 sm:gap-8 border rounded-lg">

                    <header className="text-center">
                        <h1 className="font-bold text-sm sm:text-lg">Edit a Challenge</h1>
                        <p className="sm:text-sm text-tertiaryColor">Fill out these details to build your broadcast</p>
                    </header>

                    <ChallengeForm submitType="edit" handleFormChange={handleFormChange} handleClearForm={handleClearForm} handleSubmitForm={handleSubmitForm} errors={errors} values={formValues} />

                </div>
            </div>

        </div>
    )
}

export default EditChallenge;