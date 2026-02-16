export const metadata = {
  title: "Premium BBQ Charcoal Export from Malaysia | Bio Green Technology",
  description: "Leading BBQ charcoal supplier from Malaysia. BBQ Briquettes, Lump Charcoal, Binchotan. ISO/SGS certified. Exporting to 50+ countries worldwide. Request a quote today!",
  keywords: "bbq charcoal, charcoal export, Malaysia charcoal supplier, BBQ briquettes, lump charcoal, binchotan, restaurant charcoal, bulk charcoal",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
