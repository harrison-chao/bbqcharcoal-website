"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: "Sending your inquiry..." }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const fieldClass =
  "w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50";

export default function ContactForm() {
  const router = useRouter();
  const [state, setState] = useState<SubmitState>({ status: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading", message: "Sending your inquiry..." });

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Unable to submit inquiry.");
      }

      event.currentTarget.reset();
      window.sessionStorage.setItem(
        "bbqLeadSubmission",
        JSON.stringify({
          country: formData.get("country")?.toString(),
          product_interest: formData.get("product")?.toString(),
          quantity: formData.get("quantity")?.toString(),
          submitted_at: new Date().toISOString(),
        }),
      );
      setState({
        status: "success",
        message: "Thanks. Your inquiry has been sent and we will respond within 24 hours.",
      });
      router.push("/thank-you?submitted=1");
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit inquiry. Please email us directly.",
      });
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="company">
          Company Name *
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className={fieldClass}
          placeholder="Your company name"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="country">
          Country *
        </label>
        <select id="country" name="country" required className={fieldClass}>
          <option value="">Select country</option>
          <option value="UAE">UAE</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Qatar">Qatar</option>
          <option value="Bahrain">Bahrain</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="product">
          Product Interest *
        </label>
        <select id="product" name="product" required className={fieldClass}>
          <option value="">Select product</option>
          <option value="BBQ Briquettes">BBQ Briquettes</option>
          <option value="Lump Charcoal">Lump Charcoal</option>
          <option value="Binchotan">Binchotan</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="quantity">
          Quantity *
        </label>
        <select id="quantity" name="quantity" required className={fieldClass}>
          <option value="">Select quantity</option>
          <option value="1-5 tons">1-5 tons (Trial)</option>
          <option value="5-20 tons">5-20 tons</option>
          <option value="20ft Container">20ft Container (20-25 tons)</option>
          <option value="40ft Container">40ft Container (25-28 tons)</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Your requirements, questions, or specific needs..."
        />
      </div>

      {state.status !== "idle" ? (
        <p
          className={`rounded-lg border px-4 py-3 text-sm ${
            state.status === "success"
              ? "border-green-500/30 bg-green-500/10 text-green-200"
              : state.status === "error"
                ? "border-red-500/30 bg-red-500/10 text-red-200"
                : "border-orange-500/30 bg-orange-500/10 text-orange-200"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state.status === "loading"}
        className="w-full rounded-lg bg-orange-600 py-3 font-semibold text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.status === "loading" ? "Sending..." : "Submit Inquiry"}
      </button>

      <p className="text-center text-xs text-gray-500">
        Or email directly:{" "}
        <a href="mailto:expo@arterki.com" className="text-orange-500">
          expo@arterki.com
        </a>
      </p>
    </form>
  );
}
