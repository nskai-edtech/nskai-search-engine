import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import FeaturesSection from "@/components/ui/FeaturesSection";
import HowItWorks from "@/components/ui/HowItWorks";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col lg:h-screen lg:overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <Navbar />
      <main className="flex flex-1 flex-col items-start justify-center gap-10 px-6 py-12 lg:flex-row lg:items-center lg:gap-0 lg:px-16 lg:py-0">
        <Hero />
        <div
          className="flex w-full flex-col gap-8 border-t pt-8 lg:flex-1 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
          style={{ borderColor: "var(--border)" }}
        >
          <FeaturesSection />
          <HowItWorks />
        </div>
      </main>
      <Footer />
    </div>
  );
}
