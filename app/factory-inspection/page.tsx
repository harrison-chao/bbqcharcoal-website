import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import {
  absoluteUrl,
  factoryAddress,
  inspectionFacts,
  legalName,
  siteName,
  siteUrl,
} from "@/lib/seo";
import FactoryOverviewImg from "@/public/images/factory-inspection/factory-overview.jpg";
import ProductionLineImg from "@/public/images/factory-inspection/production-line-grinder.jpg";
import KilnLoadingImg from "@/public/images/factory-inspection/briquette-kiln-loading.jpg";
import MoistureTestImg from "@/public/images/factory-inspection/moisture-test.jpg";

export const metadata = {
  title: "Malaysia BBQ Briquette Charcoal Factory Inspection | 800 MT Monthly Capacity",
  description:
    "Review the 2025 Control Union factory inspection evidence for a Malaysia BBQ briquette charcoal factory: 800 MT monthly capacity, 12 briquette machines, 72 kilns, storage, weighbridge, and quality controls.",
  alternates: {
    canonical: "/factory-inspection",
  },
  openGraph: {
    title: "Malaysia BBQ Briquette Charcoal Factory Inspection",
    description:
      "Third-party inspection evidence for a Malaysia BBQ briquette charcoal factory with 800 MT monthly capacity.",
    url: `${siteUrl}/factory-inspection`,
    images: [
      {
        url: "/images/factory-inspection/factory-overview.jpg",
        width: 1200,
        height: 800,
        alt: "Malaysia charcoal factory inspection overview",
      },
    ],
  },
};

const evidenceBlocks = [
  {
    title: "What was inspected?",
    body: "Control Union (Malaysia) inspected the Pagoh, Muar, Johor facility on 16 October 2025. The report covers company records, production flow, machinery, storage, weighing, finished goods, safety controls, and certification evidence.",
  },
  {
    title: "What production capacity is documented?",
    body: "The inspection records a maximum briquette charcoal output of 800 metric tons per month, supported by 12 briquette machines, 72 carbonization kilns, grinders, a dryer, forklifts, cranes, and an 80 MT weighbridge.",
  },
  {
    title: "How is quality controlled?",
    body: "The factory keeps daily production, weight, density, incoming raw material, and outgoing goods records. The report also notes moisture testing, metal detection, dust-control systems, and SGS laboratory testing several times per year.",
  },
  {
    title: "What does this mean for buyers?",
    body: "For importers and distributors, the report turns a supplier claim into evidence: a named factory, a dated inspection, documented equipment, monthly capacity, storage space, weighing control, and traceable production records.",
  },
];

const gallery = [
  {
    image: FactoryOverviewImg,
    title: "Factory and production site",
    alt: "Aerial view of the Malaysia BBQ charcoal factory site",
  },
  {
    image: ProductionLineImg,
    title: "Grinding and preparation",
    alt: "Raw material processing and grinding line inside the charcoal factory",
  },
  {
    image: KilnLoadingImg,
    title: "Carbonization kilns",
    alt: "Briquette charcoal loading at the carbonization kiln area",
  },
  {
    image: MoistureTestImg,
    title: "Quality checks",
    alt: "Moisture testing for briquette charcoal quality control",
  },
];

export default function FactoryInspectionPage() {
  const pageJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/factory-inspection#webpage`,
      url: `${siteUrl}/factory-inspection`,
      name: "Malaysia BBQ Briquette Charcoal Factory Inspection",
      description:
        "A buyer-facing summary of third-party factory inspection evidence for Malaysia BBQ briquette charcoal export.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        legalName,
        address: {
          "@type": "PostalAddress",
          ...factoryAddress,
        },
      },
      primaryImageOfPage: absoluteUrl("/images/factory-inspection/factory-overview.jpg"),
      mainEntity: {
        "@type": "ItemList",
        name: "Control Union inspection highlights",
        itemListElement: inspectionFacts.map((fact, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: fact,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Factory Inspection",
          item: `${siteUrl}/factory-inspection`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: evidenceBlocks.map((block) => ({
        "@type": "Question",
        name: block.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: block.body,
        },
      })),
    },
  ];

  return (
    <main className="flex-1">
      <JsonLd data={pageJsonLd} />
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-400">
                Third-party factory evidence
              </p>
              <h1 className="font-nacelle text-4xl font-semibold text-white md:text-5xl">
                Malaysia BBQ briquette charcoal factory inspection
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-orange-200/65">
                A buyer-focused summary of the 2025 Control Union inspection report for Bio Green Technology Sdn Bhd, documenting factory capacity, production equipment, storage, weighing, records, and quality-control practices.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                  data-analytics-event="select_content"
                  data-analytics-category="factory_inspection"
                  data-analytics-label="Request inspection details"
                >
                  Request Inspection Details
                </Link>
                <Link
                  href="/products"
                  className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-800">
              <Image
                src={FactoryOverviewImg}
                alt="Malaysia BBQ charcoal factory inspection overview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["800 MT", "Maximum monthly briquette capacity"],
              ["12", "Briquette machines"],
              ["72", "Carbonization kilns"],
              ["26,000 sq ft", "Storage area"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl bg-gray-800/50 p-6">
                <div className="mb-2 text-3xl font-semibold text-orange-500">{value}</div>
                <div className="text-sm text-gray-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {evidenceBlocks.map((block) => (
              <div key={block.title} className="border-b border-gray-800 pb-8">
                <h2 className="mb-3 font-nacelle text-2xl font-semibold text-white">{block.title}</h2>
                <p className="text-orange-200/65">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200">
              Inspection Photo Evidence
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {gallery.map((item) => (
              <figure key={item.title}>
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-800">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" />
                </div>
                <figcaption className="mt-3 text-sm font-medium text-gray-300">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200">
            Use the report in your supplier evaluation
          </h2>
          <p className="mb-8 text-orange-200/65">
            Share your destination market, monthly volume, packaging format, and documentation requirements. We will respond with the relevant product basis and available supporting evidence.
          </p>
          <Link
            href="/contact"
            className="btn bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
            data-analytics-event="select_content"
            data-analytics-category="factory_inspection"
            data-analytics-label="Start supplier evaluation"
          >
            Start Supplier Evaluation
          </Link>
        </div>
      </section>
    </main>
  );
}
