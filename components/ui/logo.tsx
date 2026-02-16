import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="Bio Green Technology">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
        <path d="M20 8C20 8 12 14 12 20C12 26 20 32 20 32C20 32 28 26 28 20C28 14 20 8 20 8Z" fill="white" />
        <path d="M20 14C20 14 16 17 16 20C16 23 20 26 20 26C20 26 24 23 24 20C24 17 20 14 20 14Z" fill="#F97316" />
        <circle cx="20" cy="20" r="3" fill="white" />
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316" />
            <stop offset="1" stopColor="#EA580C" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-nacelle text-lg font-semibold text-white">
        Bio <span className="text-orange-500">Green</span>
      </span>
    </Link>
  );
}
