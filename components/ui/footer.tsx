import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-orange-200/65 transition hover:text-orange-500" href="/products">
                  BBQ Briquettes
                </a>
              </li>
              <li>
                <a className="text-orange-200/65 transition hover:text-orange-500" href="/products">
                  Lump Charcoal
                </a>
              </li>
              <li>
                <a className="text-orange-200/65 transition hover:text-orange-500" href="/products">
                  Binchotan
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-orange-200/65 transition hover:text-orange-500" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-orange-200/65 transition hover:text-orange-500" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Certifications</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-orange-200/65">ISO 9001</span>
              </li>
              <li>
                <span className="text-orange-200/65">SGS Certified</span>
              </li>
              <li>
                <span className="text-orange-200/65">FDA Approved</span>
              </li>
              <li>
                <span className="text-orange-200/65">HALAL Certified</span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-orange-200/65 transition hover:text-orange-500" href="mailto:expo@arterki.com">
                  expo@arterki.com
                </a>
              </li>
              <li>
                <a className="text-orange-200/65 transition hover:text-orange-500" href="https://wa.me/8618658820622" target="_blank" rel="noopener noreferrer">
                  +86 186 5882 0622
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-sm text-gray-500">
            © 2024 Bio Green Technology Sdn Bhd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
