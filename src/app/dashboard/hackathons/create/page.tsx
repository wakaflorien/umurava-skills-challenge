"use client";

import * as React from "react";
import { ArrowLeft } from "@/app/components/svgs";
import { useRouter } from "next/navigation";
import { ChallengeFormProps } from "@/app/@types/global";
import { validateForm } from "@/utils/validation";
import { ChallengeForm } from "@/app/components/ChallengesForm";

const CreateChallenge = () => {
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
                        <ArrowLeft className={`h-5 w-5 !stroke-[0.1] !stroke-current border`} />
                        Go back</div>
                    <span className="text-tertiaryColor">/</span>
                    <span className="text-tertiaryColor" onClick={() => router.push('/dashboard/hackathons')}>Challenge & Hackathons</span>
                    <span className="text-tertiaryColor"> / </span>
                    <span className="text-primary">Create New Challenge</span>
                </div>
            </div>

            <div className="w-full flex sm:flex-col items-center">
                <div className="bg-white !w-[500px] flex sm:flex-col items-center sm:p-6 gap-4 sm:gap-8 border rounded-lg">

                    <header className="text-center">
                        <h1 className="font-bold text-sm sm:text-lg">Create New Challenge</h1>
                        <p className="sm:text-sm text-tertiaryColor">Fill out these details to build your broadcast</p>
                    </header>

                    <ChallengeForm submitType="create" handleFormChange={handleFormChange} handleClearForm={handleClearForm} handleSubmitForm={handleSubmitForm} errors={errors} />

                </div>
            </div>

        </div>
    )
}

export default CreateChallenge;