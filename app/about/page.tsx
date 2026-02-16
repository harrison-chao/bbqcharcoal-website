export const metadata = {
  title: "About Us | Bio Green Technology - Malaysia BBQ Charcoal Manufacturer",
  description: "Learn about Bio Green Technology - 15+ years experience, ISO/SGS/FDA/HALAL certified BBQ charcoal manufacturer in Muar, Johor, Malaysia.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.orange.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              About Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-orange-200/65">
              Your trusted partner for premium BBQ charcoal since 2008
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 font-nacelle text-3xl font-semibold text-gray-200">
                Premium BBQ Charcoal from Malaysia
              </h2>
              <div className="space-y-4 text-orange-200/65">
                <p>
                  Bio Green Technology Sdn Bhd is a leading manufacturer and exporter of premium BBQ charcoal based in Muar, Johor, Malaysia. With over 15 years of experience in the industry, we have established ourselves as a trusted supplier to restaurants, distributors, and retailers worldwide.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility spans 15,000 square meters, equipped with modern production lines and quality control systems. We source our raw materials from sustainable forests and maintain rigorous quality standards throughout the production process.
                </p>
                <p>
                  We export to over 50 countries across the Middle East, Asia, Europe, and the Americas. Our commitment to quality, reliability, and customer satisfaction has made us a preferred choice for businesses seeking premium BBQ charcoal solutions.
                </p>
              </div>
            </div>
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 text-gray-400">
                <span className="text-lg">Factory Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200">Company Overview</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gray-800/50 p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-orange-500">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="rounded-xl bg-gray-800/50 p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-orange-500">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div className="rounded-xl bg-gray-800/50 p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-orange-500">15,000</div>
              <div className="text-gray-300">m² Factory Area</div>
            </div>
            <div className="rounded-xl bg-gray-800/50 p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-orange-500">50,000</div>
              <div className="text-gray-300">Tons Annual Capacity</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200">Certifications</h2>
            <p className="mt-4 text-orange-200/65">We maintain the highest quality and safety standards</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "ISO 9001", desc: "Quality Management System" },
              { name: "SGS", desc: "International Certification" },
              { name: "FDA", desc: "Food Safety Certification" },
              { name: "HALAL", desc: "Islamic Certification" },
            ].map((cert, i) => (
              <div key={i} className="rounded-xl bg-gray-800/50 p-6 text-center">
                <div className="mb-3 text-xl font-semibold text-orange-500">{cert.name}</div>
                <div className="text-sm text-gray-400">{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200">Visit Our Facility</h2>
          <p className="mb-8 text-orange-200/65">
            Bio Green Technology Sdn Bhd<br />
            Lot 2000, Jalan Muar Pagoh, Batu 11,<br />
            84600, Pagoh, Muar, Johor, Malaysia
          </p>
          <a
            href="/contact"
            className="btn bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
