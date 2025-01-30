"use client";

import * as React from 'react';
import { MetricProps } from '@/@types/global';
import { numberFormat } from '@/utils/formatNumber';

export const Metric: React.FC<MetricProps> = ({ title, value, icon, classNames }) => {
    return (<div className='bg-white sm:p-4 border rounded-md border-[#E4E7EC] cursor-pointer'>
        <div className={`flex items-center justify-between ${classNames}`}>
            <div className='relative flex sm:flex-col sm:gap-1  sm:pl-3'>
                <p className='text-black text-md'>{title}</p>
                <p className='text-black sm:text-md font-bold'>{numberFormat(value)}</p>
                <div className="absolute top-0 left-0 bg-primary h-10 w-1 rounded-lg shadow-md shadow-tertiary"></div>
            </div>
            <div className='bg-[#D0E0FC] h-12 w-12 rounded-full flex items-center justify-center'>
                {icon}
            </div>
        </div>
    </div>)
}