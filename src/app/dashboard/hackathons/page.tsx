"use client";
import * as React from 'react';
import { Document } from '../../components/svgs';
import { Metric } from '../../components/Metric';
import Card from '../../components/Card';
import Pagination from '@/app/components/Pagination';

const ITEMS_PER_PAGE = 6;

const DashboardHackathons = () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const data = Array.from({ length: 16 }).map((_, index) => ({
        id: index,
        image: `/white_logo.png`,
        title: 'Design a Dashboard for SokoFund, FiniTech Product',
        skills: ["UI/UX Design", "User Research", "Product Design"],
        security: '(Junior, Intermediate, Senior)',
        timeline: '15 Days',
        onClick: () => console.log("View Challenge"),
        imageWidth: 150,
        imageHeight: 50
    }));

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get current page items
    const currentItems = data.slice(startIndex, endIndex);

    return (
        <div className="flex-1 sm:pb-24">
            <div className='flex sm:flex-col sm:px-4 gap-4 sm:gap-8'>
                <header className='space-y-2'>
                    <h1 className='font-bold text-md sm:text-lg'>Welcome back {`Hilaire`},</h1>
                    <p>Build Work Experience through Skills Challenges</p>
                </header>

                <div className='grid sm:grid-cols-3 sm:gap-4'>
                    {[{ title: "Completed challenges", value: 5 }, { title: "Open challenges", value: 200 }, { title: "Ongoing challenges", value: 250 }].map((item, index) => (<Metric key={index} title={item.title} value={item.value} icon={<Document className={`h-6 w-6 text-primary`} />} />))}
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