import * as React from "react";
import Image from "next/image";
import { MiniCardProps } from "../@types/global";

export const MiniCard: React.FC<MiniCardProps> = ({ image, name, location, jobTitle, imageWidth, imageHeight }) => {
    return (
        <div className="bg-white flex flex-col border border-gray-200 rounded-lg">
            <div className="flex flex-col items-start justify-center sm:gap-3 sm:p-4">
                <div className="relative bg-primary flex flex-col w-[300px] h-[180px] items-center justify-center rounded-md">

                    <Image
                        src={image}
                        alt={`Hero banner logo`}
                        width={imageWidth}
                        height={imageHeight}
                        priority
                        className={`object-cover`}
                    />
                </div>

                <div className="flex sm:flex-row sm:gap-4">
                    <div className="bg-primary h-12 w-12 rounded-full"></div>
                    <div className="flex sm:flex-col sm:gap-1">
                        <p className="text-black text-sm sm:text-md font-bold">{name}</p>
                        <p className="text-tertiaryColor text-sm sm:text-md">{jobTitle}, {location}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}