"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Pagination } from "@/components/Pagination";
import { Card } from "@/components/Card";

import { useQuery } from "@tanstack/react-query";
import { getChallenges } from "@/apis";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { CardSkeleton, TabsSkeleton } from "@/components/Skeletons";
import { LuFileText } from "react-icons/lu";

const ITEMS_PER_PAGE = 6;

const DashboardHackathons = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = React.useState(1);
    const [activeTab, setActiveTab] = React.useState("all");

    const {
        data: allChallenges,
        isLoading,
        error,
    } = useQuery({ queryKey: ["challenges"], queryFn: getChallenges });

    const tabs = [
        {
            id: 1,
            title: "All challenges",
            value: allChallenges?.data?.aggregates?.totalChallenges,
        },
        {
            id: 2,
            title: "Completed challenges",
            value:
                !isLoading &&
                !error &&
                allChallenges?.data?.aggregates?.totalCompletedChallenges,
        },
        {
            id: 3,
            title: "Open challenges",
            value:
                !isLoading &&
                !error &&
                allChallenges?.data?.aggregates?.totalOpenChallenges,
        },
        {
            id: 4,
            title: "Ongoing challenges",
            value:
                !isLoading &&
                !error &&
                allChallenges?.data?.aggregates?.totalOngoingChallenges,
        },
    ];

    const filteredData = React.useMemo(() => {
        if (!isLoading && !error && allChallenges) {
            return activeTab.toLowerCase() === "all"
                ? allChallenges?.data?.challenges
                : allChallenges.data.challenges.filter(
                    (item: { status: string }) =>
                        item.status.toLowerCase() === activeTab.toLowerCase()
                );
        } else {
            return [];
        }
    }, [activeTab, allChallenges, error, isLoading]);

    const totalPages = filteredData
        ? Math.ceil(filteredData.length / ITEMS_PER_PAGE)
        : 0;

    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get current page items
    const currentItems = filteredData
        ? filteredData.slice(startIndex, endIndex)
        : [];

    const filteredChallenges =
        !isLoading && !error && allChallenges?.data?.challenges?.length > 0
            ? currentItems
            : [];

    const handleChangeTab = (tab: string) => {
        setCurrentPage(1);
        setActiveTab(tab);
    };

    const handleViewSingle = (item) => {
        const url = `/dashboard/hackathons/${item.challengeName}?id=${item._id}`;
        router.push(url);
    };

    return (
        <div className="flex-1 sm:pb-24 sm:px-4">
            <div className="flex sm:flex-col gap-4 sm:gap-8">
                <header className="space-y-2">
                    <h1 className="font-bold text-md sm:text-lg">Challenges</h1>
                    <p>
                        Join a challenge or a hackathon to gain valuable work experience
                    </p>
                </header>

                {isLoading || error ? (
                    <TabsSkeleton count={5} />
                ) : (
                    <div className="flex sm:flex-row flex-wrap flex-col items-center justify-start gap-8 sm:gap-4">
                        {tabs.map((item, index) => (
                            <div
                                key={index}
                                className={`w-fit flex items-center gap-2 cursor-pointer border rounded ${item.title.split(" ")[0].toLowerCase() === activeTab
                                    ? "bg-[#D0E0FC] !border-primary"
                                    : "bg-[#F0F2F5]"
                                    } hover:bg-[#D0E0FC] text-tertiaryColor hover:text-primary sm:text-sm border-[#D0D5DD] hover:border-primary font-semibold p-2 sm:p-3`}
                                onClick={() => handleChangeTab(item.title.split(" ")[0])}
                            >
                                <LuFileText
                                    className="size-4 text-primary"
                                    onClick={() => router.push("/")}
                                />
                                {item.title}
                                {
                                    <span
                                        className={`text-inherit group-hover:text-white bg-[#E4E7EC] group-hover:bg-primary px-1 sm:px-2 rounded-full`}
                                    >
                                        {item.value}
                                    </span>
                                }
                            </div>
                        ))}
                    </div>
                )}

                {/* Challeges and Hackathons */}
                {isLoading || error ? (
                    <CardSkeleton count={3} />
                ) : (
                    <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
                        {filteredChallenges?.length > 0 ? (
                            filteredChallenges.map(
                                (
                                    item: {
                                        status: string;
                                        index: string;
                                        challengeName: string;
                                        skills: Array<string>;
                                        levels: Array<string>;
                                        duration: number;
                                    },
                                    index: number
                                ) => (
                                    <Card
                                        status={item.status}
                                        key={index}
                                        image={`/white_logo.png`}
                                        title={item.challengeName}
                                        skills={item.skills}
                                        seniority={item.levels}
                                        timeline={`${item.duration} day(s)`}
                                        onClick={() => handleViewSingle(item)}
                                        imageWidth={150}
                                        imageHeight={50}
                                    />
                                )
                            )
                        ) : (
                            <div className="h-[40vh] flex items-center justify-center sm:gap-4">
                                <Icon
                                    icon="tabler:mood-empty"
                                    width="34"
                                    height="34"
                                    className="text-primary"
                                />
                                <p className="text-primary font-bold">
                                    Oops!, No Open Challenges available
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {filteredChallenges?.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>
        </div>
    );
};

export default DashboardHackathons;
