import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";

import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
