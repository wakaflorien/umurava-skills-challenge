"use client";

import * as React from 'react';
import "./../globals.css";
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
const Modal = React.lazy(() => import('@/components/Modal'));
import { workSans } from '@/utils/fonts';
import { Providers, useAuth } from '@/providers/AuthProvider';
import { joinCommunity } from '@/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import Loading from '@/components/Loading';

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

const iconMap = {
    "/dashboard": `lineicons:home-2`,
    "/dashboard/hackathons": `akar-icons:file`,
    "/dashboard/community": `basil:user-plus-outline`
};

const iconMap1 = {
    "/dashboard/settings": "ion:settings-outline",
    "/dashboard/help": "qlementine-icons:headset-16",
    "/dashboard/refer": "octicon:gift-16"
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    // In-App imports
    const queryClient = useQueryClient();
    const pathname = usePathname();
    const router = useRouter();

    // Providers
    const { data, authenticate, logout } = useAuth();

    const payload: Record<string, string> = data.user ? { phoneNumber: data.user.phoneNumber || "" } : { participant: "" };

    // In-App data states
    const [isOpen, setIsOpen] = React.useState(false);
    const [isJoining, setIsJoining] = React.useState(false);
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);
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

    // API Queries
    const mutation = useMutation({
        mutationFn: ({ payload }: { payload: Record<string, string> }) => joinCommunity(payload),
        onSuccess: async (response) => {
            console.log(response, "returned response");
            setIsJoining(false);
            setIsOpen(false);
            queryClient.invalidateQueries({ queryKey: ['challenges'] })
        },
    })

    // Action Function
    const handleJoinCommunity = () => {
        setIsJoining(true);
        mutation.mutate({ payload })
    }

    if (!isClient) {
        return null;
    }

    return (
        <html lang="en">
            <head>
                <meta
                    name="format-detection"
                    content="telephone=no, date=no, email=no, address=no"
                />
            </head>
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
                                            <li key={index} className={`group flex items-center gap-1 sm:p-2 cursor-pointer rounded-md ${activeLink(item.label, pathname) ? "bg-white text-primary" : "bg-primary text-white"} hover:bg-white hover:text-primary stroke-white hover:stroke-current`} onClick={() => {
                                                if (item.link === "/dashboard/community") {
                                                    setIsOpen(true);
                                                } else {
                                                    router.push(item.link);
                                                }
                                            }}>

                                                <Icon icon={iconMap[item.link]} className={`stroke-1 ${activeLink(item.label, pathname) ? "text-primary stroke-primary" : "text-white stroke-white"} group-hover:text-primary transition-colors size-5`} />

                                                {item.label}

                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='sm:space-y-8'>
                                    <ul className='sm:space-y-4'>
                                        {nav2.map((item, index) => (
                                            <li key={index} className={`group flex items-center gap-1 sm:p-2 cursor-pointer rounded-md ${activeLink(item.label, pathname) ? "bg-white text-primary" : "bg-primary text-white"} hover:bg-white hover:text-primary stroke-white hover:stroke-current`} onClick={() => router.push(item.link)}>

                                                <Icon icon={iconMap1[item.link]} className={`stroke-1 ${activeLink(item.label, pathname) ? "text-primary stroke-primary" : "text-white stroke-white"} group-hover:text-primary transition-colors size-5`} />

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

                                        <Icon icon="ic:baseline-logout" className='text-white cursor-pointer size-5' onClick={() => logout()} />
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

                                {/* Join Community Modal */}
                                <Modal
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
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

                                        <button className="flex items-ceter gap-2 bg-primary text-white sm:text-sm hover:bg-primary/90 font-semibold p-2 sm:p-3 rounded-md" onClick={handleJoinCommunity}>
                                            {isJoining && <Icon icon="line-md:loading-twotone-loop" width="18" height="18" />}
                                            Join Community
                                        </button>
                                    </div>
                                </Modal>
                                <React.Suspense fallback={<Loading />}>
                                    {children}
                                </React.Suspense>
                            </div>
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}