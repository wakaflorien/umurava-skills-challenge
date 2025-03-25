"use client";

import * as React from "react";
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation";
import Button from "./Button";
import { motion } from "motion/react";
import { divVariants } from "@/@types/global";
import { LuAlignRight, LuX } from "react-icons/lu";


const activeLink = (label: string, pathname: string) => {
    const labelText = label.toLowerCase();
    const realPath = pathname.split("/")[1];

    if ((labelText === "home" && pathname === "/") || (labelText.includes(realPath) && realPath)) {
        return true;
    }
    return false;
}

export const Nav = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [openNav, setOpenNav] = React.useState(false);

    const toggleOpenNav = React.useCallback(() => {
        if (window.innerWidth < 960) {
            setOpenNav(true);
        } else {
            setOpenNav(false);
        }
    }, []);

    React.useEffect(() => {
        window.addEventListener("resize", toggleOpenNav);
        return () => {
            window.removeEventListener("resize", toggleOpenNav);
        }
    }, [toggleOpenNav]);

    return (
        <>
            {!openNav && (<motion.nav className="lg:flex justify-between sticky top-0 sm:px-16 bg-background hidden z-10">
                <Link href={"/"} className="!cursor-pointer">
                    <Image
                        className="object-cover"
                        src="/logo.png"
                        alt="Next.js logo"
                        width={150}
                        height={38}
                        priority
                    />
                </Link>

                <ul className="flex items-center gap-4 sm:gap-8 cursor-pointer">
                    {[{ link: "/", label: "Home" }, { link: "/hackathons", label: "Challenges & Hackathons" }, { link: "/institutions", label: "For Learning Institutions" }, { link: "/about", label: "About Us" }, { link: "/#contact", label: "Contact Us" }].map((item, index) => (
                        <motion.li key={index} className={`${activeLink(item.label, pathname) ? "text-primary" : "text-secondary"} hover:text-primary !cursor-pointer`} onClick={() => router.push(item.link)} variants={divVariants}
                            initial="visible"
                            animate="visible"
                            whileHover="whileHover"
                            whileTap="whileTap">{item.label}</motion.li>
                    ))}
                </ul>
                <div className="flex items-center mr-2 sm:mr-8">
                    <Button className="secondary-btn" onClick={() => router.push("/dashboard")} >
                        Join the program
                    </Button>
                </div>
            </motion.nav>)}

            <div className="w-full flex items-center lg:hidden justify-between my-2 px-4">
                <Image
                    className="object-contain h-18 w-18"
                    src="/logo.png"
                    alt="Next.js logo"
                    width={150}
                    height={38}
                    priority
                />
                {openNav ? (<LuX className="text-primary size-5" onClick={() => setOpenNav(!openNav)} />
                ) : (<LuAlignRight className="text-primary size-5" onClick={() => setOpenNav(!openNav)} />)}
            </div>

            {openNav && (<nav className={`w-full bg-transparent flex flex-col px-12 py-4`} id="mobileNav">
                <ul className={`flex flex-col items-start gap-2 cursor-pointer`}>
                    {[{ link: "/", label: "Home" }, { link: "/hackathons", label: "Challenges & Hackathons" }, { link: "/institutions", label: "For Learning Institutions" }, { link: "/about", label: "About Us" }, { link: "/#contact", label: "Contact Us" }].map((item, index) => (
                        <li key={index} className={`${activeLink(item.label, pathname) ? "text-primary" : "text-secondary"} hover:text-primary cursor-pointer`} onClick={() => router.push(item.link)}>{item.label}</li>
                    ))}
                </ul>
                <div className="flex items-center my-2">
                    <Button className="secondary-btn" onClick={() => router.push("/dashboard")} >Join the program</Button>
                </div>
            </nav>)}
        </>
    )
}