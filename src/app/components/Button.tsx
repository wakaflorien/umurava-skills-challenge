import * as React from "react"
import { ButtonProps } from "../@types/global";

const Button: React.FC<ButtonProps> = ({ classNames, label }) => {
    return (
        <button className={`${classNames} rounded-md capitalize`}>{label}</button>
    )
}

export default Button;