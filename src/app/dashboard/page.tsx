"use client";
import * as React from 'react';
import Button from '../components/Button';
import { Document, Show } from '../components/svgs';
import { Metric } from '../components/Metric';

const DashboardLayout = () => {

    const viewProfile = () => {
        console.log('View profile');
    }

    return (
        <div className="flex-1">
            <div className='flex sm:flex-col sm:px-4 sm:gap-4'>
                <header className='flex items-center justify-between space-y-2'>
                    <div>
                        <h1 className='font-bold text-lg sm:text-xl'>Welcome back {`Hilaire`},</h1>
                        <p>Build Work Experience through Skills Challenges</p>
                    </div>
                    <div>
                        <Button icon={<Show className={`h-6 w-6`} />} classNames="w-[150px] bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-2 sm:p-3" label="View profile" onClick={() => viewProfile()} />
                    </div>
                </header>

                <div className='grid sm:grid-cols-3 sm:gap-4'>
                    <Metric title="Total Points" value={200} icon={<Document className={`h-6 w-6 text-primary`} />} />
                    <Metric title="Total Points" value={200} icon={<Document className={`h-6 w-6 text-primary`} />} />
                    <Metric title="Total Points" value={200} icon={<Document className={`h-6 w-6 text-primary`} />} />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;