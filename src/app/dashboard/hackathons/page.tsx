"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { Pagination } from '@/components/Pagination';
import { Card } from '@/components/Card';

import { useAuth } from '@/providers/AuthProvider';
import { hackathonsData } from '@/utils/data';
import Image from 'next/image';

const ITEMS_PER_PAGE = 6;

const tabs = [{ id: 1, title: "All challenges", value: 500 }, { id: 2, title: "Completed challenges", value: 5 }, { id: 3, title: "Open challenges", value: 200 }, { id: 4, title: "Ongoing challenges", value: 250 }];

const DashboardHackathons = () => {
    const { userType } = useAuth();
    const router = useRouter();
    const [currentPage, setCurrentPage] = React.useState(1);
    const [activeTab, setActiveTab] = React.useState("all");

    const filteredData = React.useMemo(() => {
        return activeTab.toLowerCase() === "all" ? hackathonsData : hackathonsData.filter(item => item.status.toLowerCase() === activeTab.toLowerCase());
    }, [activeTab]);

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get current page items
    const currentItems = filteredData.slice(startIndex, endIndex);

    const handleChangeTab = (tab: string) => {
        setCurrentPage(1);
        setActiveTab(tab);
    };

    const navigateToCreate = () => {
        router.push("/dashboard/hackathons/create");
    }

    return (
        <div className="flex-1 sm:pb-24 sm:px-4">
            <div className='flex sm:flex-col gap-4 sm:gap-8'>
                <header className='space-y-2'>
                    <h1 className='font-bold text-md sm:text-lg'>Challenges</h1>
                    <p>Join a challenge or a hackathon to gain valuable work experience</p>
                </header>

                <div className='flex sm:flex-row flex-wrap flex-col items-center justify-start gap-8 sm:gap-4'>
                    {tabs.map((item, index) => (<Button key={index} icon={(<Image
                        src="/svgs/file.svg"
                        alt="file"
                        width={4}
                        height={4}
                        className="h-4 w-4 text-primary"
                        onClick={() => router.push("/")}
                    />)} classNames={`w-fit border ${item.title.split(" ")[0].toLowerCase() === activeTab ? "bg-[#D0E0FC] !border-primary" : "bg-[#F0F2F5]"} hover:bg-[#D0E0FC] text-tertiaryColor hover:text-primary sm:text-sm border-[#D0D5DD] hover:border-primary font-semibold p-2 sm:p-3`} label={item.title} hasCount={true} count={item.value} onClick={() => handleChangeTab(item.title.split(" ")[0])} />))}

                    {userType === "admin" && (<Button icon={(<Image
                        src="/svgs/plus.svg"
                        alt="file"
                        width={4}
                        height={4}
                        className="h-4 w-4 text-primary"
                        onClick={() => router.push("/")}
                    />)} classNames={`w-fit bg-primary text-white sm:text-sm font-semibold p-2 sm:p-4`} label={"Create New Challenge"} onClick={() => navigateToCreate()} />)}
                </div>

                {/* Challeges and Hackathons */}
                <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
                    {currentItems.map((item, index) => (<Card
                        status={item.status}
                        key={index}
                        image={item.image}
                        title={item.title}
                        skills={item.skills}
                        security={item.security}
                        timeline={item.timeline}
                        onClick={() => router.push(`/dashboard/hackathons/${item.title}`)}
                        imageWidth={150}
                        imageHeight={50}
                    />))}
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage} />
            </div>
        </div>
    );
};

export default DashboardHackathons;