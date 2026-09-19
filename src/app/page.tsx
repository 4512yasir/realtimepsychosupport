import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Impact from "@/components/sections/Impact";
import TheoryOfChange from "@/components/sections/TheoryOfChange";
import StrategicPillars from "@/components/sections/StrategicPillars";
import Partnerships from "@/components/sections/Partnerships";
import SuccessStories from "@/components/sections/SuccessStories";
import Leadership from "@/components/sections/Leadership";
import Governance from "@/components/sections/Governance";
import LookingAhead from "@/components/sections/LookingAhead";
import WhyPartner from "@/components/sections/WhyPartner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <TheoryOfChange />
        <StrategicPillars />
        <Partnerships />
        <SuccessStories />
        <Leadership />
        <Governance />
        <LookingAhead />
        <WhyPartner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}