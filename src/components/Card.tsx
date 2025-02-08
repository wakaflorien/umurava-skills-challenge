import * as React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { CardProps } from "@/@types/global";

export const Card: React.FC<CardProps> = ({ status, image, title, skills = [], seniority, timeline, onClick, imageWidth, imageHeight }) => {
    return (
        <div className="bg-white flex flex-col border border-gray-200 rounded-lg">
            <div className="flex flex-col items-start justify-center gap-2 sm:gap-3 p-2 sm:p-4">
                <div className="relative bg-primary flex flex-col w-full h-[180px] items-center justify-center rounded-md">
                    <Button classNames={`absolute top-0 right-0 w-fit ${status.toLowerCase() === "open" ? "bg-success" : status.toLowerCase() === "ongoing" ? "bg-orange-500" : "bg-pink-700"} text-white text-xs py-1 px-2 !rounded-full m-2 sm:m-3`} label={status.toLowerCase()} onClick={() => console.log("View Open")} />
                    {/* sm:self-end */}
                    <Image
                        src={image}
                        alt={`Hero banner logo`}
                        width={imageWidth}
                        height={imageHeight}
                        priority
                        className={`object-cover`}
                    />
                </div>

                <p className="text-secondary text-sm sm:text-md font-bold capitalize">{title}</p>

                <p className="text-secondary text-xs sm:text-sm font-semibold capitalize">Skills Needed:</p>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.map(item => (<Button key={item} classNames="w-fit bg-white text-primary text-xs border border-primary p-1 !rounded-lg" label={item} onClick={() => console.log("View item")} />))}
                </div>

                <p className="text-secondary text-sm sm:text-md font-bold sm:space-x-2">Seniority Level : <span className="sm:tex-xs text-tertiaryColor font-normal">( {seniority?.join(", ")} )</span></p>
                <p className="text-secondary text-sm sm:text-md font-bold">Timeline : <span className="sm:tex-xs text-tertiaryColor font-normal">{timeline}</span></p>

            </div>

            <div className="border-t border-tertiary p-2 sm:p-4">
                <Button classNames="w-[150px] bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-1 sm:p-2" label="View Challenge" onClick={onClick} />
            </div>
        </div>
    )
}