import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import FeaturesSection from "@/components/ui/FeaturesSection";
import HowItWorks from "@/components/ui/HowItWorks";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--bg)" }}>
      <Navbar />
      <main className="flex flex-col items-center px-6">
        <Hero />
        <FeaturesSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
