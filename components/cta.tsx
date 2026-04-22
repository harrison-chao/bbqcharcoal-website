export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-y border-gray-800 bg-gray-900/35 py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="pb-6 font-nacelle text-3xl font-semibold text-white md:text-4xl"
              data-aos="fade-up"
            >
              Ready to compare a real charcoal quote?
            </h2>
            <p className="mb-8 text-lg text-gray-300" data-aos="fade-up" data-aos-delay={200}>
              Send your target product, destination port, packing size, and monthly volume. We will help you narrow the specification and next steps before sampling or container booking.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-orange-600 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] transition hover:bg-orange-500 sm:mb-0 sm:w-auto"
                  href="/contact"
                  data-analytics-event="select_content"
                  data-analytics-category="cta"
                  data-analytics-label="Bottom get quote"
                >
                  <span className="relative inline-flex items-center">
                    Get a Quote
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full border border-gray-700 bg-gray-900/80 text-gray-300 transition hover:border-orange-400/60 hover:text-white sm:ml-4 sm:w-auto"
                  href="https://wa.me/8618658820622"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="generate_lead"
                  data-analytics-category="contact"
                  data-analytics-label="Bottom WhatsApp"
                >
                  <span className="relative inline-flex items-center">
                    WhatsApp Us
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
