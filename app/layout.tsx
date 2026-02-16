import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    default: "Premium BBQ Charcoal Export from Malaysia | Bio Green Technology",
    template: "%s | Bio Green Technology",
  },
  description: "Leading BBQ charcoal supplier from Malaysia. BBQ Briquettes, Lump Charcoal, Binchotan. ISO/SGS certified. Exporting to 50+ countries worldwide.",
  keywords: ["bbq charcoal", "charcoal export", "Malaysia charcoal supplier", "BBQ briquettes", "lump charcoal", "binchotan", "restaurant charcoal", "bulk charcoal"],
  authors: [{ name: "Bio Green Technology" }],
  creator: "Bio Green Technology",
  publisher: "Bio Green Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bbqcharcoalexport.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bbqcharcoalexport.com",
    siteName: "Bio Green Technology",
    title: "Premium BBQ Charcoal Export from Malaysia | Bio Green Technology",
    description: "Leading BBQ charcoal supplier from Malaysia. BBQ Briquettes, Lump Charcoal, Binchotan. ISO/SGS certified. Exporting to 50+ countries worldwide.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bio Green Technology - Premium BBQ Charcoal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium BBQ Charcoal Export from Malaysia | Bio Green Technology",
    description: "Leading BBQ charcoal supplier from Malaysia. BBQ Briquettes, Lump Charcoal, Binchotan. ISO/SGS certified.",
    images: ["/images/og-image.jpg"],
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
  return (
    <html lang="en">
      <head>
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
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
