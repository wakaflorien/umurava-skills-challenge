"use client";

import * as React from 'react';
import { PaginationProps } from '@/@types/global';
import Button from './Button';

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
            <Button className="tertiary-btn" disabled={currentPage <= 1} onClick={handlePrevious} >Previous</Button>

            <span className="text-sm text-primary">
                Page {currentPage} of {totalPages}
            </span>

            <Button className="primary-btn" disabled={currentPage >= totalPages} onClick={handleNext} >Next</Button>


        </div>
    );
};