import Image from "next/image"
import Button from "./Button"
import Link from "next/link"

const Nav = () => {
    return (
        <nav className="sm:flex justify-between sticky top-0 sm:px-16 bg-background hidden">
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
                {["Home", "Challenge & Hackathons", "For Educational Institutions", "About Us", "Contact Us"].map((item) => (
                    <li key={item} className="hover:text-primary">{item}</li>
                ))}
            </ul>
            <div className="flex items-center mr-2 sm:mr-8">
                <Button classNames="bg-secondary text-background hover:bg-secondary/90 font-semibold p-3" label="Join the program" onClick={()=> console.log("Joined")} />
            </div>
        </nav>
    )
}

export default Nav