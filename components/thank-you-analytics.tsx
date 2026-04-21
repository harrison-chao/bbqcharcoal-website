"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent, trackPageView } from "@/lib/analytics";

export default function ThankYouAnalytics() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const path = "/thank-you";
    trackPageView(path, "Thank You | BBQ Charcoal Export");

    if (searchParams.get("submitted") !== "1") {
      return;
    }

    const storedLead = window.sessionStorage.getItem("bbqLeadSubmission");

    if (!storedLead) {
      return;
    }

    const leadParams = JSON.parse(storedLead) as Record<string, string>;
    window.sessionStorage.removeItem("bbqLeadSubmission");

    trackEvent("generate_lead", {
      form_name: "contact_quote",
      lead_source: "thank_you_page",
      country: leadParams.country,
      product_interest: leadParams.product_interest,
      quantity: leadParams.quantity,
    });
  }, [searchParams]);

  return null;
}
