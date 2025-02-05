import * as React from "react"
import Image from "next/image"
import { DivProps } from "@/@types/global"

export const MiniDiv: React.FC<DivProps> = ({ icon, iconWidth, iconHeight, title, desc }) => {
    return (
        <div className="flex flex-col gap-2 sm:gap-2">
            <div className="bg-primary w-fit p-4 rounded-md">
                <Image
                    className="cursor-pointer"
                    aria-hidden
                    src={icon}
                    alt="File icon"
                    width={iconWidth}
                    height={iconHeight}
                />
            </div>
            <div className="w-4/5 space-y-1">
                <h1 className="text-sm sm:text-md font-bold">{title}</h1>
                <p className="text-xs sm:text-sm">{desc} </p>
            </div>
        </div>
    )
}