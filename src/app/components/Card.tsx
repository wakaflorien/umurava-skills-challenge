import Image from "next/image";
import * as React from "react";
import Button from "./Button";

const Card = () => {
    return (
        <div className="flex flex-col border border-tertiary rounded-lg">
            <div className="flex flex-col items-start justify-center sm:gap-3 sm:p-4">
                <div className="bg-primary flex flex-col w-full h-full rounded-md">
                    <Button classNames="sm:self-end w-fit bg-success text-white sm:text-xs p-2 !rounded-full sm:m-3" label={"Open"} onClick={() => console.log("View item")} />
                    <Image
                        aria-hidden
                        src={`/logo.png`}
                        alt={`Hero banner logo`}
                        layout="responsive"
                        width={100}
                        height={100}
                        objectFit="cover"
                        priority
                    />
                </div>
                <p className="text-black text-sm sm:text-lg font-semibold">Design a Dashboard for SokoFund</p>

                <p className="text-black sm:text-md font-semibold">Skills Needed:</p>

                <div className="flex flex-wrap sm:gap-2">
                    {["UI/UX Design", "User Research", "Product Design"].map(item => (<Button key={item} classNames="w-fit bg-white text-primary sm:text-sm border border-primary p-1 !rounded-lg" label={item} onClick={() => console.log("View item")} />))}
                </div>

                <p className="tex-xs text-black">Security Level : <span className="sm:tex-xs text-tertiaryColor font-normal">(Junior, Intermediate, Senior)</span></p>
                <p className="tex-xs text-black">Timeline : <span className="sm:tex-xs text-tertiaryColor font-normal">15 Days</span></p>
            </div>
            <div className="border-t border-tertiary sm:p-4">
                <Button classNames="w-[150px] bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-2 sm:p-2" label="View Challenge" onClick={() => console.log("View Challenge")} />
            </div>
        </div>
    )
}

export default Card