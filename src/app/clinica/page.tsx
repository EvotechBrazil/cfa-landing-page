import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Clinics } from "@/components/sections/Clinics";
import { Program } from "@/components/sections/Program";
import { Speakers } from "@/components/sections/Speakers";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function ClinicaPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Clinics />
        <Program />
        <Speakers />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
