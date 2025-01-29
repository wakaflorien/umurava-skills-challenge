import Image from 'next/image';
import * as React from 'react';
import { ShapeProps } from '../@types/global';

export const BackDropShape: React.FC<ShapeProps> = ({ type }) => {
    return (
        <>
            <div className={`absolute ${type === "one" ? "left-20" : "left-0"} bottom-0`}>
                <Image
                    aria-hidden
                    src={`${type === "one" ? "/Ellipse4.png": "/Ellipse1.png"}`}
                    alt={`Hero banner`}
                    layout="responsive"
                    width={200}
                    height={200}
                    className={`object-cover`}
                    priority
                />
            </div>
            <div className="absolute right-0 top-0">
                <Image
                    aria-hidden
                    src={`${type === "two" ? "/Ellipse3.png": "/Ellipse2.png"}`}
                    alt={`Hero banner`}
                    layout="responsive"
                    width={200}
                    height={200}
                    className={`object-cover`}
                    priority
                />
            </div>
        </>
    );
}