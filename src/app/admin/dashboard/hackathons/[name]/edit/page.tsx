"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChallengeFormProps } from "@/@types/global";
import { ChallengeForm } from "@/components/ChallengesForm";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editChallenge, getSingleChallenge } from "@/apis";
import { useAuth } from "@/providers/AuthProvider";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import dayjs from "dayjs";

const validationSchema = Yup.object().shape({
    challengeName: Yup.string().required('Challenge name is required'),
    startDate: Yup.string().required('Start date is required'),
    endDate: Yup.string().required('End date is required'),
    moneyPrize: Yup.string().required('Prize amount is required'),
    contactEmail: Yup.string().email('Invalid email').required('Email is required'),
    projectDescription: Yup.string().required('Project description is required'),
    projectBrief: Yup.string().required('Project brief is required'),
    projectTasks: Yup.string().required('Project tasks are required'),
    skills: Yup.array().min(1, 'At least one skill is required'),
    levels: Yup.array().min(1, 'At least one level is required'),
});

const EditChallenge = ({ searchParams }) => {
    const queryClient = useQueryClient();
    const { id }: { id: string } = React.use(searchParams);
    const { data } = useAuth();
    const router = useRouter();

    const { data: singleChallenge, isLoading, error } = useQuery({
        queryKey: ['challenges', id],
        queryFn: () => getSingleChallenge(id),
        enabled: !!id,
    });

    const mutation = useMutation({
        mutationFn: ({ token, id, payload }: { token: string, id: string, payload: ChallengeFormProps }) =>
            editChallenge(token, id, payload),
        onSuccess: async (response) => {
            if (response.status === "error") {
                toast.error(response.message);
            } else {
                toast.success('Challenge updated successfully');
                queryClient.invalidateQueries({ queryKey: ['challenges'] });
                router.push("/admin/dashboard/hackathons");
            }
        },
        onError: () => {
            toast.error('Failed to update challenge');
        }
    });

    const initialValues: ChallengeFormProps = {
        challengeName: singleChallenge?.data?.challengeName || "",
        startDate: dayjs(singleChallenge?.data?.startDate).format("YYYY-MM-DD") || "",
        endDate: dayjs(singleChallenge?.data?.endDate).format("YYYY-MM-DD") || "",
        moneyPrize: singleChallenge?.data?.moneyPrize || "",
        contactEmail: singleChallenge?.data?.contactEmail || "",
        projectDescription: singleChallenge?.data?.projectDescription || "",
        projectBrief: singleChallenge?.data?.projectBrief || "",
        projectTasks: singleChallenge?.data?.projectTasks || "",
        skills: singleChallenge?.data?.skills || [],
        levels: singleChallenge?.data?.levels || [],
    };

    return (
            <div className="sm:px-4 flex-1 sm:pb-24 space-y-4">
                <div className="bg-white sm:p-4 border rounded-lg">
                    <div className="flex gap-2 sm:gap-4 cursor-pointer">
                        <div className="flex items-center gap-2 text-tertiaryColor"
                            onClick={() => router.push("/admin/dashboard/hackathons")}>
                            <Image
                                src="/svgs/arrow-left.svg"
                                alt="file"
                                width={4}
                                height={4}
                                className="h-4 w-4 text-primary"
                            />
                            Go back
                        </div>
                        <span className="text-tertiaryColor">/</span>
                        <span className="text-tertiaryColor"
                            onClick={() => router.push('/admin/dashboard/hackathons')}>
                            Challenge & Hackathons
                        </span>
                        <span className="text-tertiaryColor"> / </span>
                        <span className="text-primary">Edit a Challenge</span>
                    </div>
                </div>

                <div className="w-full flex sm:flex-col items-center"></div>
                <div className="bg-white !w-[500px] flex sm:flex-col items-center sm:p-6 gap-4 sm:gap-8 border rounded-lg">
                    <header className="text-center">
                        <h1 className="font-bold text-sm sm:text-lg">Edit a Challenge</h1>
                        <p className="sm:text-sm text-tertiaryColor">
                            Fill out these details to build your broadcast
                        </p>
                    </header>

                    {isLoading ? (
                        <p>Loading ...</p>
                    ) : error ? (
                        <p>Error loading challenge</p>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                mutation.mutate({
                                    token: data.token,
                                    id,
                                    payload: values
                                });
                            }}
                        >
                            {(formikProps) => (
                                <ChallengeForm
                                    submitType="edit"
                                    handleFormChange={formikProps.handleChange}
                                    handleSubmitForm={formikProps.handleSubmit}
                                    handleClearForm={() => formikProps.resetForm()}
                                    errors={formikProps.errors}
                                    values={formikProps.values}
                                />
                            )}
                        </Formik>
                    )}
                </div>
                <ToastContainer />
            </div>
    );
};

export default EditChallenge;
