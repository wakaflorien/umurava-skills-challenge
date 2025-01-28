"use client";
import * as React from 'react';
import { Button } from '../components/Button';
import { ChevronRight, Document, Show } from '../components/svgs';
import { Metric } from '../components/Metric';
import { Card } from '../components/Card';

export const hackathonsData = Array.from({ length: 16 }).map((_, index) => ({
    status: index % 2 === 0 ? 'Open' : index % 3 === 0 ? 'Ongoing' : 'Completed',
    id: index + 1,
    image: `/white_logo.png`,
    title: 'Design a Dashboard for SokoFund, FiniTech Product',
    skills: ["UI/UX Design", "User Research", "Product Design"],
    security: '(Junior, Intermediate, Senior)',
    timeline: '15 Days',
    onClick: () => console.log("View Challenge"),
    imageWidth: 150,
    imageHeight: 50
}));

const DashboardHome = () => {
    const [showAll, setShowAll] = React.useState(false);
    const [showCount, setShowCount] = React.useState(3);

    const viewProfile = () => {
        console.log('View profile');
    }

    const handleSeeAll = () => {
        setShowAll(!showAll);
        if (showAll) {
            setShowCount(3)
        } else {
            setShowCount(16)
        }
    }

    return (
        <div className="flex-1 sm:pb-24">
            <div className='flex sm:flex-col sm:px-4 gap-4 sm:gap-8'>
                <header className='flex items-center justify-between space-y-2'>
                    <div>
                        <h1 className='font-bold text-md sm:text-lg'>Welcome back {`Hilaire`},</h1>
                        <p>Build Work Experience through Skills Challenges</p>
                    </div>
                    <div>
                        <Button icon={<Show className={`h-4 w-4`} />} classNames="bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-2 sm:p-3" label="View profile" onClick={() => viewProfile()} />
                    </div>
                </header>

                <div className='grid sm:grid-cols-3 sm:gap-4'>
                    {[{ title: "Completed challenges", value: 5 }, { title: "Open challenges", value: 200 }, { title: "Ongoing challenges", value: 250 }].map((item, index) => (<Metric key={index} title={item.title} value={item.value} icon={<Document className={`h-6 w-6 text-primary`} />} />))}
                </div>

                <div className='flex items-center justify-start sm:justify-between gap-4'>
                    <h1 className='font-bold text-xs sm:text-sm'>Recent Challenges</h1>
                    <div className='flex items-center sm:gap-2 gap-1 text-primary cursor-pointer' onClick={() => handleSeeAll()}>
                        <span>{showAll ? "See less" : "See all"}</span>
                        <ChevronRight className='h-4 w-4' />
                    </div>
                </div>

                {/* Challeges and Hackathons */}
                <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
                    {hackathonsData.slice(0, showCount).map((item, index) => (<Card
                        status={item.status}
                        key={index}
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

            </div>
        </div>
    );
};

export default DashboardHome;