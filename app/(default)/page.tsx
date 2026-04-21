export const metadata = {
  title: "BBQ Charcoal Export from Malaysia | Bulk Supplier for Importers",
  description: "Source bulk BBQ briquettes from a Malaysia factory with 2025 Control Union inspection evidence, 800 MT monthly capacity, OEM packaging, and export support.",
  keywords: "bbq charcoal, charcoal export, Malaysia charcoal supplier, BBQ briquettes, lump charcoal, binchotan, restaurant charcoal, bulk charcoal",
  alternates: {
    canonical: "/",
  },
};

import JsonLd from "@/components/json-ld";
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import FactoryInspection from "@/components/factory-inspection";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import { absoluteUrl, inspectionFacts, legalName, siteName, siteUrl } from "@/lib/seo";

const homeFaqs = [
  {
    question: "What charcoal product is backed by the factory inspection report?",
    answer:
      "The Control Union inspection report documents the Malaysia factory's briquette charcoal production setup, including monthly capacity, briquetting machines, carbonization kilns, storage, weighing, and quality-control records.",
  },
  {
    question: "What production capacity is documented?",
    answer:
      "The report records a maximum briquette charcoal production capacity of 800 metric tons per month, supported by 12 briquette machines and 72 carbonization kilns.",
  },
  {
    question: "Can buyers request OEM packaging and container orders?",
    answer:
      "Yes. The site supports bulk export inquiries for importers, distributors, restaurants, and private-label programs. Buyers can share packaging, destination port, and monthly volume through the quote form.",
  },
];

export default function Home() {
  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "BBQ Charcoal Export from Malaysia",
      description:
        "Bulk BBQ briquette charcoal export from a Malaysia factory with third-party inspection evidence, OEM packaging, and container shipping support.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      primaryImageOfPage: absoluteUrl("/images/hero-charcoal-export.png"),
      significantLink: [absoluteUrl("/factory-inspection"), absoluteUrl("/products"), absoluteUrl("/contact")],
      mainEntity: {
        "@type": "ItemList",
        name: "Factory inspection evidence",
        itemListElement: inspectionFacts.map((fact, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: fact,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Bulk BBQ Briquette Charcoal",
      brand: {
        "@type": "Brand",
        name: siteName,
      },
      manufacturer: {
        "@type": "Organization",
        name: legalName,
      },
      category: "BBQ charcoal",
      description:
        "Factory-backed BBQ briquettes for restaurant, wholesale, distributor, and private-label export orders.",
      image: absoluteUrl("/images/briquettes-405030.jpg"),
      additionalProperty: [
        { "@type": "PropertyValue", name: "Documented monthly capacity", value: "800 MT" },
        { "@type": "PropertyValue", name: "Inspection date", value: "16 October 2025" },
        { "@type": "PropertyValue", name: "Factory location", value: "Pagoh, Muar, Johor, Malaysia" },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={homeJsonLd} />
      <PageIllustration />
      <Hero />
      <FactoryInspection />
      <Workflows />
      <Features />
      <Testimonials />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200">
              Buyer Questions Answered
            </h2>
          </div>
          <div className="space-y-6">
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-800 pb-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-orange-200/65">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
