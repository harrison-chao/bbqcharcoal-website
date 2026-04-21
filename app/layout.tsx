import "./css/style.css";

import localFont from "next/font/local";

import AnalyticsEvents from "@/components/analytics-events";
import JsonLd from "@/components/json-ld";
import Header from "@/components/ui/header";
import {
  absoluteUrl,
  contactEmail,
  factoryAddress,
  legalName,
  phoneNumber,
  siteName,
  siteUrl,
  whatsappUrl,
} from "@/lib/seo";

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: {
    default: "BBQ Charcoal Export from Malaysia | Bulk Briquettes, Lump & Binchotan",
    template: "%s | BBQ Charcoal Export",
  },
  description: "Malaysia BBQ charcoal export supplier for bulk briquettes, lump charcoal, and binchotan. Product specs, OEM packaging, samples, and container shipping support.",
  keywords: ["bbq charcoal", "charcoal export", "Malaysia charcoal supplier", "BBQ briquettes", "lump charcoal", "binchotan", "restaurant charcoal", "bulk charcoal"],
  authors: [{ name: "BBQ Charcoal Export" }],
  creator: "BBQ Charcoal Export",
  publisher: "BBQ Charcoal Export",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "BBQ Charcoal Export from Malaysia | Bulk Briquettes, Lump & Binchotan",
    description: "Malaysia BBQ charcoal export supplier for bulk briquettes, lump charcoal, and binchotan with OEM packaging and container shipping support.",
    images: [
      {
        url: "/images/hero-charcoal-export.png",
        width: 1024,
        height: 1024,
        alt: "Bulk BBQ charcoal export products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BBQ Charcoal Export from Malaysia",
    description: "Bulk briquettes, lump charcoal, and binchotan with OEM packaging and export logistics support.",
    images: ["/images/hero-charcoal-export.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Manufacturer"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    legalName,
    url: siteUrl,
    logo: absoluteUrl("/logo.svg"),
    email: contactEmail,
    telephone: phoneNumber,
    sameAs: [whatsappUrl],
    address: {
      "@type": "PostalAddress",
      ...factoryAddress,
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Bulk BBQ Briquettes",
          category: "BBQ charcoal",
        },
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en",
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L2JZ27GJGD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L2JZ27GJGD');
            `,
          }}
        />
      </head>
      <body
        className={`${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <AnalyticsEvents />
          {children}
        </div>
      </body>
    </html>
  );
}
