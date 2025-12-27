import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Values from "@/components/sections/Values";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Vision from "@/components/sections/Vision";
import Culture from "@/components/sections/Culture";
import Testimonials from "@/components/sections/Testimonials";
import Experiments from "@/components/sections/Experiments";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Values />
        <Portfolio />
        <Vision />
        <Culture />
        <Testimonials />
        <Experiments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
