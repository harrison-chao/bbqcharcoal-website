export const metadata = {
  title: "Contact Us | Get a Bulk BBQ Charcoal Export Quote",
  description: "Contact BBQ Charcoal Export for briquettes, lump charcoal, and binchotan quotes. Email: expo@arterki.com | WhatsApp: +86 186 5882 0622.",
  alternates: {
    canonical: "/contact",
  },
};

import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="pb-4 font-nacelle text-4xl font-semibold text-white md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-orange-200/65">
              Get a quote for your BBQ charcoal needs. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-nacelle text-2xl font-semibold text-gray-200">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="rounded-xl bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-semibold text-gray-200">Company</h3>
                  <p className="text-gray-400">BBQ Charcoal Export</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Lot 2000, Jalan Muar Pagoh, Batu 11,<br />
                    84600, Pagoh, Muar, Johor, Malaysia
                  </p>
                </div>

                <div className="rounded-xl bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-semibold text-gray-200">Email</h3>
                  <a
                    href="mailto:expo@arterki.com"
                    className="text-orange-500 hover:text-orange-400"
                    data-analytics-event="generate_lead"
                    data-analytics-category="contact"
                    data-analytics-label="Contact email click"
                  >
                    expo@arterki.com
                  </a>
                </div>

                <div className="rounded-xl bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-semibold text-gray-200">WhatsApp Business</h3>
                  <a 
                    href="https://wa.me/8618658820622" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400"
                    data-analytics-event="generate_lead"
                    data-analytics-category="contact"
                    data-analytics-label="Contact WhatsApp click"
                  >
                    +86 186 5882 0622
                  </a>
                </div>

                <div className="rounded-xl bg-gray-800/50 p-6">
                  <h3 className="mb-3 font-semibold text-gray-200">Quick Response Promise</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 fill-orange-500" viewBox="0 0 16 16">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                      Inquiry response within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 fill-orange-500" viewBox="0 0 16 16">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                      Detailed quote within 48 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 fill-orange-500" viewBox="0 0 16 16">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                      Sample shipment within 7 days
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-gray-800/50 p-8">
                <h2 className="mb-6 font-nacelle text-2xl font-semibold text-gray-200">Request a Quote</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
