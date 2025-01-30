"use client";
import * as React from 'react';
import { Button } from '@/components/Button';
import { Metric } from '@/components/Metric';
import { Card } from '@/components/Card';
import { AdminMetric } from '@/components/AdminMetric';
import { useAuth } from '../../providers/AuthProvider';
import { hackathonsData } from '@/utils/data';
import Image from 'next/image';


const userStats = [{ title: "Completed challenges", value: 5 }, { title: "Open challenges", value: 200 }, { title: "Ongoing challenges", value: 250 }];

const adminStats = [{ title: "Total challenges", value: 29405, percentage: " 15%", period: "This Week" }, { title: "Total Participants", value: 29405, percentage: " 15%", period: "This Week" }, { title: "Completed challenges", value: 5837, percentage: " 15%", period: "Last 30 days" }, { title: "Open challenges", value: 5837, percentage: " 15%", period: "Last 30 days" }, { title: "Ongoing challenges", value: 5837, percentage: " 15%", period: "Last 30 days" }];

const DashboardHome = () => {
    const { userType } = useAuth();

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

                    {userType === "participant" && (<div>
                        <Button icon={<Image
                            src="/svgs/Show.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4 text-primary"
                        />} classNames="bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-2 sm:p-3" label="View profile" onClick={() => viewProfile()} />
                    </div>)}

                </header>

                {userType === "participant" ? (<div className='grid sm:grid-cols-3 sm:gap-4'>
                    {userStats.map((item, index) => (<Metric key={index} title={item.title} value={item.value} icon={<Image
                        src="/svgs/Document.svg"
                        alt="Document"
                        width={4}
                        height={4}
                        className="h-4 w-4 text-primary"
                    />} />))}
                </div>) : (<div className='grid sm:grid-row-2 sm:gap-4'>

                    <div className='grid sm:grid-cols-2 sm:gap-4'>
                        {adminStats.slice(0, 2).map((item, index) => (<AdminMetric key={index} title={item.title} value={item.value} percentage={item.percentage} period={item.period} icon={item.title.toLowerCase().includes("participant") ? <Image
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
                        {adminStats.slice(2, 5).map((item, index) => (<AdminMetric key={index} title={item.title} value={item.value} percentage={item.percentage} period={item.period} icon={item.title.toLowerCase().includes("participant") ? <Image
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

                </div>)}

                <div className='flex items-center justify-start sm:justify-between gap-4'>
                    <h1 className='font-bold text-xs sm:text-sm'>Recent Challenges</h1>
                    <div className='flex items-center sm:gap-2 gap-1 text-primary cursor-pointer' onClick={() => handleSeeAll()}>
                        <span>{showAll ? "See less" : "See all"}</span>
                        {/* <ChevronRight className='h-4 w-4' /> */}
                        <Image
                            src="/svgs/chevron-right.svg"
                            alt="file"
                            width={4}
                            height={4}
                            className="h-4 w-4"
                        />
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
                        onClick={() => console.log("View Challenge")}
                        imageWidth={150}
                        imageHeight={50}
                    />))}
                </div>

            </div>
        </div>
    );
};

export default DashboardHome;