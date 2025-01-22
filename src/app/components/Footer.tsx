import Image from "next/image";
import Button from "./Button";
import { Icon } from '@iconify-icon/react';

const Footer = () => {
    return (
        <footer className="bg-secondary flex flex-col gap-8 px-8 py-2 sm:py-4 sm:px-24 bottom-0 divide-y divide-white/20">
            <div className="flex items-center justify-between">
                <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                <div>
                    <p className="text-white">Icons</p>
                </div>
            </div>

            <div className="flex items-start justify-between sm:pt-4">
                <div className="flex flex-col">
                    <h1 className="text-white text-md sm:text-lg font-semibold">Our Address</h1>
                    <ul className="text-tertiary">
                        <li>
                            <Icon icon="solar:phone-outline" height={20} width={20} style={{ color: '#fff' }} />
                            <span>career@tickets.com</span>
                        </li>
                        <li>
                            <Icon icon="solar:phone-outline" height={20} width={20} style={{ color: '#fff' }} />
                            <span>89 KG 14 Ave, Kigali</span>
                        </li>
                        <li>
                            <Icon icon="solar:phone-outline" height={20} width={20} style={{ color: '#fff' }} />
                            <span>+250 700 000</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white text-md sm:text-lg font-semibold">Quick Links</h1>
                    <ul className="text-tertiary">
                        <li><a href="./">Home</a></li>
                        <li><a href="/program">Program</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="./#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 sm:gap-4">
                    <h1 className="text-white text-md sm:text-lg font-semibold">Join our newsletter to keep up to date with us!</h1>
                    <form className="flex items-center justify-between bg-white p-2 rounded-md">
                        <input className="w-full text-tertiary font-semibold outline-none sm:p-3" placeholder="Email" />
                        <Button classNames="bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Subscribe" onClick={() => console.log("Subscribed")} />
                    </form>

                </div>
            </div>

            <div className="flex items-center justify-between text-white text-md sm:text-xs sm:pt-4">
                <p>Copyright &copy; All right reserved USC 2025</p>
                <p>Privacy Policy | Terms and Conditions</p>
            </div>
        </footer>
    )
}

export default Footer;