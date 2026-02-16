export const metadata = {
  title: "BBQ Charcoal Products | Briquettes, Lump, Binchotan | Bio Green Technology",
  description: "Browse our premium BBQ charcoal products: BBQ Briquettes, Lump Charcoal, and Binchotan. ISO/SGS certified, export to 50+ countries. Request a quote today!",
};

import Image from "next/image";
import BriquettesImg from "@/public/images/briquettes-405030.jpg";
import LumpImg from "@/public/images/charcoal-7453437_1280.jpg";
import BinchotanImg from "@/public/images/charcoal-5184954_1280.png";

const products = [
  {
    id: "briquettes",
    name: "BBQ Briquettes",
    description: "High-density coal dust compressed into uniform pillow-shaped briquettes. Perfect for restaurants and commercial grilling.",
    features: [
      "Long burn time (4-5 hours)",
      "Consistent heat output",
      "Low ash content (<3%)",
      "Easy to light",
      "Various sizes available",
    ],
    specifications: [
      { label: "Calorific Value", value: "7,500-8,500 kcal/kg" },
      { label: "Ash Content", value: "<3%" },
      { label: "Moisture", value: "<5%" },
      { label: "Volatile Matter", value: "<15%" },
      { label: "Fixed Carbon", value: ">80%" },
      { label: "Size", value: "2.5cm - 5cm" },
    ],
    price: "$650-750/ton FOB Malaysia",
    image: BriquettesImg,
  },
  {
    id: "lump",
    name: "Lump Charcoal",
    description: "Natural hardwood charcoal in various sizes. Made from selected hardwood species for authentic smoky flavor.",
    features: [
      "Quick lighting",
      "High heat output",
      "Natural smoky flavor",
      "No chemicals or additives",
      "Various hardwood types",
    ],
    specifications: [
      { label: "Calorific Value", value: "7,000-8,000 kcal/kg" },
      { label: "Ash Content", value: "<2%" },
      { label: "Moisture", value: "<4%" },
      { label: "Volatile Matter", value: "<20%" },
      { label: "Fixed Carbon", value: ">75%" },
      { label: "Size", value: "3cm - 15cm" },
    ],
    price: "$700-800/ton FOB Malaysia",
    image: LumpImg,
  },
  {
    id: "binchotan",
    name: "Binchotan (White Charcoal)",
    description: "Premium Japanese-style white charcoal. Ultra-high heat with long burn time. The choice of professional chefs.",
    features: [
      "Ultra-high heat",
      "Very long burn time (6-8 hours)",
      "Minimal smoke",
      "Traditional kiln-fired",
      "Premium quality",
    ],
    specifications: [
      { label: "Calorific Value", value: "8,500-9,500 kcal/kg" },
      { label: "Ash Content", value: "<1.5%" },
      { label: "Moisture", value: "<3%" },
      { label: "Volatile Matter", value: "<10%" },
      { label: "Fixed Carbon", value: ">85%" },
      { label: "Size", value: "5cm - 12cm" },
    ],
    price: "$800-850/ton FOB Malaysia",
    image: BinchotanImg,
  },
];

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.orange.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Our Products
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-orange-200/65">
              Premium BBQ charcoal products tailored for restaurants, distributors, and retailers worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div key={product.id} className={`flex flex-col gap-12 lg:flex-row lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="aspect-video relative overflow-hidden rounded-2xl bg-gray-800">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200">{product.name}</h2>
                  <p className="mb-6 text-orange-200/65">{product.description}</p>
                  
                  <h3 className="mb-3 font-semibold text-gray-200">Key Features:</h3>
                  <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="h-4 w-4 shrink-0 fill-orange-500" viewBox="0 0 16 16">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mb-3 font-semibold text-gray-200">Specifications:</h3>
                  <div className="mb-6 grid gap-2 sm:grid-cols-2">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-400">{spec.label}:</span>
                        <span className="text-gray-200">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <p className="flex items-center font-semibold text-orange-500">
                      {product.price}
                    </p>
                    <a
                      href="/contact"
                      className="btn bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200">Need Custom Specifications?</h2>
          <p className="mb-8 text-orange-200/65">
            We offer OEM/ODM services for bulk orders. Contact us with your specific requirements.
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
