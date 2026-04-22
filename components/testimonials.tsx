import Image from "next/image";
import PackingImg from "@/public/images/20250127_1506_Charcoal Packing Process_simple_compose_01jjk9a36fe6gb1nfag6sq7tr5.gif";
import LoadingImg from "@/public/images/20250127_1433_Coal Loading at Port_simple_compose_01jjk7dyw7fnartd970r3xnned.gif";
import CaseImg from "@/public/images/客户案例.jpg";

const proofPoints = [
  {
    img: PackingImg,
    title: "Packing visibility",
    content: "Packing photos or short clips help buyers confirm bag style, sealing, carton plan, and pallet readiness before container loading.",
  },
  {
    img: LoadingImg,
    title: "Container loading coordination",
    content: "Shipment coordination covers loading plan, export documents, and route discussion for FOB or CIF orders.",
  },
  {
    img: CaseImg,
    title: "Buyer use-case matching",
    content: "Restaurants, importers, and private-label teams can match the charcoal line to their burn profile, packing format, and retail price point.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        <div className="mb-12 text-center md:mb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex text-orange-300">
              Export Readiness
              </span>
            </div>
          <h2 className="pb-4 font-nacelle text-3xl font-semibold text-white md:text-4xl">
            Visual proof beats generic claims
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            The site now emphasizes the evidence B2B buyers expect during sourcing: packing, loading, and fit-for-market product selection.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proofPoints.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 transition hover:border-orange-400/40"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={360}
                className="aspect-video w-full object-cover"
                unoptimized
              />
              <div className="p-6">
                <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-100">{item.title}</h3>
                <p className="leading-7 text-gray-400">{item.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
