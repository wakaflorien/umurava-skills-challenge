"use client";

import * as React from 'react';
import "./../../globals.css";
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { workSans } from '@/utils/fonts';
import { Providers, useAuth } from '@/providers/AuthProvider';

const activeLink = (label: string, pathname: string) => {

    const labelText = label.toLowerCase();
    const realPath = pathname.split("/dashboard")[1];
    const activePath = realPath.split("/")[1];

    if ((labelText === "dashboard" && pathname === "/admin/dashboard") || (labelText.includes(activePath) && realPath)) {
        return true;
    }
    return false;
}

const nav1 = [{ link: "/admin/dashboard", label: "Dashboard" }, { link: "/admin/dashboard/hackathons", label: "Challenges & Hackathons" }];

const nav2 = [{ link: "/admin/dashboard/settings", label: "Settings" }, { link: "/admin/dashboard/help", label: "Help Center" }, { link: "/admin/dashboard/refer", label: "Refer family & friends" }];

const iconMap = {
    "/admin/dashboard": "/svgs/home.svg",
    "/admin/dashboard/hackathons": "/svgs/file.svg",
};

const iconMap1 = {
    "/admin/dashboard/settings": "/svgs/settings.svg",
    "/admin/dashboard/help": "/svgs/headset.svg",
    "/admin/dashboard/refer": "/svgs/gift.svg"
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
    const router = useRouter();

    const { data, authenticate, logout } = useAuth();

    React.useEffect(() => {
        if (!data.token) {
            const handleAuthentication = async () => {
                try {
                    await authenticate({ userRole: "admin" });
                } catch (error) {
                    console.error("Failed to authenticate:", error);
                    router.push("/");
                }
            };

            handleAuthentication();
        }
    }, [authenticate, router, data.token]);

    return (
        <html lang="en">
            <body className={`${workSans.className} antialiased`}>
                <Providers>
                    <div className="grid sm:grid-cols-5 zoom-out">
                        <aside className="bg-primary text-white shadow-md ">
                            <nav className="flex flex-col justify-between h-full sm:p-4">
                                <div className='sm:space-y-4'>

                                    <Image
                                        src="/svgs/dash_logo.svg"
                                        alt="file"
                                        width={8}
                                        height={8}
                                        className="h-8 w-8 cursor-pointer object-contain"
                                        onClick={() => router.push("/")}
                                    />

                                    <ul className='sm:space-y-4'>
                                        {nav1.map((item, index) => (
                                            <li key={index} className={`group flex items-center gap-1 sm:p-2 cursor-pointer rounded-md ${activeLink(item.label, pathname) ? "bg-white text-primary" : "bg-primary text-white"} hover:bg-white hover:text-primary stroke-white hover:stroke-current`} onClick={() => router.push(item.link)}>

                                                <Image
                                                    src={iconMap[item.link]}
                                                    alt="file"
                                                    width={16}
                                                    height={16}
                                                    className="h-4 w-4 text-white group-hover:text-primary transition-colors"
                                                />
                                                {item.label}

                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='sm:space-y-8'>
                                    <ul className='sm:space-y-4'>
                                        {nav2.map((item, index) => (
                                            <li key={index} className={`group flex items-center gap-1 sm:p-2 cursor-pointer rounded-md ${activeLink(item.label, pathname) ? "bg-white text-primary" : "bg-primary text-white"} hover:bg-white hover:text-primary stroke-white hover:stroke-current`} onClick={() => router.push(item.link)}>

                                                <Image
                                                    src={iconMap1[item.link]}
                                                    alt="file"
                                                    width={16}
                                                    height={16}
                                                    className="h-4 w-4 text-white group-hover:text-primary transition-colors"
                                                />
                                                {item.label}

                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex sm:flex-row sm:gap-4">
                                        <div className="relative bg-tertiaryColor h-10 w-10 rounded-full border-2 border-white object-contain">
                                            <Image src={`${data.user.profile_url ? data.user.profile_url : "/Image.png"}`} alt="avatar" priority className="rounded-full h-10 w-20" width={40} height={40} />
                                            <div className='absolute bottom-0 right-0 bg-success h-3 w-3 border border-white rounded-full'></div>
                                        </div>
                                        <div className="flex sm:flex-col overflow-x-hidden">
                                            <p className="text-white text-sm sm:text-sm">{data && data.user.names}</p>
                                            <p className="text-white text-sm sm:text-sm"> {data && data.user.email}</p>
                                        </div>
                                        <Image
                                            src="/svgs/signout.svg"
                                            alt="file"
                                            width={4}
                                            height={4}
                                            className="h-4 w-4 text-white cursor-pointer"
                                            onClick={logout}
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
                                            <Image src={`${data.user.profile_url ? data.user.profile_url : "/Image.png"}`} alt="avatar" priority className="rounded-full object-container" width={40} height={40} />
                                        </div>
                                    </div>
                                </header>
                                {children}
                            </div>
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}