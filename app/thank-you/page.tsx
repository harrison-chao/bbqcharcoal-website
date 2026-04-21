import Link from "next/link";
import { Suspense } from "react";
import ThankYouAnalytics from "@/components/thank-you-analytics";

export const metadata = {
  title: "Thank You | Inquiry Received",
  description: "Your BBQ charcoal export inquiry has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="flex-1">
      <Suspense fallback={null}>
        <ThankYouAnalytics />
      </Suspense>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-400">
            Inquiry received
          </p>
          <h1 className="font-nacelle text-4xl font-semibold text-white md:text-5xl">
            Thank you. We will review your charcoal request.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-orange-200/65">
            Your inquiry has been sent to our team. We typically respond within 24 hours with the next steps for product specification, packaging, samples, or container quotation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/factory-inspection"
              className="btn bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
            >
              Review Factory Evidence
            </Link>
            <Link
              href="/products"
              className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
