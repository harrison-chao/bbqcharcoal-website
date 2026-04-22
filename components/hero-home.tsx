import Image from "next/image";
import HeroImg from "@/public/images/hero-charcoal-export.png";

const proofItems = [
  { label: "Inspected", value: "Control Union" },
  { label: "Capacity", value: "800 MT/mo" },
  { label: "Line", value: "Briquettes" },
];

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-14 md:grid-cols-[1.04fr_.96fr] md:items-center md:py-16 lg:py-20">
          <div>
            <div className="mb-5 inline-flex rounded-md border border-orange-400/25 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-100">
              Malaysia BBQ briquette charcoal export supplier
            </div>
            <h1
              className="max-w-3xl pb-5 font-nacelle text-4xl font-semibold leading-tight text-white md:text-6xl"
              data-aos="fade-up"
            >
              Bulk BBQ charcoal supply backed by factory inspection evidence.
            </h1>
            <p
              className="max-w-2xl text-lg leading-8 text-gray-300"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Source factory-produced BBQ briquettes for restaurant chains, wholesalers, and retail brands. A 2025 Control Union factory inspection documents the production line, capacity, quality checks, storage, and transport controls.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-aos="fade-up" data-aos-delay={300}>
              <a
                className="btn group bg-orange-600 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] transition hover:bg-orange-500"
                href="/contact"
                data-analytics-event="select_content"
                data-analytics-category="cta"
                data-analytics-label="Hero request export quote"
              >
                <span className="relative inline-flex items-center">
                  Request Export Quote
                  <span className="ml-1 tracking-normal text-white/55 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
              <a
                className="btn border border-gray-700 bg-gray-900/80 text-gray-200 transition hover:border-orange-400/60 hover:text-white"
                href="/factory-inspection"
                data-analytics-event="select_content"
                data-analytics-category="navigation"
                data-analytics-label="Hero view factory inspection"
              >
                View Factory Evidence
              </a>
            </div>
            <dl className="mt-10 grid gap-3 border-y border-gray-800 py-5 sm:grid-cols-3">
              {proofItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">{item.label}</dt>
                  <dd className="mt-1 font-nacelle text-xl font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay={300}>
            <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-xl shadow-black/30">
              <Image
                src={HeroImg}
                alt="Bulk BBQ charcoal products ready for export"
                width={1024}
                height={1024}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gray-950/88 p-5 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-gray-400">Use case</p>
                    <p className="font-medium text-white">Restaurants</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Packaging</p>
                    <p className="font-medium text-white">OEM bags</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Trade</p>
                    <p className="font-medium text-white">FOB/CIF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
