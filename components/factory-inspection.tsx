import Image from "next/image";
import FactoryOverview from "@/public/images/factory-inspection/factory-overview.jpg";
import RawMaterial from "@/public/images/factory-inspection/raw-material-wood-dust.jpg";
import ProductionLine from "@/public/images/factory-inspection/production-line-grinder.jpg";
import KilnLoading from "@/public/images/factory-inspection/briquette-kiln-loading.jpg";
import CoolingCharcoal from "@/public/images/factory-inspection/cooling-briquette-charcoal.jpg";
import MoistureTest from "@/public/images/factory-inspection/moisture-test.jpg";

const capacityStats = [
  { value: "800 MT", label: "maximum monthly briquette charcoal capacity" },
  { value: "12", label: "briquette machines in the production line" },
  { value: "72", label: "kilns for carbonization" },
  { value: "26,000 sq ft", label: "finished product storage facility" },
  { value: "82,146 sq ft", label: "factory building area" },
  { value: "80 MT", label: "maximum weighbridge load" },
];

const inspectionPoints = [
  "Factory inspection by Control Union (Malaysia) Sdn Bhd on 16 October 2025.",
  "Registered Malaysian company, business registration number 929415-T.",
  "PEFC CoC certificate noted in the report as valid until 18 July 2027.",
  "Incoming raw materials weighed by on-site weighbridge with weighing slips.",
  "Daily production, incoming material, outgoing shipment, and stock records are maintained by the accounting department.",
  "Finished briquette charcoal is packed in 5kg, 10kg, and 20kg boxes or gunny bags for local and export markets.",
];

const processSteps = [
  "Wood chip / sawdust receiving",
  "Coarse grinding",
  "Drying",
  "Fine grinding",
  "Briquette forming",
  "Kiln carbonization",
  "Cooling",
  "Packing and storage",
];

const factoryImages = [
  { src: FactoryOverview, title: "Factory overview", alt: "Exterior overview of the charcoal factory" },
  { src: RawMaterial, title: "Raw material storage", alt: "Wood dust raw material in the charcoal factory" },
  { src: ProductionLine, title: "Grinding and drying line", alt: "Charcoal production machinery line" },
  { src: KilnLoading, title: "Kiln carbonization", alt: "Briquette charcoal loaded for kiln carbonization" },
  { src: CoolingCharcoal, title: "Cooling briquette charcoal", alt: "Briquette charcoal cooling after carbonization" },
  { src: MoistureTest, title: "Moisture testing", alt: "Moisture tester used for sawdust and wood chip checks" },
];

export default function FactoryInspection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-y border-gray-800 py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div>
              <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-200">
                2025 factory inspection evidence
              </div>
              <h2 className="mt-5 font-nacelle text-3xl font-semibold leading-tight text-white md:text-5xl">
                Production capacity backed by a full factory inspection report.
              </h2>
              <p className="mt-5 leading-8 text-orange-100/70">
                The inspection report documents a dedicated briquette charcoal operation in Pagoh, Muar, Johor, with raw material receiving, grinding, drying, briquette forming, kiln carbonization, cooling, packing, storage, and dispatch records reviewed on site.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {capacityStats.map((stat) => (
                  <div key={stat.value} className="rounded-lg border border-gray-800 bg-gray-900/55 p-4">
                    <p className="font-nacelle text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-orange-200/65">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/45 p-5">
              <div className="grid gap-4 sm:grid-cols-[1.05fr_.95fr]">
                <Image
                  src={FactoryOverview}
                  alt="Factory exterior from inspection report"
                  width={1591}
                  height={921}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <div className="space-y-3">
                  <div className="rounded-lg bg-gray-950/70 p-4">
                    <p className="text-sm text-gray-400">Inspector</p>
                    <p className="mt-1 font-medium text-white">Control Union (Malaysia) Sdn Bhd</p>
                  </div>
                  <div className="rounded-lg bg-gray-950/70 p-4">
                    <p className="text-sm text-gray-400">Inspection date</p>
                    <p className="mt-1 font-medium text-white">16 October 2025</p>
                  </div>
                  <div className="rounded-lg bg-gray-950/70 p-4">
                    <p className="text-sm text-gray-400">Report scope</p>
                    <p className="mt-1 font-medium text-white">Factory operation, production, quality, transport, storage, environment</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-400">
                Source: Control Union factory inspection report, job number CUMAL/1880/25(10). The report covers briquette charcoal production at the inspected factory.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h3 className="font-nacelle text-2xl font-semibold text-white">What the report supports</h3>
              <ul className="mt-5 space-y-3">
                {inspectionPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-orange-100/70">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-nacelle text-2xl font-semibold text-white">Traceable production flow</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {processSteps.map((step, index) => (
                  <div key={step} className="rounded-lg border border-gray-800 bg-gray-900/45 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-orange-400">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-nacelle text-2xl font-semibold text-white">Inspection report visuals</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {factoryImages.map((item) => (
                <figure key={item.title} className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900/45">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={640}
                    height={420}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm text-orange-100/70">{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
