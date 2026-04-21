export const metadata = {
  title: "BBQ Charcoal Export from Malaysia | Bulk Supplier for Importers",
  description: "Source bulk BBQ briquettes from a Malaysia factory with 2025 Control Union inspection evidence, 800 MT monthly capacity, OEM packaging, and export support.",
  keywords: "bbq charcoal, charcoal export, Malaysia charcoal supplier, BBQ briquettes, lump charcoal, binchotan, restaurant charcoal, bulk charcoal",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import FactoryInspection from "@/components/factory-inspection";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <FactoryInspection />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
