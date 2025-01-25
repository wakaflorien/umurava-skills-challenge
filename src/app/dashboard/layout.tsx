import * as React from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { DashLogo } from '../components/svgs';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Umurava App Dashboard",
    description: "Umurava skills challenge ( Landing page and Dashboard )",
};

export default function DashboardLayout({ children }: React.PropsWithChildren<object>) {
    // Readonly<{ children: React.ReactNode; }>)
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="grid sm:grid-cols-6 zoom-out">
                    <aside className="bg-primary text-white shadow-md ">
                        <nav className="flex flex-col justify-between h-full sm:p-4">
                            <div className='sm:space-y-2'>
                                <Link href={"/"} className="!cursor-pointer">
                                    {/* <Image
                                        src="/only_logo.png"
                                        alt="Next.js logo"
                                        width={42}
                                        height={42}
                                        priority
                                        objectFit='cover'
                                    /> */}
                                    <DashLogo className="text-white h-8 w-8" />
                                </Link>
                                <ul className='sm:space-y-4'>
                                    <li>
                                        <a href="/dashboard">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/profile">Challenges & Hackathons</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/settings">Community</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='sm:space-y-8'>
                                <ul className='sm:space-y-4'>
                                    <li>
                                        <a href="/dashboard">Settings</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/profile">Help Center</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard/settings">Refer family & friends</a>
                                    </li>
                                </ul>
                                <div className="flex sm:flex-row sm:gap-4">
                                    <div className="bg-tertiaryColor h-12 w-12 rounded-full border-2 border-white"></div>
                                    <div className="flex sm:flex-col">
                                        <p className="text-black text-sm sm:text-sm">{"HHHHHH"}</p>
                                        <p className="text-black text-sm sm:text-sm"> {"email@example.com"}</p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </aside>
                    <main className="grid sm:col-span-5 bg-backgroundA">
                        <header className="topbar">
                            {/* Topbar content */}
                        </header>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
