"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChallengeFormProps, CustomChangeEvent } from "@/@types/global";
import { validateForm } from "@/utils/validation";
import { ChallengeForm } from "@/components/ChallengesForm";
import Image from "next/image";
import { useAuth } from "@/providers/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postChallenge } from "@/apis";
const Modal = React.lazy(() => import('@/components/Modal'));

const CreateChallenge = () => {
    // In-App imports
    const queryClient = useQueryClient();
    const router = useRouter();
    const { data, authenticate } = useAuth();


    // In-App Data states
    const [errors, setErrors] = React.useState<ChallengeFormProps>({});
    const [formState, setFormState] = React.useState<ChallengeFormProps>({
        challengeName: "",
        endDate: "",
        startDate: "",
        moneyPrize: "",
        contactEmail: "",
        projectDescription: "",
        projectBrief: "",
        projectTasks: "",
        levels: [],
        skills: []
    })
    const [modal, setModal] = React.useState({ open: false, message: "", title: "" })
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
    const mutation = useMutation({
        mutationFn: ({ token, payload }: { token: string, payload: ChallengeFormProps }) => postChallenge(token, payload),
        onSuccess: async (response) => {
            // Invalidate and refetch
            if(response.status === "error"){
                setModal({ open: true, message: response.message, title: "Failed" })
            } else {
                queryClient.invalidateQueries({ queryKey: ['challenges'] })
                await handleClearForm();
                router.push("/admin/dashboard/hackathons");
            }
        },
        onError: () => {
            setModal({ open: true, message: "Challenge creation Failed ", title: "Failed" })
        }
    })


    // Action Functions
    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | CustomChangeEvent
    ) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleClearForm = async () => {
        setFormState({
            challengeName: "",
            startDate: "",
            endDate: "",
            moneyPrize: "",
            contactEmail: "",
            projectDescription: "",
            projectBrief: "",
            projectTasks: "",
            levels: [],
            skills: []
        });
        setErrors({});
    };

    const handleSubmitForm = async () => {
        if (await validateForm(formState, setErrors)) {
            mutation.mutate({ token: data.token, payload: formState })
        } else {
            setModal({ open: true, message: "Your form have some validation errors", title: "Failed" })
        }
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
                    <span className="text-primary">Create New Challenge</span>
                </div>
            </div>

            <div className="w-full flex sm:flex-col items-center">
                <div className="bg-white !w-[500px] flex sm:flex-col items-center sm:p-6 gap-4 sm:gap-8 border rounded-lg">

                    <header className="text-center">
                        <h1 className="font-bold text-sm sm:text-lg">Create New Challenge</h1>
                        <p className="sm:text-sm text-tertiaryColor">Fill out these details to build your broadcast</p>
                    </header>

                    <ChallengeForm submitType="create" handleFormChange={handleFormChange} handleClearForm={handleClearForm} handleSubmitForm={handleSubmitForm} values={formState} errors={errors} />

                </div>
            </div>

            {/* Modals */}
            <Modal
                isOpen={modal.open}
                onClose={() => setModal({ ...modal, open: false })}
                title={modal.title}
            >
                <div className='flex flex-col items-start justify-start sm:gap-4'>
                    <p className='text-center'>{modal.message}</p>
                </div>
            </Modal>
        </div>
    )
}

export default CreateChallenge;