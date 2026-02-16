import Image from "next/image";
import WorflowImg01 from "@/public/images/briquettes-405030.jpg";
import WorflowImg02 from "@/public/images/charcoal-7453437_1280.jpg";
import WorflowImg03 from "@/public/images/charcoal-5184954_1280.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                Our Products
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.orange.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Premium Charcoal Products
            </h2>
            <p className="text-lg text-orange-200/65">
              We offer a wide range of BBQ charcoal products to meet your specific needs. From restaurant-grade briquettes to premium lump charcoal and authentic Japanese Binchotan.
            </p>
          </div>
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="/products"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                  </svg>
                </div>
                <Image
                  className="inline-flex h-48 w-full object-cover"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="BBQ Briquettes"
                />
                <div className="p-6">
                  <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">BBQ Briquettes</h3>
                  <p className="text-orange-200/65">High-density coal dust compressed into uniform shapes. Long burn time, consistent heat. Perfect for restaurants and commercial use.</p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="/products"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                  </svg>
                </div>
                <Image
                  className="inline-flex h-48 w-full object-cover"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Lump Charcoal"
                />
                <div className="p-6">
                  <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">Lump Charcoal</h3>
                  <p className="text-orange-200/65">Natural hardwood charcoal in various sizes. Quick lighting, high heat, authentic smoky flavor. Ideal for grilling enthusiasts.</p>
                </div>
              </div>
            </a>
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-orange-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-orange-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
              href="/products"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path fill="#F4F4F5" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                  </svg>
                </div>
                <Image
                  className="inline-flex h-48 w-full object-cover"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Binchotan"
                />
                <div className="p-6">
                  <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">Binchotan</h3>
                  <p className="text-orange-200/65">Premium Japanese white charcoal. Ultra-high heat, long burn time, minimal smoke. The choice of professional chefs worldwide.</p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
