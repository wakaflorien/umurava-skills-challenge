import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Image from "next/image";
import Div from "./components/Div";
import Card from "./components/Card";
import MiniDiv from "./components/MiniDiv";
import { Icon } from '@iconify-icon/react';


export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen h-full w-full max-w-screen-2xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="flex flex-col sm:items-start space-y-11 mb-32">

        {/* Hero section  */}
        <section className="h-full grid sm:grid-cols-2 sm:px-24" id="hero">
          <div className="flex flex-col items-start gap-4 sm:gap-8 sm:pt-24">
            <header className="flex flex-col gap-4 sm:gap-8">
              <h1 className="text-primary text-2xl sm:text-5xl sm:leading-tight font-bold">Build Work Experience through Skills Challenges Program </h1>
              <p className="text-tertiaryColor">Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects & hackathons from various businesses & organizations.</p>
            </header>
            <Button classNames="w-fit bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Get Started" onClick={() => console.log("Get Started")} />
          </div>

          <div className="flex gap-4 w-full sm:pt-24">
            {["image_2.png", "image_1.png"].map(item => (
              <div key={item} className="flex-1">
                <Image
                  aria-hidden
                  src={`/${item}`}
                  alt={`Hero banner ${item}`}
                  layout="responsive"
                  width={200}
                  height={200}
                  objectFit="cover"
                  priority
                />
              </div>
            ))}
          </div>
        </section>

        {/* Career section */}
        <section className="bg-backgroundA h-full grid gap-24 sm:grid-row-3 sm:px-32 sm:py-16">

          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8">
            <h1 className="text-black text-2xl sm:text-4xl sm:leading-tight font-bold">Experience a New Way of Building Work Experience.</h1>
            <p className="w-full sm:w-1/2 text-tertiaryColor line-clamp-2">Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.</p>
          </div>

          <div className="grid gap-4 sm:grid-row-2">
            <Div
              icon="/briefcase.png"
              iconWidth={32}
              iconHeight={32}
              title="Build a Strong Portfolio and Hands-On Experience"
              desc="Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers and clients through a portofolio of completed projects." />

            <div className="grid gap-4 sm:grid-cols-2 rounded-md">
              <Div
                icon="/briefcase.png"
                iconWidth={32}
                iconHeight={32}
                title="Enhance Your Employment Path"
                desc="elop the in-demand skills and build a strong portofolio to increase your chances of landing your dream job or contract." />

              <Div
                icon="/briefcase.png"
                iconWidth={32}
                iconHeight={32}
                title="Earn Recognition and Prizes"
                desc="Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real world projects and hackathons from our partner companies & organizations." />

            </div>
          </div>

        </section>

        {/* Skills section  */}
        <section className="h-full grid gap-24 sm:grid-row-4 sm:px-24">

          <div className="flex items-center justify-between bg-primary text-white rounded-lg sm:p-8">
            {[{ title: "1", desc: "Year" }, { title: "500 +", desc: "Challenges Completed" }, { title: "10K +", desc: "Users" }, { title: "6+", desc: "Countries" }].map(item => (<div key={item.title} className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold">{item.title}</h1>
              <p>{item.desc} </p>
            </div>))}
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8 sm:px-8">
            <h1 className="text-black text-2xl sm:text-4xl sm:leading-tight font-bold">Skills Challenges Cover various in-demand skills and Careers for the digital economy.</h1>
            <p className="w-full sm:w-1/2 text-tertiaryColor line-clamp-2">Explore the projects that various talents are working on.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center text-center gap-4 sm:gap-8 sm:px-8">

            {["UI/UX Design", "Data science", "Graphic Design", "Data analysis & research", "Animation", "Videography & Photography", "Data science", "AI & Machine learning", "web3", "digital marketing & communications"].map((item, index) => (<Button key={index} classNames={`w-fit ${index !== 0 ? "bg-tertiary hover:bg-tertiary/90 text-tertiaryColor" : "bg-primary hover:bg-primary/90 text-white"} text-xs font-semibold p-2 sm:p-3`} label={item} onClick={() => console.log("Get Started")} />
            ))}
          </div>

          <div className="bg-backgroundA grid gap-8 sm:grid-cols-2 rounded-md">
            <div className="flex flex-col gap-4 sm:gap-16 rounded-lg text-white p-8">
              <div className="bg-white w-fit p-4 rounded-md">
                <Image
                  className="cursor-pointer"
                  aria-hidden
                  src={"/briefcase.png"}
                  alt="File icon"
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-tertiaryColor">The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.</p>
              <div className="flex items-center gap-2">
                <a href="#/learnmore" className="text-primary">Learn More</a>
                <Image
                  className="cursor-pointer"
                  aria-hidden
                  src={"/arrow-right.png"}
                  alt="File icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-8 rounded-lg text-white p-8 m-8 border bg-tertiaryColor w-[400px] h-[300px]">

            </div>
          </div>
        </section>

        {/* Challenges and Hackathons section  */}
        <section className="h-full grid gap-24 sm:grid-row-3 justify-items-center sm:px-32">
          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8">
            <h1 className="text-black text-2xl sm:text-4xl font-bold">Explore Challenges & Hackathons.</h1>
            <p className="w-full sm:w-1/2 text-tertiaryColor">Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
            {Array.from({ length: 3 }).map((_, index) => (<Card key={index} />))}
          </div>

          <Button classNames="w-[150px] bg-white text-primary border border-primary sm:text-sm font-semibold p-2 sm:p-4" label="View More" onClick={() => console.log("View More")} />
        </section>

        {/* Participate in skills challenge  */}
        <section className="bg-backgroundA h-full grid gap-24 sm:grid-row-2 justify-items-center sm:px-32 sm:py-16">
          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8">
            <h1 className="text-black text-2xl sm:text-4xl font-bold">What else can I gain from participating in Skills Challenges ?</h1>
            <p className="w-full sm:w-1/2 text-tertiaryColor">Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
            <div className="space-y-6">
              {[{ title: "Enhance Your Employment Path", desc: "Network with other talented individuals and learn from their experiences." }, { title: "Personal Growth", desc: "Challenge yourself, learn new skills, and expand your professional network." },].map((i, index) => (<MiniDiv key={index}
                icon="/briefcase.png"
                iconWidth={16}
                iconHeight={16}
                title={i.title}
                desc={i.desc} />))}
            </div>
            <div className="space-y-6">
              {[{ title: "Earn Recognition and Prizes", desc: "Gain valuable experience and knowledge to advance your career in the digital economy." }, { title: "Learn from Industry Experts", desc: "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces." },].map((i, index) => (<MiniDiv key={index}
                icon="/briefcase.png"
                iconWidth={16}
                iconHeight={16}
                title={i.title}
                desc={i.desc} />))}
            </div>
            <div>
              <Image
                aria-hidden
                src={`/banner_img1.png`}
                alt={`Hero banner`}
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <Icon icon="mdi-light:alert" />
        </section>

      </main>
      <div id="contact" className="">
        <Footer />
      </div>
    </div>
  );
}
