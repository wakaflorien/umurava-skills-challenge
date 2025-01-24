"use client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Image from "next/image";
import Div from "./components/Div";
import Card from "./components/Card";
import MiniDiv from "./components/MiniDiv";
import GetStartedStep from "./components/GetStartedStep";
import MiniCard from "./components/MiniCard";
import { useRouter } from "next/navigation";
import BackDropShape from "./components/BackDropShape";


export default function Home() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col min-h-screen h-full w-full max-w-screen-2xl mx-auto font-[family-name:var(--font-geist-sans)]">
      <Nav />

      <main className="flex flex-col sm:items-start space-y-11 mb-16">

        {/* Hero section  */}
        <section className="h-full grid sm:grid-cols-2 sm:px-24" id="hero">
          <div className="flex flex-col items-start gap-4 sm:gap-8 sm:pt-24">
            <header className="flex flex-col gap-4 sm:gap-8">
              <h1 className="text-primary text-2xl sm:text-5xl sm:leading-tight font-bold">Build Work Experience through Skills Challenges Program </h1>
              <p className="text-black  text-lg leading-8">Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects & hackathons from various businesses & organizations.</p>
            </header>
            <Button classNames="w-[200px] bg-primary text-white hover:bg-primary/90 font-semibold p-2 sm:p-3" label="Get Started" onClick={() => router.push('/hackathons')} />
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
        <section className="bg-backgroundA h-full grid gap-24 sm:grid-row-3 sm:px-32 sm:py-16" id="career">

          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8">
            <h1 className="text-black text-xl sm:text-4xl sm:leading-tight font-bold">Experience a New Way of Building Work Experience.</h1>
            <p className="w-full sm:w-1/2 text-tertiaryColor line-clamp-2">Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.</p>
          </div>

          <div className="grid gap-2 sm:gap-4 sm:grid-row-2">
            <Div
              icon="/briefcase.png"
              iconWidth={24}
              iconHeight={24}
              title="Build a Strong Portfolio and Hands-On Experience"
              desc="Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers and clients through a portofolio of completed projects." />

            <div className="grid gap-2 sm:gap-4 sm:grid-cols-2 rounded-md">
              <Div
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Enhance Your Employment Path"
                desc="elop the in-demand skills and build a strong portofolio to increase your chances of landing your dream job or contract." />

              <Div
                icon="/briefcase.png"
                iconWidth={24}
                iconHeight={24}
                title="Earn Recognition and Prizes"
                desc="Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real world projects and hackathons from our partner companies & organizations." />

            </div>
          </div>

        </section>

        {/* Skills section  */}
        <section className="h-full grid gap-24 sm:grid-row-4 sm:px-24">

          <div className="relative flex items-center justify-between bg-primary text-white rounded-lg sm-8 sm:p-16">
            {[{ title: "1", desc: "Year" }, { title: "500 +", desc: "Challenges Completed" }, { title: "10K +", desc: "Users" }, { title: "6+", desc: "Countries" }].map(item => (<div key={item.title} className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold">{item.title}</h1>
              <p>{item.desc} </p>
            </div>))}

            <BackDropShape type="one" />

          </div>

          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8 sm:px-8">
            <h1 className="text-black text-xl sm:text-4xl sm:leading-tight font-bold">Skills Challenges Cover various in-demand skills and Careers for the digital economy.</h1>
            <p className="w-full sm:w-1/2 text-tertiaryColor line-clamp-2">Explore the projects that various talents are working on.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center text-center gap-4 sm:gap-8 sm:px-8">

            {["UI/UX Design", "Data science", "Graphic Design", "Data analysis & research", "Animation", "Videography & Photography", "Data science", "AI & Machine learning", "web3", "digital marketing & communications"].map((item, index) => (<Button key={index} classNames={`w-fit ${index !== 0 ? "bg-tertiary hover:bg-tertiary/90 text-tertiaryColor" : "bg-primary hover:bg-primary/90 text-white"} text-xs font-semibold p-2 sm:p-3`} label={item} onClick={() => console.log("Get Started")} />
            ))}
          </div>

          <div className="bg-backgroundA grid gap-8 sm:grid-cols-2 rounded-md">
            <div className="flex flex-col gap-4 sm:gap-8 rounded-lg text-white px-4 sm:px-8 py-16 sm:py-24">
              <Image
                className="cursor-pointer"
                aria-hidden
                src={"/sf.png"}
                alt="File icon"
                width={64}
                height={64}
              />
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

            <div className="p-4 sm:p-8">
              <Image
                aria-hidden
                src={`/payrolldashboard1.png`}
                alt={`Payroll banner`}
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Challenges and Hackathons section  */}
        <section className="h-full grid gap-24 sm:grid-row-3 justify-items-center sm:px-32" id="hackathons">
          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8">
            <h1 className="text-black text-xl sm:text-4xl font-bold">Explore Challenges & Hackathons.</h1>
            <p className="w-full sm:w-1/2 text-tertiaryColor">Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
            {Array.from({ length: 3 }).map((_, index) => (<Card
              key={index}
              image={`/white_logo.png`}
              title={'Design a Dashboard for SokoFund'}
              skills={["UI/UX Design", "User Research", "Product Design"]}
              security={'(Junior, Intermediate, Senior)'}
              timeline={'15 Days'}
              onClick={() => router.push('/hackathons')}
              imageWidth={150}
              imageHeight={50}
            />))}
          </div>

          <Button classNames="w-[200px] bg-white text-primary border border-primary sm:text-sm font-semibold p-2 sm:p-3" label="View More" onClick={() => console.log("View More")} />
        </section>

        {/* Participate in skills challenge  */}
        <section className="bg-backgroundA h-full grid gap-24 sm:grid-row-2 justify-items-center sm:px-24 sm:py-16" id="participate">
          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8">
            <h1 className="text-black text-xl sm:text-4xl font-bold">What else can I gain from participating in Skills Challenges ?</h1>
            <p className="w-full sm:w-1/2 text-tertiaryColor">Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-8">
            <div className="space-y-6">
              {[{ title: "Enhance Your Employment Path", icon: "Case Round.svg", desc: "Network with other talented individuals and learn from their experiences." }, { title: "Personal Growth", icon: "Diploma.svg", desc: "Challenge yourself, learn new skills, and expand your professional network." },].map((i, index) => (<MiniDiv key={index}
                icon={i.icon}
                iconWidth={16}
                iconHeight={16}
                title={i.title}
                desc={i.desc} />))}
            </div>
            <div className="space-y-6">
              {[{ title: "Earn Recognition and Prizes", icon: "Medal Ribbons Star.svg", desc: "Gain valuable experience and knowledge to advance your career in the digital economy." }, { title: "Learn from Industry Experts", icon: "Graph New Up.svg", desc: "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces." },].map((i, index) => (<MiniDiv key={index}
                icon={i.icon}
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
        </section>

        {/* Challenges Program */}
        <section className="h-full grid gap-24 sm:grid-row-2 sm:px-24 sm:py-16" id="challenges">
          <div className="flex flex-col items-start gap-4 sm:gap-8">
            <h1 className="w-full sm:w-1/2 text-black text-xl sm:text-4xl font-bold">Users are in Love with Skills Challenges Program</h1>
            <p className="w-full sm:w-1/2 text-tertiaryColor">See what our clients say about working with us. Their success speaks for our dedication and expertise.</p>
          </div>
          <div className="flex sm:flex-row gap-4 sm:gap-8 w-full overflow-x-auto no-scrollbar z-0">
            {Array.from({ length: 9 }).map((_, index) => (<MiniCard
              key={index}
              image={`/play.svg`}
              name={'Manzi Jack'}
              location={'Kigali'}
              jobTitle={'Product Designer'}
              imageWidth={40}
              imageHeight={40}
            />))}
          </div>
        </section>

        {/* How to Get started */}
        <section className="bg-backgroundA h-full w-full grid gap-24 sm:grid-row-2 justify-items-center sm:px-32 sm:py-16" id="getStarted">
          <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-8">
            <h1 className="text-black text-xl sm:text-4xl font-bold">How to get started</h1>

          </div>

          <div className="w-full grid sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="w-full grid sm:grid-row-2 gap-4 sm:gap-8">

              {[{ title: "Sign up on Umurava Platform", desc: "Submit your completed project for evaluation.", image: "/frame_2.svg" }, { title: "Browse Open Challenges", desc: "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals.", image: "/frame_1.svg" }].map((item, index) => (
                <GetStartedStep
                  key={index}
                  stepCount={index + 1}
                  hasImage={true}
                  image={item.image}
                  title={item.title}
                  desc={item.desc}
                  imageWidth={200}
                  imageHeight={200}
                />))}
            </div>

            <div className="col-span-2 w-full grid sm:grid-row-3 gap-4 sm:gap-8">
              {[{ title: "Register and Participate", desc: "Sign up for the challenge and start working on the project." }, { title: "Submit your work", desc: "Submit your completed project for evaluation." }, { title: "Receive Feedback and Recognition", desc: "Get feedback on your work and celebrate your achievements." }].map((item, index) => (
                <GetStartedStep
                  key={index}
                  stepCount={index + 3}
                  hasImage={false}
                  title={item.title}
                  desc={item.desc}
                />))}
            </div>
          </div>

        </section>


        <section className="h-full w-full grid sm:grid-row-1 sm:px-24">
          <div className="relative grid sm:grid-cols-3 bg-primary text-white rounded-lg sm:p-8">
            <div>
              <Image
                className="rounded-md"
                src={"/twopeople.png"}
                alt={`twopeople`}
                width={250}
                height={250}
                objectFit="cover"
                priority
              />
            </div>

            <div className="col-span-2 flex flex-col gap-4 sm:gap-8">
              <h1 className="text-2xl sm:text-3xl font-bold">Ready to Unlock Your Career Potential Today!</h1>
              <p>Join a challenge or a hackathon to gain valuable work experience, build an impressive portofolio and increase your chances to land job opportunities and accelerate your career growth</p>

              <Button classNames="w-[200px] bg-white text-primary sm:text-sm p-2 sm:p-3 rounded-md" label={`View Challenge`} onClick={() => router.push('/hackathons')} />
            </div>

            <BackDropShape type="one" />
            
          </div>
        </section>

      </main>
      <div id="contact" className="">
        <Footer />
      </div>
    </div>
  );
}
