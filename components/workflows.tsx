import Image from "next/image";
import WorflowImg01 from "@/public/images/briquettes-405030.jpg";
import WorflowImg02 from "@/public/images/charcoal-7453437_1280.jpg";
import WorflowImg03 from "@/public/images/charcoal-5184954_1280.png";

const products = [
  {
    image: WorflowImg01,
    name: "BBQ Briquettes",
    label: "Factory-backed line",
    copy: "Uniform pillow or hex shapes for restaurants and retail packs where predictable heat, easy stacking, and clean presentation matter.",
  },
  {
    image: WorflowImg02,
    name: "Lump Charcoal",
    label: "Sourcing option",
    copy: "Selected hardwood lumps for grill houses, wholesalers, and outdoor cooking brands that want natural texture and strong heat.",
  },
  {
    image: WorflowImg03,
    name: "Binchotan",
    label: "Sourcing option",
    copy: "High-temperature white charcoal for professional kitchens that need long burn time, low smoke, and stable service performance.",
  },
];

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex text-orange-300">
                Our Products
              </span>
            </div>
            <h2 className="pb-4 font-nacelle text-3xl font-semibold text-white md:text-4xl">
              Charcoal lines buyers can specify clearly
            </h2>
            <p className="text-lg text-gray-300">
              Each product page is framed around the details importers ask for first: burn time, ash, moisture, packing format, container loading, and private-label options.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {products.map((product) => (
            <a
              key={product.name}
              className="group/card relative h-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900/55 transition hover:border-orange-400/50"
              href="/products"
            >
                <Image
                  className="inline-flex h-48 w-full object-cover transition duration-300 group-hover/card:scale-[1.02]"
                  src={product.image}
                  width={350}
                  height={288}
                  alt={product.name}
                />
                <div className="p-6">
                  <div className="mb-3 inline-flex rounded-md border border-orange-400/20 px-2 py-1 text-xs font-medium text-orange-300">
                    {product.label}
                  </div>
                  <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-100">{product.name}</h3>
                  <p className="text-gray-400">{product.copy}</p>
                </div>
            </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
