import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { Industries } from "@/components/sections/Industries";
import { Partners } from "@/components/sections/Partners";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <About />
        <Services />
        <BusinessModel />
        <Industries />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
