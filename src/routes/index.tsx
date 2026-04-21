import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/salix/Header";
import Hero from "@/components/salix/Hero";
import LogoCloud from "@/components/salix/LogoCloud";
import PowerPack from "@/components/salix/PowerPack";
import KeyTools from "@/components/salix/KeyTools";
import CoreFeatures from "@/components/salix/CoreFeatures";
import GrowthGear from "@/components/salix/GrowthGear";
import Reviews from "@/components/salix/Reviews";
import Pricing from "@/components/salix/Pricing";
import FAQ from "@/components/salix/FAQ";
import FinalCTA from "@/components/salix/FinalCTA";
import Footer from "@/components/salix/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Salix — Smartest Way to Bring Best ROI for Sales" },
      {
        name: "description",
        content:
          "Salix helps sales teams streamline every step — automate, track deals, and close more with AI-powered tools.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <PowerPack />
        <KeyTools />
        <CoreFeatures />
        <GrowthGear />
        <Reviews />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
