import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchFilters from "@/components/SearchFilters";
import VehicleGrid from "@/components/VehicleGrid";
import BrandsSection from "@/components/BrandsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Main Content */}
      <section id="estoque" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-80 shrink-0">
              <div className="lg:sticky lg:top-32">
                <SearchFilters />
              </div>
            </aside>

            {/* Vehicle Grid */}
            <VehicleGrid />
          </div>
        </div>
      </section>

      <BrandsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
