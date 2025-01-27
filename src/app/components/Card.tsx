import * as React from "react";
import Image from "next/image";
import Button from "./Button";
import { CardProps } from "../@types/global";

const Card: React.FC<CardProps> = ({ image, title, skills = [], security, timeline, onClick, imageWidth, imageHeight }) => {
    return (
        <div className="bg-white flex flex-col border border-gray-200 rounded-lg">
            <div className="flex flex-col items-start justify-center sm:gap-3 sm:p-4">
                <div className="relative bg-primary flex flex-col w-full h-[180px] items-center justify-center rounded-md">
                    <Button classNames="absolute top-0 right-0 w-fit bg-success text-white sm:text-xs p-2 !rounded-full sm:m-3" label={"Open"} onClick={() => console.log("View Open")} />
                    {/* sm:self-end */}
                    <Image
                        src={image}
                        alt={`Hero banner logo`}
                        width={imageWidth}
                        height={imageHeight}
                        priority
                        objectFit="cover"
                    />
                </div>

                <p className="text-black text-sm sm:text-md font-bold capitalize">{title}</p>

                <p className="text-black text-xs sm:text-sm font-semibold capitalize">Skills Needed:</p>

                <div className="flex flex-wrap sm:gap-2">
                    {skills.map(item => (<Button key={item} classNames="w-fit bg-white text-primary text-xs border border-primary p-1 !rounded-lg" label={item} onClick={() => console.log("View item")} />))}
                </div>

                <p className="text-black text-sm sm:text-md font-bold">Seniority Level : <span className="sm:tex-xs text-tertiaryColor font-normal">{security}</span></p>
                <p className="text-black text-sm sm:text-md font-bold">Timeline : <span className="sm:tex-xs text-tertiaryColor font-normal">{timeline}</span></p>

            </div>

            <div className="border-t border-tertiary sm:p-4">
                <Button classNames="w-[150px] bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-1 sm:p-2" label="View Challenge" onClick={onClick} />
            </div>
        </div>
    )
}

export default Card