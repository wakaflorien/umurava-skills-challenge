"use client";

import * as React from 'react';
import { MetricProps } from '@/@types/global';
import { numberFormat } from '@/utils/formatNumber';
import Image from 'next/image';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

export const AdminMetric: React.FC<MetricProps> = ({ title, value, icon, period, percentage, classNames, direction }) => {
    return (<div className='bg-white h-[150px] flex justify-between sm:p-4 border rounded-lg border-[#E4E7EC] cursor-pointer'>
        <div className={`flex items-center ${classNames}`}>
            <div className='flex'>
                <div className='bg-[#D0E0FC] h-12 w-12 rounded-full flex items-center justify-center'>
                    {icon}
                </div>
                <div className=' flex sm:flex-col sm:gap-1  sm:pl-3'>
                    <p className='text-black text-sm'>{title}</p>
                    <div className='flex sm:gap-4'>
                        <p className='text-black sm:text-md font-bold'>{numberFormat(value)}</p>
                        {direction === "positive" ? (<div className='text-primary font-semibold bg-[#E7F6EC] flex items-center sm:text-sm sm:py-1 sm:px-2 rounded-full '>
                            <Image
                                src="/svgs/arrow-up.svg"
                                alt="file"
                                width={4}
                                height={4}
                                className="h-4 w-4"
                            />
                            {percentage}%
                        </div>) : <div className='text-red-500 font-semibold bg-red-100 flex items-center sm:text-sm sm:py-1 sm:px-2 rounded-full '>
                            <Icon icon="mynaui:arrow-long-down" width="16" height="16" className='text-red-500' />
                            {percentage}%
                        </div>}
                    </div>
                </div>
            </div>
        </div>

        <div className='text-tertiaryColor self-start flex items-center sm:gap-2'>
            <p className='text-xs'>{period}</p>
            <Image
                src="/svgs/chevron-down.svg"
                alt="file"
                width={4}
                height={4}
                className="h-4 w-4"
            />
        </div>

    </div>)
}