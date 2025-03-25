import * as React from "react";
import Image from "next/image";
import { CardProps, divVariants } from "@/@types/global";
import Button from "./Button";
import { motion } from "motion/react";

export const Card: React.FC<CardProps> = ({
    status,
    image,
    title,
    skills = [],
    seniority,
    timeline,
    onClick,
    imageWidth,
    imageHeight,
}) => {
    return (
        <motion.div
            className="bg-white flex flex-col border border-gray-200 rounded-lg"
            variants={divVariants}
            initial="hidden"
            animate="visible"
            whileHover="whileHover"
            whileTap="whileTap"
        >
            <div className="flex flex-col items-start justify-center gap-2 sm:gap-3 p-2 sm:p-4">
                <div className="relative bg-primary flex flex-col w-full h-[180px] items-center justify-center rounded-md">
                    <Button
                        className={`absolute top-0 right-0 w-fit ${status.toLowerCase() === "open"
                            ? "bg-success"
                            : status.toLowerCase() === "ongoing"
                                ? "bg-orange-500"
                                : "bg-pink-700"
                            } text-white text-xs py-1 px-2 !rounded-full m-2 sm:m-3`}
                        onClick={() => console.log("View Open")}
                    >
                        {status.toLowerCase()}
                    </Button>
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

                <p className="text-secondary text-sm sm:text-md font-bold capitalize">
                    {title}
                </p>

                <p className="text-secondary text-xs sm:text-sm font-semibold capitalize">
                    Skills Needed:
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                    {skills.map((item) => (
                        <Button
                            key={item}
                            className="w-fit bg-white text-primary text-xs border border-primary p-1 !rounded-lg"
                            onClick={() => console.log("View item")}
                        >
                            {item}
                        </Button>
                    ))}
                </div>

                <p className="text-secondary text-sm sm:text-md font-bold sm:space-x-2">
                    Seniority Level :{" "}
                    <span className="sm:tex-xs text-tertiaryColor font-normal">
                        ( {seniority?.join(", ")} )
                    </span>
                </p>
                <p className="text-secondary text-sm sm:text-md font-bold">
                    Timeline :{" "}
                    <span className="sm:tex-xs text-tertiaryColor font-normal">
                        {timeline}
                    </span>
                </p>
            </div>

            <div className="border-t border-tertiary p-2 sm:p-4">
                <Button
                    className="primary-btn !py-2 !px-3 !w-fit"
                    onClick={onClick}
                >
                    View Challenge
                </Button>
            </div>
        </motion.div>
    );
};
