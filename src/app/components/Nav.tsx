import Image from "next/image"
import Button from "./Button"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation";


const Nav = () => {
    const router = useRouter();
    const pathname = usePathname();

    const activeLink = (label: string) => {
        const labelText = label.toLowerCase();
        const realPath = pathname.split("/")[1];

        if ((labelText === "home" && pathname === "/") || (labelText.includes(realPath) && realPath)) {
            return true;
        }
        return false;
    }


    return (
        <nav className="sm:flex justify-between sticky top-0 sm:px-16 bg-background hidden z-10">
            <Link href={"/"} className="!cursor-pointer">
                <Image
                    src="/logo.png"
                    alt="Next.js logo"
                    width={150}
                    height={38}
                    priority
                />
            </Link>

            <ul className="flex items-center gap-4 sm:gap-8 cursor-pointer">
                {[{ link: "/", label: "Home" }, { link: "/hackathons", label: "Challenge & Hackathons" }, { link: "/institutions", label: "For Learning Institutions" }, { link: "/about", label: "About Us" }, { link: "/contact", label: "Contact Us" }].map((item, index) => (
                    <li key={index} className={`${activeLink(item.label) ? "text-primary" : "text-black"} hover:text-primary cursor-pointer`} onClick={() => router.push(item.link)}>{item.label}</li>
                ))}
            </ul>
            <div className="flex items-center mr-2 sm:mr-8">
                <Button classNames="bg-secondary text-background hover:bg-secondary/90 font-semibold p-3" label="Join the program" onClick={() => console.log("Joined")} />
            </div>
        </nav>
    )
}

export default Nav