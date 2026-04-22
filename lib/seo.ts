export const siteUrl = "https://www.bbqcharcoalexport.com";
export const siteName = "BBQ Charcoal Export";
export const legalName = "Bio Green Technology Sdn Bhd";
export const contactEmail = "expo@arterki.com";
export const phoneNumber = "+86 186 5882 0622";
export const whatsappUrl = "https://wa.me/8618658820622";

export const factoryAddress = {
  streetAddress: "Lot 2000, Jalan Muar Pagoh, Batu 11",
  addressLocality: "Pagoh, Muar",
  addressRegion: "Johor",
  postalCode: "84600",
  addressCountry: "MY",
};

export const inspectionFacts = [
  "Control Union (Malaysia) inspected the factory on 16 October 2025 under job CUMAL/1880/25(10).",
  "Documented maximum briquette charcoal output is 800 metric tons per month.",
  "The facility has 12 briquette machines and 72 carbonization kilns.",
  "The inspected site includes 82,146 sq ft of factory building area and 26,000 sq ft of storage area.",
  "An 80 metric ton weighbridge supports incoming raw material and outgoing shipment control.",
  "PEFC Chain of Custody certificate CSIM-PEFC-CoC-0020 is valid until 18 July 2027.",
  "Quality controls include moisture checks, daily weight and density records, metal detection, and SGS testing several times per year.",
];

export const blogSlugs = [
  "private-label-bbq-charcoal-guide",
  "middle-east-charcoal-import-guide",
  "shipping-charcoal-safety-sp925",
  "briquettes-vs-lump-charcoal-restaurant-guide",
  "b2b-bbq-charcoal-specs-checklist",
  "evaluating-bbq-charcoal-manufacturers-factory-inspection",
  "how-to-choose-right-bbq-charcoal-restaurant",
  "bbq-briquettes-vs-lump-charcoal-comparison",
  "understanding-charcoal-specifications",
  "shipping-bbq-charcoal-middle-east-guide",
  "us-bbq-restaurant-market-trends-2026",
  "charcoal-quality-control-manufacturing",
  "binchotan-japanese-white-charcoal-guide",
  "reducing-charcoal-costs-wholesale",
  "sustainable-charcoal-production-malaysia",
  "charcoal-supplier-evaluation-checklist",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
