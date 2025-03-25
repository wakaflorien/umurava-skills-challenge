"use client";

import * as React from "react"
import { HTMLMotionProps, motion } from "motion/react";
import { divVariants } from "@/@types/global";
// import { ButtonProps } from "@/@types/global";

// export const Button: React.FC<ButtonProps> = ({ icon, classNames, label, hasCount, count = 0, onClick }) => {
//     return (
//         <div className="group">
//             <motion.button className={`${classNames} rounded-md capitalize ${icon && "flex sm:gap-2 items-center"}`} onClick={onClick} type="button" variants={divVariants}
//                 initial="hidden"
//                 animate="visible"
//                 whileHover="whileHover"
//                 whileTap="whileTap"

//             >
//                 {icon && <span>{icon}</span>}
//                 <span>
//                     {label}
//                 </span>

//                 {hasCount && <span className={`text-inherit group-hover:text-white bg-[#E4E7EC] group-hover:bg-primary sm:p-1 rounded-full`}>{count}</span>}
//             </motion.button>
//         </div>
//     )
// }

interface ButtonProps extends HTMLMotionProps<'button'> {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <motion.button
            className={`${className}`}
            variants={divVariants}
            initial="hidden"
            animate="visible"
            whileHover="whileHover"
            whileTap="whileTap" {...props}>
            {children}
        </motion.button>
    )
}
