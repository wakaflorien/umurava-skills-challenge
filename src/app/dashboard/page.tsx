"use client";
import * as React from 'react';
import { Button } from '@/components/Button';
import { Metric } from '@/components/Metric';
import { Card } from '@/components/Card';
import { useAuth } from '../../providers/AuthProvider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getChallenges } from '@/apis';
import { useQuery } from '@tanstack/react-query';

const DashboardHome = () => {
    // In-App imports
    const { data, authenticate } = useAuth();
    const router = useRouter();

    // In-App States
    React.useEffect(() => {
        if (!data.token) {
            const handleAuthentication = async () => {
                try {
                    await authenticate({ userRole: "participant" });
                } catch (error) {
                    console.error("Failed to authenticate:", error);
                    router.push("/");
                }
            };

            handleAuthentication();
        }
    }, [authenticate, router, data.token]);

    const { data: allChallenges, isLoading, error } = useQuery({ queryKey: ['challenges'], queryFn: getChallenges })

    const formattedAdminStats = [
        { title: "Completed challenges", value: !isLoading && !error && allChallenges?.data?.aggregates?.totalCompletedChallenges },
        { title: "Open challenges", value: !isLoading && !error && allChallenges?.data?.aggregates?.totalOngoingChallenges },
        { title: "Ongoing challenges", value: !isLoading && !error && allChallenges?.data?.aggregates?.totalOpenChallenges }
    ];

    const viewProfile = () => {
        console.log('View profile');
    }

    const handleSeeAll = () => {
        router.push("/dashboard/hackathons");
    }

    const handleViewSingle = (item) => {
        const url = `/dashboard/hackathons/${item.challengeName}?id=${item._id}`;
        router.push(url);
    };

    return (
        <div className="flex-1 sm:pb-24">
            <div className='flex sm:flex-col sm:px-4 gap-4 sm:gap-8'>
                <header className='flex items-center justify-between space-y-2'>
                    <div>
                        <h1 className='font-bold text-md sm:text-lg'>Welcome back {data.user.names},</h1>
                        <p>Build Work Experience through Skills Challenges</p>
                    </div>

                    <div>
                        <Button icon={<Image
                            src="/svgs/Show.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        />} classNames="bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-2 sm:p-3" label="View profile" onClick={() => viewProfile()} />
                    </div>

                </header>

                {isLoading ? (<p>Loading ... </p>) : (
                    <div className='grid sm:grid-cols-3 sm:gap-4'>
                        {formattedAdminStats.map((item, index) => (<Metric key={index} title={item.title} value={item.value} icon={<Image
                            src="/svgs/Document.svg"
                            alt="Document"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        />} />))}
                    </div>
                )}

                <div className='flex items-center justify-start sm:justify-between gap-4'>
                    <h1 className='font-bold text-xs sm:text-sm'>Recent Challenges</h1>
                    <div className='flex items-center sm:gap-2 gap-1 text-primary cursor-pointer' onClick={() => handleSeeAll()}>
                        {!isLoading && !error && allChallenges && allChallenges?.data && allChallenges?.data?.challenges?.length > 0 && (<>
                            <span>{"See all"}</span>
                            <Image
                                src="/svgs/chevron-right.svg"
                                alt="file"
                                width={4}
                                height={4}
                                className="h-4 w-4"
                            />
                        </>)}
                    </div>
                </div>

                {/* Challeges and Hackathons */}
                {isLoading && (<p>Loading ... </p>)}
                <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
                    {!isLoading && !error && allChallenges?.data?.challenges?.filter((item: { status: string }) => item.status.toLowerCase() === "open").slice(0, 3).map((item: { status: string, index: string, challengeName: string, skills: Array<string>, levels: Array<string>, duration: number }, index: number) => (<Card
                        status={item.status}
                        key={index}
                        image={`/white_logo.png`}
                        title={item.challengeName}
                        skills={item.skills}
                        seniority={item.levels}
                        timeline={`${item.duration} day(s)`}
                        onClick={() => handleViewSingle(item)}
                        imageWidth={150}
                        imageHeight={50}
                    />))}
                </div>

            </div>
        </div>
    );
};

export default DashboardHome;