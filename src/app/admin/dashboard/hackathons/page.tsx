"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Pagination } from '@/components/Pagination';
import { Card } from '@/components/Card';

import Image from 'next/image';
import { getChallenges, getStatistics } from '@/apis';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/providers/AuthProvider';
import { CardSkeleton, TabsSkeleton } from '@/components/Skeletons';
import Oops from '@/components/Oops';

const ITEMS_PER_PAGE = 6;

const DashboardHackathons = () => {
    const { data, authenticate } = useAuth();
    const router = useRouter();
    const [currentPage, setCurrentPage] = React.useState(1);
    const [activeTab, setActiveTab] = React.useState("all");

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

    const { data: allChallenges, isLoading, error } = useQuery({ queryKey: ['challenges'], queryFn: getChallenges })
    const { data: dataAggregates, isLoading: isLoadingAggregates, error: aggregatesError } = useQuery({ queryKey: ['stats'], queryFn: () => getStatistics(data.token) });

    const tabs = [{ id: 1, title: "All challenges", value: dataAggregates?.data?.totalChallengesThisWeek }, { id: 2, title: "Completed challenges", value: dataAggregates?.data?.totalCompletedChallenges }, { id: 3, title: "Open challenges", value: dataAggregates?.data?.totalOpenChallenges }, { id: 4, title: "Ongoing challenges", value: dataAggregates?.data?.totalOngoingChallenges }];

    const filteredData = React.useMemo(() => {
        if (!isLoading && !error && allChallenges) {
            return activeTab.toLowerCase() === "all" ? allChallenges?.data.challenges : allChallenges?.data?.challenges.filter((item: { status: string }) => item.status.toLowerCase() === activeTab.toLowerCase());
        } else {
            return []
        }
    }, [activeTab, allChallenges, error, isLoading]);

    const totalPages = filteredData ? Math.ceil(filteredData.length / ITEMS_PER_PAGE) : 0;

    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get current page items
    const currentItems = filteredData ? filteredData.slice(startIndex, endIndex) : [];

    const filteredChallenges = (!isLoading && !error && allChallenges?.data?.challenges?.length > 0) ? currentItems : [];

    const handleChangeTab = (tab: string) => {
        setCurrentPage(1);
        setActiveTab(tab);
    };

    const navigateToCreate = () => {
        router.push("/admin/dashboard/hackathons/create");
    }

    const handleViewSingle = (item) => {
        const url = `/admin/dashboard/hackathons/${item.challengeName}?id=${item._id}`;
        router.push(url);
    };

    return (
        <div className="flex-1 sm:pb-24 sm:px-4">
            <div className='flex sm:flex-col gap-4 sm:gap-8'>
                <header className='space-y-2'>
                    <h1 className='font-bold text-md sm:text-lg'>Challenges</h1>
                    <p>Join a challenge or a hackathon to gain valuable work experience</p>
                </header>

                {isLoadingAggregates || aggregatesError ? (<TabsSkeleton count={5} />) : (<div className='flex sm:flex-row flex-wrap flex-col items-center justify-start gap-8 sm:gap-4'>
                    {tabs.map((item, index) => (<Button
                        key={index}
                        icon={(<Image
                            src="/svgs/file.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                            onClick={() => router.push("/")}
                        />)} 
                        classNames={`w-fit border ${item.title.split(" ")[0].toLowerCase() === activeTab ? "bg-[#D0E0FC] !border-primary" : "bg-[#F0F2F5]"} hover:bg-[#D0E0FC] text-tertiaryColor hover:text-primary sm:text-sm border-[#D0D5DD] hover:border-primary font-semibold p-2 sm:p-3`} label={item.title} hasCount={true} count={item.value} 
                        onClick={() => handleChangeTab(item.title.split(" ")[0])} />))}

                    <Button icon={(<Image
                        src="/svgs/plus.svg"
                        alt="file"
                        width={4}
                        height={4}
                        className="h-4 w-4 text-primary"
                        onClick={() => router.push("/")}
                    />)} classNames={`w-fit bg-primary text-white sm:text-sm font-semibold p-2 sm:p-4`} label={"Create New Challenge"} onClick={() => navigateToCreate()} />
                </div>)}

                {/* Challeges and Hackathons */}
                {isLoading || error ? (<CardSkeleton count={3} />) : (
                    <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
                        {filteredChallenges?.length > 0 ? filteredChallenges.map((item: { status: string, index: string, challengeName: string, skills: Array<string>, levels: Array<string>, duration: number }, index: number) => (<Card
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
                        />)) : (<Oops desc={"Oops!, No Challenges available"} />)}
                    </div>
                )}

                {filteredChallenges?.length > 0 && (<Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage} />)}
            </div>
        </div>
    );
};

export default DashboardHackathons;