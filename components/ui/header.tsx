"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-lg border border-gray-800 bg-gray-950/90 px-3 shadow-lg shadow-black/20 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          <ul className="flex flex-1 items-center justify-end gap-3 sm:gap-5">
            <li>
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm font-medium text-gray-300 hover:text-white">
                Products
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-white">
                Blog
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-gradient-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
