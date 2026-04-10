import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Verticals } from "@/components/sections/Verticals";
import { Clients } from "@/components/sections/Clients";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Verticals />
        <Clients />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
