import Header from "@/components/crossfit/Header";
import HeroSection from "@/components/crossfit/HeroSection";
import AboutSection from "@/components/crossfit/AboutSection";
import ClassesSection from "@/components/crossfit/ClassesSection";
import PlansSection from "@/components/crossfit/PlansSection";
import TourSection from "@/components/crossfit/TourSection";
import ScheduleSection from "@/components/crossfit/ScheduleSection";
import TestimonialsSection from "@/components/crossfit/TestimonialsSection";
import CTASection from "@/components/crossfit/CTASection";
import ContactSection from "@/components/crossfit/ContactSection";
import Footer from "@/components/crossfit/Footer";
import WhatsAppFloatingButton from "@/components/crossfit/WhatsAppFloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;
