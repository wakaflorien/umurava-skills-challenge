import * as React from "react";
import Image from "next/image";
import { DivProps } from "../@types/global";

const Div: React.FC<DivProps> = ({ icon, title, desc, iconWidth, iconHeight }) => {
    return (
        <div className="bg-primary flex flex-col gap-4 sm:gap-8 rounded-lg text-white p-2 sm:p-8">
            <div className="bg-white w-fit p-2 rounded-md">
                <Image
                    className="cursor-pointer"
                    aria-hidden
                    src={icon}
                    alt="File icon"
                    width={iconWidth}
                    height={iconHeight}
                />
            </div>
            <div className="w-4/5 space-y-8">
                <h1 className="text-2xl sm:text-3xl sm:leading-tight font-bold">{title}</h1>
                <p>{desc} </p>
            </div>
        </div>
    )
}

export default Div;