"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { ChallengeFormProps } from "@/@types/global";
import { ChallengeForm } from "@/components/ChallengesForm";
import { useAuth } from "@/providers/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postChallenge } from "@/apis";
const Modal = React.lazy(() => import('@/components/Modal'));

// Validation Schema
const validationSchema = Yup.object().shape({
    challengeName: Yup.string().required('Challenge name is required'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date()
        .required('End date is required')
        .min(Yup.ref('startDate'), 'End date must be after start date'),
    moneyPrize: Yup.string().required('Prize amount is required'),
    contactEmail: Yup.string().email('Invalid email').required('Email is required'),
    projectDescription: Yup.string().required('Project description is required'),
    projectBrief: Yup.string().required('Project brief is required'),
    projectTasks: Yup.string().required('Project tasks are required'),
    levels: Yup.array().min(1, 'At least one level is required'),
    skills: Yup.array().min(1, 'At least one skill is required')
});

const CreateChallenge = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { data } = useAuth();
    const [modal, setModal] = React.useState({ open: false, message: "", title: "" });

    const initialValues: ChallengeFormProps = {
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
    };

    // Mutation
    const mutation = useMutation({
        mutationFn: ({ token, payload }: { token: string, payload: ChallengeFormProps }) =>
            postChallenge(token, payload),
        onSuccess: async (response) => {
            if (response.status === "error") {
                toast.error(response.message);
                setModal({ open: true, message: response.message, title: "Failed" });
            } else {
                toast.success("Challenge created successfully!");
                queryClient.invalidateQueries({ queryKey: ['challenges'] });
                router.push("/admin/dashboard/hackathons");
            }
        },
        onError: () => {
            toast.error("Failed to create challenge");
            setModal({ open: true, message: "Challenge creation Failed ", title: "Failed" });
        }
    });

    const handleSubmit = (values: ChallengeFormProps) => {
        mutation.mutate({ token: data.token, payload: values });
    };

    return (
        <div className="sm:px-4 flex-1 sm:pb-24 space-y-4">
            <div className="bg-white sm:p-4 border rounded-lg">
                {/* Navigation header remains the same */}
            </div>

            <div className="w-full flex sm:flex-col items-center">
                <div className="bg-white !w-[500px] flex sm:flex-col items-center sm:p-6 gap-4 sm:gap-8 border rounded-lg">
                    <header className="text-center">
                        <h1 className="font-bold text-sm sm:text-lg">Create New Challenge</h1>
                        <p className="sm:text-sm text-tertiaryColor">Fill out these details to build your broadcast</p>
                    </header>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, handleChange, handleSubmit, handleReset }) => (
                            <ChallengeForm
                                submitType="create"
                                handleFormChange={handleChange}
                                handleClearForm={handleReset}
                                handleSubmitForm={handleSubmit}
                                values={values}
                                errors={errors}
                            />
                        )}
                    </Formik>
                </div>
            </div>

            <Modal
                isOpen={modal.open}
                onClose={() => setModal({ open: false, message: "", title: "" })}
                title={modal.title}
            >
                <div className='flex flex-col items-start justify-start sm:gap-4'>
                    <p className='text-center'>{modal.message}</p>
                </div>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default CreateChallenge;
