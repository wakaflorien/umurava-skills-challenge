import Image from "next/image";
import {Button} from "./Button";
import { BackToTop } from "./BackToTop";

export const Footer = () => {
    return (
        <footer className="bg-secondary flex flex-col gap-2 sm:gap-4 px-4 sm:px-24 py-8 sm:py-12 sm:divide-y divide-white/20">
            <div className="flex items-center justify-between py-4 sm:py-8">
                <Image
                    aria-hidden
                    src="/CareerTicket_4x-removebg-preview 1.png"
                    alt="File icon"
                    width={40}
                    height={40}
                />
                <div className="flex gap-2">
                    {["facebook", "google-plus", "linkedin", "youtube"].map(item => (
                        <Image
                            key={item}
                            aria-hidden
                            src={`/${item}.png`}
                            alt="File icon"
                            width={32}
                            height={32}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-8 sm:gap-4  sm:flex-row items-start justify-between py-4 sm:py-8">
                <div className="flex flex-col gap-2 sm:gap-0">
                    <h1 className="text-white text-sm sm:text-lg font-semibold">Our Address</h1>
                    <ul className="flex flex-col gap-2 sm:gap-2 sm:py-2 text-tertiary">
                        <li className="flex gap-2">
                            <Image
                                aria-hidden
                                src="/mail.png"
                                alt="File icon"
                                width={24}
                                height={24}
                                // layout="responsive"
                                className={`object-cover`}
                            />
                            <p>career@tickets.com</p>
                        </li>
                        <li className="flex gap-2">
                            <Image
                                aria-hidden
                                src="/location.png"
                                alt="File icon"
                                width={24}
                                height={24}
                                // layout="responsive"
                                className={`object-cover`}
                            />
                            <p>89 KG 14 Ave, Kigali</p>
                        </li>
                        <li className="flex gap-2">
                            <Image
                                aria-hidden
                                src="/outline-phone.png"
                                alt="File icon"
                                width={24}
                                height={24}
                                // layout="responsive"
                                className={`object-cover`}
                            />
                            <p>+250 700 000</p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 sm:gap-0">
                    <h1 className="text-white text-sm sm:text-lg font-semibold">Quick Links</h1>
                    <ul className="flex flex-col gap-1 sm:gap-2 py-1 sm:py-2 text-tertiary">
                        <li><a href="./">Home</a></li>
                        <li><a href="./#">Program</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="./#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-white text-sm sm:text-lg font-semibold">Join our newsletter to keep up to date with us!</h1>
                    <form className="flex items-center justify-between bg-white p-1 sm:p-2 rounded-md">
                        <input className="w-full text-secondary outline-none p-2 sm:p-3" placeholder="Email" />
                        <Button classNames="bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Subscribe" onClick={() => console.log("Subscribed")} />
                    </form>

                </div>
            </div>

            <div className="flex flex-col gap-2  sm:flex-row items-center justify-between text-white text-xs sm:pt-4">
                <p>Copyright &copy; All right reserved F&P 2025</p>
                <p>Privacy Policy | Terms and Conditions</p>
                <BackToTop />
            </div>
        </footer>
    )
}