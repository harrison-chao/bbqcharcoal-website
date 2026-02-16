"use client";

import { useState } from "react";
import Image from "next/image";
import TestimonialImg01 from "@/public/images/生成高清照片.png";
import TestimonialImg02 from "@/public/images/生成高清照片 (3).png";
import TestimonialImg03 from "@/public/images/烧烤炉.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Ahmed Rashid",
    company: "Gulf Restaurant Supplies, UAE",
    content:
      "We have been sourcing BBQ charcoal from Bio Green Technology for 3 years. The quality is consistently excellent - low ash, high heat, and perfect for our restaurant needs. Highly recommended!",
  },
  {
    img: TestimonialImg02,
    name: "John Smith",
    company: "Premium BBQ Co., USA",
    content:
      "After switching to Bio Green Technology, we reduced our charcoal costs by 20% while improving quality. Their responsive service and reliable delivery make them our go-to supplier.",
  },
  {
    img: TestimonialImg03,
    name: "Takeshi Yamamoto",
    company: "Tokyo Grill House, Japan",
    content:
      "The Binchotan charcoal quality is outstanding. Our customers love the authentic Japanese grilling experience. Bio Green Technology understands the exact specifications we need.",
  },
];

export default function Testimonials() {
  const [categories, setCategories] = useState<number[]>([1]);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        <div className="mb-12 text-center md:mb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-orange-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-orange-200/50">
            <span className="inline-flex bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
              Testimonials
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.orange.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Trusted by Restaurants Worldwide
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="relative rounded-2xl bg-gray-900/50 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-4">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-200">{testimonial.name}</h3>
                  <p className="text-sm text-orange-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
