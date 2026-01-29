import Header from "@/components/crossfit/Header";
import HeroSection from "@/components/crossfit/HeroSection";
import WhyExerciseSection from "@/components/crossfit/WhyExerciseSection";
import AboutSection from "@/components/crossfit/AboutSection";
import TourSection from "@/components/crossfit/TourSection";
import ClassesSection from "@/components/crossfit/ClassesSection";
import ScheduleSection from "@/components/crossfit/ScheduleSection";
import WhatsAppCTASection from "@/components/crossfit/WhatsAppCTASection";
import BlogSection from "@/components/crossfit/BlogSection";
import ContactSection from "@/components/crossfit/ContactSection";
import Footer from "@/components/crossfit/Footer";
import WhatsAppFloatingButton from "@/components/crossfit/WhatsAppFloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyExerciseSection />
        <AboutSection />
        <TourSection />
        <ClassesSection />
        <ScheduleSection />
        <WhatsAppCTASection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
