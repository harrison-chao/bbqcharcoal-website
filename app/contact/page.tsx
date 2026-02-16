export const metadata = {
  title: "Contact Us | Get a Quote for BBQ Charcoal | Bio Green Technology",
  description: "Contact Bio Green Technology for BBQ charcoal quotes. Email: expo@arterki.com | WhatsApp: +86 186 5882 0622. We respond within 24 hours!",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.orange.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
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
                  <p className="text-gray-400">Bio Green Technology Sdn Bhd</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Lot 2000, Jalan Muar Pagoh, Batu 11,<br />
                    84600, Pagoh, Muar, Johor, Malaysia
                  </p>
                </div>

                <div className="rounded-xl bg-gray-800/50 p-6">
                  <h3 className="mb-2 font-semibold text-gray-200">Email</h3>
                  <a href="mailto:expo@arterki.com" className="text-orange-500 hover:text-orange-400">
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
                <form className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">Company Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">Country *</label>
                    <select
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    >
                      <option value="">Select country</option>
                      <option value="UAE">UAE</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="USA">USA</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">Product Interest *</label>
                    <select
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    >
                      <option value="">Select product</option>
                      <option value="BBQ Briquettes">BBQ Briquettes ($650-750/ton)</option>
                      <option value="Lump Charcoal">Lump Charcoal ($700-800/ton)</option>
                      <option value="Binchotan">Binchotan ($800-850/ton)</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">Quantity *</label>
                    <select
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    >
                      <option value="">Select quantity</option>
                      <option value="1-5 tons">1-5 tons (Trial)</option>
                      <option value="5-20 tons">5-20 tons</option>
                      <option value="20ft Container">20ft Container (20-25 tons)</option>
                      <option value="40ft Container">40ft Container (25-28 tons)</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      placeholder="Your requirements, questions, or specific needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-t from-orange-600 to-orange-500 py-3 font-semibold text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-center text-xs text-gray-500">
                    Or email directly:{" "}
                    <a href="mailto:expo@arterki.com" className="text-orange-500">
                      expo@arterki.com
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
