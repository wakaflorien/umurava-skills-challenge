"use client";
import * as React from 'react';
import { Card } from '@/components/Card';
import { AdminMetric } from '@/components/AdminMetric';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getChallenges, getStatistics } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/providers/AuthProvider';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { AdminMetricSkeleton, CardSkeleton } from '@/components/Skeletons';

const DashboardHome = () => {
    // In-App imports
    const { data, authenticate } = useAuth();
    const router = useRouter();

    // In-App States
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

    // API queries
    const { data: allChallenges, isLoading, error } = useQuery({ queryKey: ['challenges'], queryFn: getChallenges })
    const { data: dataAggregates, isLoading: isLoadingAggregates, error: aggregatesError } = useQuery({ queryKey: ['stats'], queryFn: () => getStatistics(data.token) });

    const formattedAdminStats = [
        { title: "Total challenges", value: dataAggregates?.data?.totalChallengesThisWeek, percentage: !isLoadingAggregates && dataAggregates?.data?.totalChallengesThisWeekChange, period: "This Week", direction: !isLoadingAggregates && dataAggregates?.data?.totalChallengesThisWeekChangeDirection },

        { title: "Total Participants", value: dataAggregates?.data?.totalParticipantsThisWeek, percentage: !isLoadingAggregates && dataAggregates?.data?.totalParticipantsThisWeekChange, period: "This Week", direction: !isLoadingAggregates && dataAggregates?.data?.totalParticipantsThisWeekChangeDirection },

        { title: "Completed challenges", value: dataAggregates?.data?.totalCompletedChallenges, percentage: !isLoadingAggregates && dataAggregates?.data?.totalCompletedChallengesChange, period: "Last 30 days", direction: !isLoadingAggregates && dataAggregates?.data?.totalCompletedChallengesChangeDirection },

        { title: "Open challenges", value: !isLoadingAggregates && dataAggregates?.data?.totalOngoingChallenges, percentage: !isLoadingAggregates && dataAggregates?.data?.totalOngoingChallengesChange, period: "Last 30 days", direction: !isLoadingAggregates && dataAggregates?.data?.totalOngoingChallengesChangeDirection },

        { title: "Ongoing challenges", value: dataAggregates?.data?.totalOpenChallenges, percentage: !isLoadingAggregates && dataAggregates?.data?.totalOpenChallengesChange, period: "Last 30 days", direction: !isLoadingAggregates && dataAggregates?.data?.totalOpenChallengesChangeDirection }
    ];

    const filteredChallenges = ( allChallenges?.data?.challenges?.length > 0) ? allChallenges?.data?.challenges : [];

    // Action Functions
    const handleSeeAll = () => {
        router.push("/admin/dashboard/hackathons");
    }

    const handleViewSingle = (item) => {
        const url = `/admin/dashboard/hackathons/${item.challengeName}?id=${item._id}`;
        router.push(url);
    };

    return (
        <div className="flex-1 sm:pb-24">
            <div className='flex sm:flex-col sm:px-4 gap-4 sm:gap-8'>
                <header className='flex items-center justify-between space-y-2'>
                    <div>
                        <h1 className='font-bold text-md sm:text-lg'>Welcome back {data && data.user.names},</h1>
                        <p>Build Work Experience through Skills Challenges</p>
                    </div>
                </header>

                {isLoadingAggregates || aggregatesError ? (<AdminMetricSkeleton />) : <div className='grid sm:grid-row-2 sm:gap-4'>
                    <div className='grid sm:grid-cols-2 sm:gap-4'>
                        {formattedAdminStats.slice(0, 2).map((item, index) => (<AdminMetric key={index} title={item.title} value={item.value} percentage={item.percentage} direction={item.direction} period={item.period} icon={item.title.toLowerCase().includes("participant") ? <Image
                            src="/svgs/3User.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        /> : <Image
                            src="/svgs/Document.svg"
                            alt="Document"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        />} />))}
                    </div>

                    <div className='grid sm:grid-cols-3 sm:gap-4'>
                        {formattedAdminStats.slice(2, 5).map((item, index) => (<AdminMetric key={index} title={item.title} value={item.value} percentage={item.percentage} direction={item.direction} period={item.period} icon={item.title.toLowerCase().includes("participant") ? <Image
                            src="/svgs/3User.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        /> : <Image
                            src="/svgs/Document.svg"
                            alt="Document"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        />} />))}
                    </div>

                </div>}

                <div className='flex items-center justify-start sm:justify-between gap-4'>
                    <h1 className='font-bold text-xs sm:text-sm'>Recent Challenges</h1>
                    <div className='flex items-center sm:gap-2 gap-1 text-primary cursor-pointer' onClick={() => handleSeeAll()}>
                        {!isLoading && !error && allChallenges && allChallenges?.data && allChallenges?.data.challenges?.length > 0 && (
                            <>
                                <span>{"See all"}</span>
                                <Image
                                    src="/svgs/chevron-right.svg"
                                    alt="file"
                                    width={4}
                                    height={4}
                                    className="h-4 w-4"
                                />
                            </>
                        )}
                    </div>
                </div>

                {/* Challeges and Hackathons */}
                {isLoading || error ? (<CardSkeleton count={3} />) : (
                    <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
                        {filteredChallenges?.length > 0 ? filteredChallenges?.slice(0, 3)?.map((item: { status: string, index: string, challengeName: string, skills: Array<string>, levels: Array<string>, duration: number }, index: number) => (<Card
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
                        />)) : (<div className='h-[40vh] flex items-center justify-center sm:gap-4'>
                            <Icon icon="tabler:mood-empty" width="34" height="34" className="text-primary" />
                            <p className='text-primary font-bold'>Oops!, No Open Challenges available</p>
                        </div>)}
                    </div>
                )}

            </div>
        </div>
    );
};

export default DashboardHome;