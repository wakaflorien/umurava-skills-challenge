"use client";
import * as React from 'react';
import { File } from '../../components/svgs';
import { Card } from '../../components/Card';
import { Pagination } from '@/app/components/Pagination';
import { hackathonsData } from '../page';
import { Button } from '@/app/components/Button';

const ITEMS_PER_PAGE = 6;

const tabs = [{ title: "All challenges", value: 500 }, { title: "Completed challenges", value: 5 }, { title: "Open challenges", value: 200 }, { title: "Ongoing challenges", value: 250 }];

const DashboardHackathons = () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const totalPages = Math.ceil(hackathonsData.length / ITEMS_PER_PAGE);

    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get current page items
    const currentItems = hackathonsData.slice(startIndex, endIndex);

    return (
        <div className="flex-1 sm:pb-24">
            <div className='flex sm:flex-col sm:px-4 gap-4 sm:gap-8'>
                <header className='space-y-2'>
                    <h1 className='font-bold text-md sm:text-lg'>Challenges</h1>
                    <p>Join a challenge or a hackathon to gain valuable work experience,</p>
                </header>

                <div className='flex sm:flex-row flex-col items-center justify-start gap-8 sm:gap-4'>
                    {tabs.map((item, index) => (<Button key={index} icon={<File className={`h-4 w-4`} />} classNames="w-fit bg-[#F0F2F5] hover:bg-[#D0E0FC] text-tertiaryColor hover:text-primary sm:text-sm border border-[#D0D5DD] hover:border-primary font-semibold p-2 sm:p-3" label={item.title} hasCount={true} count={item.value} onClick={() => console.log("Tabs changed")} />))}
                </div>

                {/* Challeges and Hackathons */}
                <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
                    {currentItems.map((item, index) => (<Card
                        key={startIndex + index}
                        image={item.image}
                        title={item.title}
                        skills={item.skills}
                        security={item.security}
                        timeline={item.timeline}
                        onClick={item.onClick}
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