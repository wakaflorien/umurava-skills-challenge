import * as React from "react"
import { ButtonProps } from "../@types/global";

const Button: React.FC<ButtonProps> = ({ classNames, label }) => {
    return (
        <button className={`${classNames} rounded-md capitalize min-w-[120px]`}>{label}</button>
    )
}

export default Button;