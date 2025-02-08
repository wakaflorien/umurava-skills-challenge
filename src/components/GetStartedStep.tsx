import Image from "next/image";
import * as React from "react";
import { Button } from "./Button";
import { StepProps } from "@/@types/global";

export const GetStartedStep: React.FC<StepProps> = ({ stepCount, hasImage, image = "", title, desc, imageWidth, imageHeight }) => {
    return (
        <div className="bg-white flex flex-col gap-3 sm:gap-3 p-1 sm:p-0 border border-gray-200 rounded-lg">

            <div className="rounded-full self-start pt-2 pl-2">
                <Button classNames="w-fit bg-primary text-white text-xs sm:text-sm p-2 rounded-md sm:m-3" label={`Step ${stepCount}`} onClick={() => console.log("View step")} />
            </div>

            <div className="flex sm:flex-col gap-2 sm:gap-1 pl-4 sm:pl-8">
                <p className="text-secondary text-sm sm:text-lg font-bold">{title}</p>
                <p className="text-tertiaryColor text-xs sm:text-sm">{desc}</p>
            </div>

            {hasImage && (<div className="self-end rounded-br-lg">
                <Image
                    className={`!rounded-br-lg object-cover`}
                    src={image}
                    alt={`Frame one`}
                    width={imageWidth}
                    height={imageHeight}
                    priority
                />
            </div>)}
        </div>
    )
}