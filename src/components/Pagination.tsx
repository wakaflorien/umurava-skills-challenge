"use client";

import * as React from 'react';
import {Button} from './Button';
import { PaginationProps } from '@/@types/global';

export const Pagination: React.FC<PaginationProps> = ({ currentPage = 1, totalPages = 1, onPageChange }) => {

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className='flex items-center justify-between gap-4'>
            <Button classNames="w-fit bg-[#D0E0FC] text-primary sm:text-sm hover:bg-primary/20 font-semibold p-2 sm:p-3" label="Previous" disabled={currentPage <= 1} onClick={handlePrevious} />

            <span className="text-sm text-primary">
                Page {currentPage} of {totalPages}
            </span>

            <Button classNames="w-fit bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Next"  disabled={currentPage >= totalPages} onClick={handleNext} />

        
        </div>
    );
};