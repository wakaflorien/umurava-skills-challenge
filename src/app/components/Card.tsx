import * as React from "react";
import Image from "next/image";
import Button from "./Button";
import { CardProps } from "../@types/global";

const Card: React.FC<CardProps> = ({ image, isOpen, type, title, skills = [], security, timeline, onClick, name, location, jobTitle, imageWidth, imageHeight }) => {
    return (
        <div className="flex flex-col border border-tertiary rounded-lg">
            <div className="flex flex-col items-start justify-center sm:gap-3 sm:p-4">
                <div className="relative bg-primary flex flex-col w-[300px] h-[180px] items-center justify-center rounded-md">
                    {isOpen && (<Button classNames="absolute top-0 right-0 w-fit bg-success text-white sm:text-xs p-2 !rounded-full sm:m-3" label={"Open"} onClick={() => console.log("View Open")} />)}
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

                {type === "challenge" && (<>
                    <p className="text-black text-md sm:text-lg font-semibold">{title}</p>

                    <p className="text-black text-sm sm:text-md font-bold">Skills Needed:</p>

                    <div className="flex flex-wrap sm:gap-2">
                        {skills.map(item => (<Button key={item} classNames="w-fit bg-white text-primary sm:text-sm border border-primary p-1 !rounded-lg" label={item} onClick={() => console.log("View item")} />))}
                    </div>

                    <p className="text-black text-sm sm:text-md font-bold">Seniority Level : <span className="sm:tex-xs text-tertiaryColor font-normal">{security}</span></p>
                    <p className="text-black text-sm sm:text-md font-bold">Timeline : <span className="sm:tex-xs text-tertiaryColor font-normal">{timeline}</span></p>
                </>)}

                {type === "testimonial" && (<div className="flex sm:flex-row sm:gap-4">
                    <div className="bg-primary h-12 w-12 rounded-full"></div>
                    <div className="flex sm:flex-col sm:gap-1">
                        <p className="text-black text-sm sm:text-md font-bold">{name}</p>
                        <p className="text-tertiaryColor text-sm sm:text-md">{jobTitle}, {location}</p>
                    </div>
                </div>)}
            </div>
            {type === "challenge" && (<div className="border-t border-tertiary sm:p-4">
                <Button classNames="w-[150px] bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-2 sm:p-2" label="View Challenge" onClick={onClick} />
            </div>)}
        </div>
    )
}

export default Card