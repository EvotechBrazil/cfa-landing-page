"use client";

import Header from "@/components/box/Header";
import HeroSection from "@/components/box/HeroSection";
import AboutSection from "@/components/box/AboutSection";
import ClassesSection from "@/components/box/ClassesSection";
import PlansSection from "@/components/box/PlansSection";
import TourSection from "@/components/box/TourSection";
import ScheduleSection from "@/components/box/ScheduleSection";
import TestimonialsSection from "@/components/box/TestimonialsSection";
import CTASection from "@/components/box/CTASection";
import ContactSection from "@/components/box/ContactSection";
import Footer from "@/components/box/Footer";
import WhatsAppFloatingButton from "@/components/box/WhatsAppFloatingButton";
import { WhatsAppFormProvider } from "@/components/box/WhatsAppFormContext";

export default function HomePage() {
  return (
    <WhatsAppFormProvider>
      <div className="box-theme min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ClassesSection />
          <PlansSection />
          <TourSection />
          <ScheduleSection />
          <TestimonialsSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </WhatsAppFormProvider>
  );
}
