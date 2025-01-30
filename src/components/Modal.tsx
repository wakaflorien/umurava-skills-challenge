"use client";

import * as React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title = "", children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div
                    className={`relative w-full max-w-lg transform rounded-lg  p-6 shadow-xl transition-all bg-white`}
                >
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-end ">
                        {title !== "" && (<h2
                            className={`text-lg md:text-xl font-semibold  text-primary`}
                        >
                            {title}
                        </h2>)}
                        <button
                            onClick={onClose}
                            className={` rounded-full h-10 w-10 p-2 text-[#E5533C] hover:bg-primary hover:bg-opacity-10 transition-colors`}
                        >
                            X
                        </button>
                    </div>

                    {/* Content */}
                    <div className="mt-2">{children}</div>
                </div>
            </div>
        </div>
    );
}
