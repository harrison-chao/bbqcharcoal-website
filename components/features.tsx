export default function Features() {
  const features = [
    {
      title: "Specification-led sourcing",
      body: "The inspected factory operation is focused on briquette charcoal, so the quote can be tied to clear briquette size, packing, density, weight, and burn requirements.",
      icon: "M4 5h16v3H4V5Zm0 5h16v3H4v-3Zm0 5h10v3H4v-3Z",
    },
    {
      title: "OEM packaging support",
      body: "Retail bags, restaurant sacks, master cartons, and pallet plans can be discussed early, including artwork readiness and loading efficiency.",
      icon: "M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Zm8 2.2 4.2-2.3L12 5 7.8 7.4 12 9.7Zm-6 1.1v4.5l5 2.8v-4.6l-5-2.7Zm7 7.3 5-2.8v-4.5l-5 2.7v4.6Z",
    },
    {
      title: "Recorded production and stock",
      body: "Incoming raw material, daily production, outgoing shipments, and stock updates are recorded through the accounting department and SQL accounting software.",
      icon: "M7 3h7l3 3v15H7V3Zm7 1.8V7h2.2L14 4.8ZM9 10h6v2H9v-2Zm0 4h6v2H9v-2Z",
    },
    {
      title: "Quality checks in the line",
      body: "The report notes daily weight and density checks, incoming sawdust moisture testing, sieves and metal detector use, plus SGS lab analysis several times a year.",
      icon: "M12 2 4 6v8c0 4.2 3.4 7.2 8 8 4.6-.8 8-3.8 8-8V6l-8-4Zm-1 14-3-3 1.4-1.4 1.6 1.6 4.6-4.6L17 10l-6 6Z",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-orange-200/50">
              <span className="inline-flex bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.orange.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Built for wholesale charcoal procurement
            </h2>
            <p className="text-lg text-orange-200/65">
              Importers need fewer surprises: clear specs, realistic sampling, export-ready packing, and steady communication from inquiry to shipment.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm gap-5 sm:max-w-none sm:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-lg border border-gray-800 bg-gray-900/45 p-6">
                <svg
                  className="mb-4 h-9 w-9 fill-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={feature.icon} />
                </svg>
                <h3 className="mb-2 font-nacelle text-lg font-semibold text-gray-100">
                  {feature.title}
                </h3>
                <p className="leading-7 text-orange-200/65">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
