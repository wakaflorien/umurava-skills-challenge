import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen h-screen relative font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <section className="flex gap-4 items-center flex-col sm:flex-row">
          
        </section>
      </main>
      <Footer />
    </div>
  );
}
