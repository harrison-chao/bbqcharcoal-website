import { Analytics } from "@vercel/analytics/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import JsonLd from "@/components/json-ld";
import { siteName, siteUrl } from "@/lib/seo";
import HeroImg from "@/public/images/hero-charcoal-export.png";

const lpData: Record<string, {
  title: string;
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  features: Array<{ title: string; description: string }>;
  specs?: Array<{ parameter: string; specification: string }>;
  faqs: Array<{ question: string; answer: string }>;
}> = {
  "bulk-bbq-briquettes": {
    title: "Bulk BBQ Briquettes Wholesale | Verified Malaysia Manufacturer",
    headline: "Verified Industrial Scale: 800 MT/Month Bulk BBQ Briquettes Direct from Malaysia",
    subheadline: "Stop risking your supply chain with unverified traders. Secure your volume with 12 automated production lines and 72 carbonization kilns. Documented 1.6x Inventory Security Factor (LISF).",
    primaryCTA: "Request Bulk Quotation & Spec Sheet",
    secondaryCTA: "Download Factory Inspection Summary (PDF)",
    features: [
      { title: "Automated Consistency", description: "12 high-pressure machines ensuring uniform density, heat, and predictable batch-to-batch quality." },
      { title: "Supply Chain Security", description: "Our 82,146 sq ft factory area and 26,000 sq ft staging for 24/7 operations ensure your inventory is never empty." },
      { title: "Non-Haz Logistics", description: "Documented IMDG Code SP925 compliance for lower freight costs and faster customs clearance." }
    ],
    specs: [
      { parameter: "Calorific Value", specification: "> 7,000 kcal/kg" },
      { parameter: "Fixed Carbon", specification: "> 75%" },
      { parameter: "Ash Content", specification: "< 5%" },
      { parameter: "Moisture", specification: "< 8%" },
      { parameter: "Burning Time", specification: "4 - 5 Hours" }
    ],
    faqs: [
      { question: "What is your MOQ?", answer: "Typically 1 x 20ft/40ft container for optimal shipping costs." },
      { question: "Do you provide OEM packaging?", answer: "Yes, we support custom branding and various bag sizes (3kg, 5kg, 10kg, 20kg)." },
      { question: "Can I visit the factory?", answer: "We welcome on-site visits and third-party audits by our B2B partners." }
    ]
  },
  "middle-east-charcoal-export": {
    title: "Middle East BBQ Charcoal Export Specialist | UAE & Saudi Arabia",
    headline: "Seamless Charcoal Export to UAE & Saudi Arabia: Documented Non-Haz & Industrial Scale",
    subheadline: "Bypass the 'Hazardous Cargo' surcharges. Import Malaysia’s premium briquettes with a verified 14-day weathering process and SP925 compliance. Documented 1.6x Inventory Security Factor (LISF).",
    primaryCTA: "Get Middle East Export Quote (Jebel Ali/Jeddah/Shuwaikh)",
    secondaryCTA: "Request SP925 Compliance Proof (PDF)",
    features: [
      { title: "Zero Logistics Friction", description: "Deep experience with Middle East customs (Dubai, Jeddah, Dammam) and strict adherence to IMDG Code SP925." },
      { title: "14-Day Weathering Protocol", description: "Verified cooling period before packing to eliminate self-heating risks and ensure 'Non-Hazardous' status." },
      { title: "Inventory Security", description: "Why major GCC retailers (Al Othaim, Panda, Carrefour) need our 800 MT/month stability to avoid 'empty shelf' syndrome." }
    ],
    faqs: [
      { question: "How do you handle high-temperature shipping?", answer: "We implement a strict cooling protocol (Weathering Certificate) and use non-hazardous declarations under SP925." },
      { question: "What is the lead time for Dubai?", answer: "Typically 3-4 weeks from order confirmation to port arrival." },
      { question: "Are your products food-safe?", answer: "Yes, we use 100% natural wood sources and food-safe binders with no chemical additives." }
    ]
  },
  "private-label-bbq-charcoal": {
    title: "Private Label & OEM BBQ Charcoal Partner | Malaysia Factory",
    headline: "Retail Shelf Security: Your Reliable Private Label Partner for BBQ Charcoal in Malaysia",
    subheadline: "Secure your brand with 12 automated production lines and a documented 1.6x Inventory Security Factor (LISF). From 3kg retail bags to 10kg restaurant packs, we ensure your brand never goes out of stock.",
    primaryCTA: "Discuss Your Private Label Project",
    secondaryCTA: "Request a Sample for Your Retail Brand",
    features: [
      { title: "Stock-Out Prevention", description: "1.6x LISF logic to eliminate the risk of 'empty shelves' during Ramadan and summer BBQ peaks." },
      { title: "Retail-Ready Customization", description: "Kraft paper bags (3kg/5kg), PP woven bags, and customized cartons with multi-language (Arabic/English) support." },
      { title: "PEFC Certified Branding", description: "Leverage our PEFC Chain of Custody (CoC) certification to boost your brand's eco-conscious credentials." }
    ],
    faqs: [
      { question: "What is the MOQ for private label?", answer: "Typically one full container load (FCL) to ensure cost-effective shipping and manufacturing." },
      { question: "Can you help with design?", answer: "We provide technical templates for our standard bag sizes and work with your designers to ensure artwork meets printing requirements." },
      { question: "How long does an OEM order take?", answer: "Usually 6-8 weeks from design approval to shipment, including plate-making and the 14-day weathering period." }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(lpData).map((slug) => ({
    slug: slug,
  }));
}

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = lpData[slug];

  if (!data) {
    notFound();
  }

  const lpJsonLd: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: data.title,
      description: data.subheadline,
      publisher: {
        "@type": "Organization",
        name: siteName,
      },
    },
  ];

  if (data.faqs && data.faqs.length > 0) {
    lpJsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <main className="flex-1 bg-gray-950 text-gray-200">
      <Analytics />
      <JsonLd data={lpJsonLd} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-500">
                Direct Malaysia Factory Export
              </div>
              <h1 className="mb-6 font-nacelle text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                {data.headline}
              </h1>
              <p className="mb-8 text-lg text-orange-200/65 md:text-xl">
                {data.subheadline}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#inquiry"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
                >
                  {data.primaryCTA}
                </Link>
                <Link
                  href="/factory-inspection"
                  data-analytics-event="select_content"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 font-semibold text-gray-300 transition hover:bg-gray-800"
                >
                  {data.secondaryCTA}
                </Link>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-800 lg:aspect-auto lg:h-[600px]">
              <Image
                src={HeroImg}
                alt="BBQ Charcoal Factory"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-gray-700 bg-gray-900/80 p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-orange-500">800 MT</div>
                    <div className="text-sm text-gray-400">Monthly Capacity</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">1.6x</div>
                    <div className="text-sm text-gray-400">Security Factor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Proof Section */}
      <section className="border-y border-gray-900 bg-gray-950/50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale sm:justify-between lg:gap-12">
             <div className="text-xl font-bold text-white">CONTROL UNION</div>
             <div className="text-xl font-bold text-white">SGS TESTED</div>
             <div className="text-xl font-bold text-white">PEFC CERTIFIED</div>
             <div className="text-xl font-bold text-white">IMDG SP925</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-nacelle text-3xl font-semibold text-white md:text-4xl">
              Why Partner with a Documented Industrial Scale Manufacturer?
            </h2>
            <p className="mx-auto max-w-2xl text-orange-200/65">
              We eliminate the risks of supply chain disruption through verified machinery and industrial-scale storage.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {data.features.map((feature, i) => (
              <div key={i} className="rounded-2xl border border-gray-800 bg-gray-900/30 p-8 transition hover:bg-gray-900/50">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600/10 text-orange-500">
                  <span className="text-2xl font-bold">{i + 1}</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      {data.specs && (
        <section className="bg-gray-900/30 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-white">Technical Specifications</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-800">
              <table className="w-full text-left">
                <thead className="bg-gray-800/50 text-gray-300">
                  <tr>
                    <th className="px-6 py-4">Parameter</th>
                    <th className="px-6 py-4">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {data.specs.map((spec, i) => (
                    <tr key={i} className="bg-gray-900/20">
                      <td className="px-6 py-4 font-medium text-gray-300">{spec.parameter}</td>
                      <td className="px-6 py-4 text-orange-500 font-semibold">{spec.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-20 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-nacelle text-3xl font-semibold text-white md:text-4xl">
                Secure Your Volume & Request Your Export Quote
              </h2>
              <p className="mb-8 text-lg text-orange-200/65">
                Our team responds to all B2B inquiries within 24 hours. Connect with a Malaysia manufacturing partner you can trust.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">SGS Quality Assurance</h4>
                    <p className="text-sm text-gray-400">Every batch is internally tested and available for 3rd-party SGS audit.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-white">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Documented 1.6x LISF</h4>
                    <p className="text-sm text-gray-400">Inventory safety buffer to ensure zero stock-outs for major chains.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-950 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-white">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-800 pb-8 last:border-0">
                <h3 className="mb-4 text-xl font-medium text-orange-500">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="border-t border-gray-900 py-20 text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 font-nacelle text-3xl font-semibold text-white">Ready to Scale Your Charcoal Business?</h2>
          <Link
            href="#inquiry"
            className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:bg-orange-500"
          >
            Start Your Inquiry Now
          </Link>
        </div>
      </section>
    </main>
  );
}
