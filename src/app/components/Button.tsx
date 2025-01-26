"use client";

import * as React from "react"
import { ButtonProps } from "../@types/global";

const Button: React.FC<ButtonProps> = ({ icon, classNames, label, onClick }) => {
    return (
        <button className={`${classNames} rounded-md capitalize min-w-[120px] ${icon && "flex sm:gap-2 items-center"}`} onClick={onClick}>
            {icon && <span>{icon}</span>}
            <span>
                {label}
            </span>
        </button>
    )
}

export default Button;