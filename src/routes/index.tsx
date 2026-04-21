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
