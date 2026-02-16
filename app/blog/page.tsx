export const metadata = {
  title: "Blog | BBQ Charcoal Industry Insights | Bio Green Technology",
  description: "Expert insights on BBQ charcoal industry, quality standards, export guide, and trade tips. Learn about BBQ charcoal specifications, market trends, and sourcing best practices.",
  keywords: "bbq charcoal blog, charcoal industry news, charcoal export guide, BBQ charcoal quality, charcoal specifications",
};

import Link from "next/link";
import Image from "next/image";
import BlogImg1 from "@/public/images/生成高清照片.png";
import BlogImg2 from "@/public/images/briquettes-405030.jpg";
import BlogImg3 from "@/public/images/charcoal-7453437_1280.jpg";
import BlogImg4 from "@/public/images/charcoal-5184954_1280.png";

const blogPosts = [
  {
    slug: "how-to-choose-right-bbq-charcoal-restaurant",
    title: "How to Choose the Right BBQ Charcoal for Your Restaurant",
    excerpt: "A comprehensive guide for restaurant owners on selecting the perfect charcoal type for commercial grilling operations. Learn about heat output, burn time, and cost-effectiveness.",
    category: "Buying Guide",
    date: "February 15, 2026",
    readTime: "8 min read",
    image: BlogImg1,
  },
  {
    slug: "bbq-briquettes-vs-lump-charcoal-comparison",
    title: "BBQ Briquettes vs Lump Charcoal: A Complete Comparison",
    excerpt: "Understanding the key differences between BBQ briquettes and lump charcoal. Which is better for your restaurant? We break down heat, burn time, flavor, and cost.",
    category: "Product Comparison",
    date: "February 12, 2026",
    readTime: "6 min read",
    image: BlogImg2,
  },
  {
    slug: "understanding-charcoal-specifications",
    title: "Understanding Charcoal Specifications: Calorific Value, Ash Content & More",
    excerpt: "A technical guide to reading charcoal specifications sheets. Learn about calorific value, moisture content, ash percentage, and what they mean for your business.",
    category: "Technical Guide",
    date: "February 10, 2026",
    readTime: "10 min read",
    image: BlogImg3,
  },
  {
    slug: "shipping-bbq-charcoal-middle-east-guide",
    title: "Shipping BBQ Charcoal to Middle East: Complete Export Guide",
    excerpt: "Everything you need to know about exporting BBQ charcoal to UAE, Saudi Arabia, Kuwait, and other Middle Eastern markets. Regulations, packaging, and logistics.",
    category: "Export Guide",
    date: "February 8, 2026",
    readTime: "12 min read",
    image: BlogImg4,
  },
  {
    slug: "us-bbq-restaurant-market-trends-2026",
    title: "US BBQ Restaurant Market: Trends and Opportunities in 2026",
    excerpt: "Analysis of the American BBQ market growth, popular charcoal types, and opportunities for international charcoal suppliers.",
    category: "Market Analysis",
    date: "February 5, 2026",
    readTime: "7 min read",
    image: BlogImg1,
  },
  {
    slug: "charcoal-quality-control-manufacturing",
    title: "Charcoal Quality Control: From Factory to Your Doorstep",
    excerpt: "How professional charcoal manufacturers ensure consistent quality. Learn about SGS testing, quality checks, and certification standards.",
    category: "Quality",
    date: "February 3, 2026",
    readTime: "9 min read",
    image: BlogImg2,
  },
  {
    slug: "binchotan-japanese-white-charcoal-guide",
    title: "Binchotan: The Ultimate Guide to Japanese White Charcoal",
    excerpt: "Discover why Japanese Binchotan is the choice of professional chefs worldwide. History, production process, and why it commands premium pricing.",
    category: "Product Guide",
    date: "January 30, 2026",
    readTime: "8 min read",
    image: BlogImg4,
  },
  {
    slug: "reducing-charcoal-costs-wholesale",
    title: "How to Reduce Charcoal Costs Without Compromising Quality",
    excerpt: "Smart strategies for restaurant owners and distributors to optimize charcoal procurement. Bulk purchasing, supplier negotiation, and storage tips.",
    category: "Cost Management",
    date: "January 28, 2026",
    readTime: "6 min read",
    image: BlogImg3,
  },
  {
    slug: "sustainable-charcoal-production-malaysia",
    title: "Sustainable Charcoal Production: Malaysia's Green Manufacturing",
    excerpt: "How Malaysian manufacturers are leading the way in sustainable charcoal production. PEFC certification and eco-friendly practices.",
    category: "Sustainability",
    date: "January 25, 2026",
    readTime: "7 min read",
    image: BlogImg1,
  },
  {
    slug: "charcoal-supplier-evaluation-checklist",
    title: "Charcoal Supplier Evaluation Checklist for Buyers",
    excerpt: "The ultimate checklist for evaluating BBQ charcoal suppliers. What to look for, questions to ask, and red flags to avoid.",
    category: "Buying Guide",
    date: "January 22, 2026",
    readTime: "10 min read",
    image: BlogImg2,
  },
];

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.orange.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              BBQ Charcoal Blog
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-orange-200/65">
              Expert insights, industry trends, and trade tips for BBQ charcoal professionals
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={index} className="group flex flex-col overflow-hidden rounded-2xl bg-gray-900/50 transition hover:bg-gray-800/50">
                <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-orange-600 px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mb-3">
                    <h2 className="font-nacelle text-xl font-semibold text-gray-200 transition group-hover:text-orange-500">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mb-4 flex-1 text-gray-400">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 transition hover:text-orange-400"
                  >
                    Read More
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200">Subscribe to Our Newsletter</h2>
          <p className="mb-8 text-orange-200/65">
            Get the latest industry insights and charcoal sourcing tips delivered to your inbox.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-gray-200 focus:border-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
