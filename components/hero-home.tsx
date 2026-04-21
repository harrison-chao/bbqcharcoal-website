import Image from "next/image";
import HeroImg from "@/public/images/hero-charcoal-export.png";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-14 md:grid-cols-[1.02fr_.98fr] md:items-center md:py-20">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-orange-400/25 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-200">
              Malaysia export supplier for restaurants, importers, and private labels
            </div>
            <h1
              className="pb-5 font-nacelle text-4xl font-semibold leading-tight text-white md:text-6xl"
              data-aos="fade-up"
            >
              Bulk BBQ charcoal with dependable heat, packaging, and export handling.
            </h1>
            <p
              className="max-w-2xl text-lg leading-8 text-orange-100/70"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Source factory-produced BBQ briquettes for restaurant chains, wholesalers, and retail brands. A 2025 Control Union factory inspection documents the production line, capacity, quality checks, storage, and transport controls.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-aos="fade-up" data-aos-delay={400}>
              <a
                className="btn group bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                href="/contact"
              >
                <span className="relative inline-flex items-center">
                  Request Export Quote
                  <span className="ml-1 tracking-normal text-white/55 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
              <a
                className="btn border border-gray-700 bg-gray-900/80 text-gray-200 hover:border-orange-400/60"
                href="/products"
              >
                View Product Specs
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-3 border-y border-gray-800 py-5">
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Capacity</dt>
                <dd className="mt-1 font-nacelle text-xl font-semibold text-white">800 MT/mo</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Machines</dt>
                <dd className="mt-1 font-nacelle text-xl font-semibold text-white">12 Units</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gray-500">Kilns</dt>
                <dd className="mt-1 font-nacelle text-xl font-semibold text-white">72</dd>
              </div>
            </dl>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay={300}>
            <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-2xl shadow-black/40">
              <Image
                src={HeroImg}
                alt="Bulk BBQ charcoal products ready for export"
                width={1024}
                height={1024}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent p-5">
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
