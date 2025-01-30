"use client";

import * as React from 'react';
import "./../globals.css";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';
import { workSans } from '@/utils/fonts';
import { defaultUserProviderProps, UserProvider } from '../../providers/AuthProvider';

const activeLink = (label: string, pathname: string) => {

    const labelText = label.toLowerCase();
    const realPath = pathname.split("/dashboard")[1];
    const activePath = realPath.split("/")[1];

    if ((labelText === "dashboard" && pathname === "/dashboard") || (labelText.includes(activePath) && realPath)) {
        return true;
    }
    return false;
}

const nav1 = [{ link: "/dashboard", label: "Dashboard" }, { link: "/dashboard/hackathons", label: "Challenges & Hackathons" }, { link: "/dashboard/community", label: "Community" }];

const nav2 = [{ link: "/dashboard/settings", label: "Settings" }, { link: "/dashboard/help", label: "Help Center" }, { link: "/dashboard/refer", label: "Refer family & friends" }];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const [isOpen, setIsOpen] = React.useState(false);

    const pathname = usePathname();
    const router = useRouter();

    return (
        <html lang="en">
            <body className={`${workSans.className} antialiased`}>
                <UserProvider.Provider value={defaultUserProviderProps}>
                    <div className="grid sm:grid-cols-5 zoom-out">
                        <aside className="bg-primary text-white shadow-md ">
                            <nav className="flex flex-col justify-between h-full sm:p-4">
                                <div className='sm:space-y-4'>

                                    <Image
                                        src="/svgs/dash_logo.svg"
                                        alt="file"
                                        width={8}
                                        height={8}
                                        className="h-8 w-8 text-primary cursor-pointer"
                                        onClick={() => router.push("/")}
                                    />

                                    <ul className='sm:space-y-4'>
                                        {nav1.map((item, index) => (
                                            <li key={index} className={`flex items-center gap-1 sm:p-2 cursor-pointer rounded-md ${activeLink(item.label, pathname) ? "bg-white text-primary" : "bg-primary text-white"} hover:bg-white hover:text-primary stroke-white hover:stroke-current`} onClick={() => item.link === "/dashboard/community" && setIsOpen(true)}>

                                                {item.link === "/dashboard" ? (<Image
                                                    src="/svgs/home.svg"
                                                    alt="file"
                                                    width={4}
                                                    height={4}
                                                    className="h-4 w-4 !text-primary hover:fill-primary "
                                                    onClick={() => router.push("/")}
                                                />) : item.link === "/dashboard/hackathons" ? (<Image
                                                    src="/svgs/file.svg"
                                                    alt="file"
                                                    width={4}
                                                    height={4}
                                                    className="h-4 w-4 text-primary"
                                                    onClick={() => router.push("/")}
                                                />) : (<Image
                                                    src="/svgs/user_plus.svg"
                                                    alt="file"
                                                    width={4}
                                                    height={4}
                                                    className="h-4 w-4 text-primary"
                                                    onClick={() => router.push("/")}
                                                />)}
                                                {item.link !== "/dashboard/community" ? (<Link href={item.link} className='sm:text-sm'>{item.label}</Link>) : <p className='sm:text-sm'>{item.label}</p>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='sm:space-y-8'>
                                    <ul className='sm:space-y-4'>
                                        {nav2.map((item, index) => (
                                            <li key={index} className={`flex items-center gap-1 sm:p-2 cursor-pointer rounded-md ${activeLink(item.label, pathname) ? "bg-white text-primary" : "bg-primary text-white"} hover:bg-white hover:text-primary stroke-white hover:stroke-current`}>

                                                {item.link === "/dashboard/settings" ? (<Image
                                                    src="/svgs/settings.svg"
                                                    alt="file"
                                                    width={4}
                                                    height={4}
                                                    className="h-4 w-4 text-primary"
                                                    onClick={() => router.push("/")}
                                                />) : item.link === "/dashboard/help" ? (<Image
                                                    src="/svgs/headset.svg"
                                                    alt="file"
                                                    width={4}
                                                    height={4}
                                                    className="h-4 w-4 text-primary"
                                                    onClick={() => router.push("/")}
                                                />) : (<Image
                                                    src="/svgs/gift.svg"
                                                    alt="file"
                                                    width={4}
                                                    height={4}
                                                    className="h-4 w-4 text-primary"
                                                    onClick={() => router.push("/")}
                                                />)}
                                                <Link href={item.link} className='sm:text-sm'>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex sm:flex-row sm:gap-4">
                                        <div className="relative bg-tertiaryColor h-8 w-8 rounded-full border-2 border-white object-contain">
                                            <Image src="/Image.png" alt="avatar" priority className="rounded-full" width={40} height={40} />
                                            <div className='absolute bottom-0 right-0 bg-success h-3 w-3 border border-white rounded-full'></div>
                                        </div>
                                        <div className="flex sm:flex-col">
                                            <p className="text-white text-sm sm:text-sm">{defaultUserProviderProps.name}</p>
                                            <p className="text-white text-sm sm:text-sm"> {defaultUserProviderProps.email}</p>
                                        </div>
                                        <Image
                                            src="/svgs/signout.svg"
                                            alt="file"
                                            width={4}
                                            height={4}
                                            className="h-4 w-4 text-primary"
                                            onClick={() => router.push("/")}
                                        />
                                    </div>
                                </div>
                            </nav>
                        </aside>
                        <main className="grid sm:col-span-4 bg-backgroundA">
                            <div className='flex flex-col gap-4 sm:gap-8'>
                                <header className="topbar">
                                    {/* Topbar content */}
                                    <div className="flex items-center justify-between bg-white p-2 rounded-md">
                                        <form className='bg-tertiary sm:w-1/2 flex items-center justify-between sm:px-2 sm:mx-4 sm:my-2 rounded-md'>
                                            <Image
                                                src="/svgs/search.svg"
                                                alt="file"
                                                width={4}
                                                height={4}
                                                className="h-4 w-4 text-primary"
                                            />
                                            <input className="bg-tertiary w-full text-black outline-none sm:p-2 rounded-md" placeholder="Search here ..." />
                                        </form>
                                        <div className='flex items-center gap-2'>
                                            <div className='bg-tertiary flex items-center justify-center h-10 w-10 p-2 rounded-full cursor-pointer'>
                                                <Image
                                                    src="/svgs/bell.svg"
                                                    alt="file"
                                                    width={4}
                                                    height={4}
                                                    className="h-4 w-4 text-primary"
                                                />
                                            </div>
                                            <Image src="/Image.png" alt="avatar" priority className="rounded-full object-container" width={40} height={40} />
                                        </div>
                                    </div>
                                </header>

                                {/* Join Community Modal */}
                                <Modal
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                // title="Add New Task"
                                >
                                    <div className='flex flex-col items-center justify-center sm:gap-4'>
                                        <div className='bg-[#D0E0FC] rounded-full h-16 w-16 flex items-center justify-center'>
                                            <Image
                                                src="/svgs/Plain.svg"
                                                alt="file"
                                                width={4}
                                                height={4}
                                                className="h-4 w-4 text-primary"
                                            />
                                        </div>
                                        <h1 className='font-bold text-sm sm:text-lg text-center'>Join our WhatsApp community</h1>
                                        <p className='text-center'>Get notified on the latest projects and hackathons</p>
                                        <Button classNames="bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Join" onClick={() => console.log("join community")
                                        } />
                                    </div>
                                </Modal>
                                {children}
                            </div>
                        </main>
                    </div>
                </UserProvider.Provider>
            </body>
        </html>
    );
}