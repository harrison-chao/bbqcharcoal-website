export const metadata = {
  title: "About Us | Bio Green Technology - Malaysia BBQ Charcoal Manufacturer",
  description: "Learn about Bio Green Technology - 15+ years experience, ISO/SGS/FDA/HALAL certified BBQ charcoal manufacturer in Muar, Johor, Malaysia.",
};

import Image from "next/image";
import FactoryImg from "@/public/images/charcoal-5673897.jpg";

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
              Your trusted partner for premium BBQ charcoal since 2011
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 font-nacelle text-3xl font-semibold text-gray-200">
                World-Class BBQ Charcoal Manufacturing Facility
              </h2>
              <div className="space-y-4 text-orange-200/65">
                <p>
                  <strong className="text-white">Bio Green Technology Sdn Bhd</strong> is a leading manufacturer and exporter of premium BBQ charcoal headquartered in Malaysia. Established in 2011, we specialize in producing high-quality Briquette Charcoal for global markets.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility is strategically located in <strong className="text-white">Pagoh, Muar, Johor</strong> - a prime location in the southern region of Peninsular Malaysia with excellent access to ports and logistics networks.
                </p>
                <p>
                  With a <strong className="text-white">162,833 sq ft</strong> land area and <strong className="text-white">82,146 sq ft</strong> production facility, we have the capacity to produce up to <strong className="text-white">800 metric tons per month</strong>, ensuring reliable supply for our valued customers worldwide.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-800">
              <Image
                src={FactoryImg}
                alt="Bio Green Technology Factory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200">Factory Overview</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gray-800/50 p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-orange-500">2011</div>
              <div className="text-gray-300">Established</div>
            </div>
            <div className="rounded-xl bg-gray-800/50 p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-orange-500">162,833</div>
              <div className="text-gray-300">sq ft Land Area</div>
            </div>
            <div className="rounded-xl bg-gray-800/50 p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-orange-500">800</div>
              <div className="text-gray-300">MT Monthly Capacity</div>
            </div>
            <div className="rounded-xl bg-gray-800/50 p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-orange-500">40+</div>
              <div className="text-gray-300"> Skilled Workers</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200">Advanced Production Process</h2>
            <p className="mt-4 text-orange-200/65">From raw material to finished product - every step is carefully controlled</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Raw Material", desc: "Premium sawdust & wood chips selection" },
              { step: "02", title: "Grinding & Drying", desc: "Precision grinding & moisture control" },
              { step: "03", title: "Briquetting", desc: "High-pressure compression molding" },
              { step: "04", title: "Carbonization", desc: "Kiln firing at optimal temperatures" },
              { step: "05", title: "Cooling", desc: "Controlled cooling process" },
              { step: "06", title: "Quality Check", desc: "SGS certified quality testing" },
              { step: "07", title: "Packaging", desc: "Professional packing in boxes/gunny bags" },
              { step: "08", title: "Storage & Export", desc: "26,000 sq ft warehouse & global shipping" },
            ].map((item, i) => (
              <div key={i} className="relative rounded-xl bg-gray-800/50 p-6">
                <div className="mb-3 text-2xl font-bold text-orange-500">{item.step}</div>
                <h3 className="mb-2 font-semibold text-gray-200">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200">Production Equipment</h2>
            <p className="mt-4 text-orange-200/65">State-of-the-art machinery for consistent quality</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Briquetting Machines", qty: "12 units", capacity: "3,000 pcs/hr each" },
              { name: "Carbonization Kilns", qty: "72 units", capacity: "1,500 pcs/kiln" },
              { name: "Coarse Grinders", qty: "2 units", capacity: "10 mt/hr each" },
              { name: "Fine Grinders", qty: "1 unit", capacity: "8 mt/hr" },
              { name: "Dryers", qty: "1 unit", capacity: "7 mt/hr" },
              { name: "Weighbridge", qty: "1 unit", capacity: "80 mt max load" },
              { name: "Overhead Cranes", qty: "2 units", capacity: "3 mt each" },
              { name: "Forklifts", qty: "2 units", capacity: "2.5-3 ton" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg bg-gray-800/50 p-4">
                <div>
                  <div className="font-semibold text-gray-200">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.qty}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-orange-500">{item.capacity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200">Certifications & Quality Standards</h2>
            <p className="mt-4 text-orange-200/65">Internationally recognized certifications for peace of mind</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "PEFC CoC", desc: "Chain of Custody Certification", cert: "CSIM-PEFC-CoC-0020" },
              { name: "SGS Tested", desc: "International Quality Testing", cert: "Regular lab testing" },
              { name: "MITI Licensed", desc: "Ministry of International Trade & Industry", cert: "Manufacturing License" },
              { name: "Local Authority", desc: "Muar Municipal License", cert: "Factory Operating License" },
            ].map((cert, i) => (
              <div key={i} className="rounded-xl bg-gray-800/50 p-6 text-center">
                <div className="mb-3 text-xl font-semibold text-orange-500">{cert.name}</div>
                <div className="text-sm text-gray-300">{cert.desc}</div>
                <div className="mt-2 text-xs text-gray-500">{cert.cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200">Quality Assurance</h2>
          <p className="mb-8 text-orange-200/65">
            Our commitment to quality is unwavering. We implement rigorous quality control measures at every stage of production.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "SGS Laboratory quality testing multiple times per year",
              "Daily weight and density checks on all products",
              "Metal detectors to remove foreign matter",
              "Cyclone system to prevent dust explosions",
              "Closed production space to reduce contamination",
              "Professional fire protection system installed",
              "Regular equipment maintenance and calibration",
              "Comprehensive PPE for all workers",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-left text-gray-300">
                <svg className="h-5 w-5 shrink-0 fill-orange-500" viewBox="0 0 16 16">
                  <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200">Visit Our Facility</h2>
          <p className="mb-8 text-orange-200/65">
            <strong className="text-white">Bio Green Technology Sdn Bhd</strong><br />
            Lot 2000, Jalan Muar Pagoh, Batu 11,<br />
            84600, Pagoh, Muar, Johor, Malaysia
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="btn bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
            >
              Schedule a Visit
            </a>
            <a
              href="/products"
              className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
