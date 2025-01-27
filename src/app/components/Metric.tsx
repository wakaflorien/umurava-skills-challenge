"use client";

import * as React from 'react';
import { MetricProps } from '../@types/global';

export const Metric: React.FC<MetricProps> = ({ title, value, icon, classNames }) => {
    return (<div className='sm:p-4 border rounded-md border-[#D0E0FC]'>
        <div className={`flex items-center justify-between ${classNames}`}>
            <div className='flex sm:flex-col sm:gap-1 border-l-4 border-primary pl-2'>
                <p className='text-black text-sm'>{title}</p>
                <p className='text-black sm:text-md font-bold'>{value}</p>
            </div>
            <div className='bg-[#D0E0FC] h-12 w-12 rounded-full flex items-center justify-center'>
                {icon}
            </div>
        </div>
    </div>)
}