"use client";
import * as React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Image from "next/image";
import Div from "../components/Div";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const Institutions = () => {
    const router = useRouter();
    return (
        <div className="bg-backgroundA elative flex flex-col min-h-screen h-full w-full max-w-screen-2xl mx-auto font-[family-name:var(--font-geist-sans)]">
            <Nav />
            <main className="flex flex-col sm:space-y-16">
                <section className="bg-white h-full grid sm:grid-cols-2 sm:px-24 py-16" id="videoIntro">
                    <div className="flex flex-col items-start gap-4 sm:gap-8 sm:pt-24">
                        <header className="flex flex-col gap-4 sm:gap-8">
                            <h1 className="text-primary text-2xl sm:text-5xl sm:leading-tight font-bold">Our story</h1>
                            <p className="text-tertiaryColor">With 3 years of experience matching African digital talents to local and global job markets, we still remain with a big number of jobs that remain unfilled due to the lack of experienced African Talents. Driven by our mission to place skilled and professional digital talent, we created Skills Challenges as a project-based learning solution for talents to gain real-world experience, solve problems, and build portfolios so that they become ready for global job markets.</p>
                        </header>
                    </div>

                    <div className="flex items-start justify-center gap-4 w-full sm:pt-24 bg-primary rounded-lg">
                        <video className="w-full" controls muted autoPlay>
                            <source src="movie.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </section>

                <section className="bg-backgroundA h-full grid gap-24 sm:grid-row-3 sm:px-32 sm:py-16" id="career">

                    <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8">
                        <h1 className="text-black text-2xl sm:text-4xl sm:leading-tight font-bold">Why we are solving this problem.</h1>
                    </div>

                    <div className="grid gap-4 sm:grid-row-2">
                        <Div
                            icon="/briefcase.png"
                            iconWidth={24}
                            iconHeight={24}
                            title="Bridging the Experience Ga"
                            desc="Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools." />

                        <div className="grid gap-4 sm:grid-cols-2 rounded-md">
                            <Div
                                icon="/briefcase.png"
                                iconWidth={24}
                                iconHeight={24}
                                title="Bridging Education and Employment"
                                desc="Traditional education doesnt’ always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges." />

                            <Div
                                icon="/briefcase.png"
                                iconWidth={24}
                                iconHeight={24}
                                title="Preparing Talents for Global Job Markets"
                                desc="We are ensuring that African talents shine globally and that’s why we are equipping them with global technical experience and shandout globally." />

                        </div>
                    </div>

                </section>

                <section className="bg-background h-full grid gap-4 sm:grid-cols-2 sm:gap-8 sm:px-24 sm:py-16" id="participate">
                    <div className="space-y-6 sm:space-y-16">
                        <h1 className="text-xl sm:text-2xl sm:leading-tight font-bold">Skills Challenges Program is built on the Umurava Talent Marketplace Platform</h1>
                        <p>A Project-based Learning Solution aimed at providing young and senior talents with an opportunity to showcase their skills to real-world projects and challenges from our partner companies and organizations. Umurava Skills Challenges enables young talents to build a portfolio and experience that increases their readiness to access job opportunities and projects.</p>

                        <Button classNames="w-[200px] bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Get Started" onClick={() => router.push('/hackathons')} />
                    </div>

                    <div>
                        <Image
                            aria-hidden
                            src={`/dashboard.png`}
                            alt={`Hero banner`}
                            // layout="responsive"
                            width={500}
                            height={500}
                            objectFit="cover"
                            priority
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Institutions;