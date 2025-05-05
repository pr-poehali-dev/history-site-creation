import Header from "@/components/history-site/Header");
import HeroBanner from "@/components/history-site/HeroBanner";
import AboutSection from "@/components/history-site/AboutSection";
import MaterialsSection from "@/components/history-site/MaterialsSection";
import EventsSection from "@/components/history-site/EventsSection";
import ContactSection from "@/components/history-site/ContactSection";
import Footer from "@/components/history-site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <Header />
      <HeroBanner />
      <AboutSection />
      <MaterialsSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
export default Index;