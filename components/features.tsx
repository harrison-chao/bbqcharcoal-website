import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.orange.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Premium Quality, Global Export
            </h2>
            <p className="text-lg text-orange-200/65">
              We are a trusted BBQ charcoal supplier with over 14 years of experience exporting high-quality charcoal to restaurants, distributors, and retailers worldwide.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3 h-10 w-10 fill-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Premium Quality
              </h3>
              <p className="text-orange-200/65">
                Our charcoal undergoes rigorous quality control and is SGS certified for calorific value, ash content, and moisture levels.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 h-10 w-10 fill-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Certified Factory
              </h3>
              <p className="text-orange-200/65">
                PEFC CoC certified manufacturing facility. ISO quality management system. SGS tested products.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 h-10 w-10 fill-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Strategic Location
              </h3>
              <p className="text-orange-200/65">
                Located in Johor, Malaysia with easy access to major ports. Exporting to 50+ countries worldwide.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 h-10 w-10 fill-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                14+ Years Experience
              </h3>
              <p className="text-orange-200/65">
                Since 2011, we have been manufacturing and exporting premium BBQ charcoal from our facility in Muar, Johor.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 h-10 w-10 fill-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Large Capacity
              </h3>
              <p className="text-orange-200/65">
                800 MT monthly production capacity with 82,146 sq ft manufacturing facility. 12 briquetting machines.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 h-10 w-10 fill-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                24/7 Support
              </h3>
              <p className="text-orange-200/65">
                Responsive customer service with inquiry response within 24 hours. Dedicated account managers.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
