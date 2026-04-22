"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const element = target.closest<HTMLElement>("[data-analytics-event]");

      if (!element) {
        return;
      }

      trackEvent(element.dataset.analyticsEvent || "select_content", {
        event_category: element.dataset.analyticsCategory,
        event_label: element.dataset.analyticsLabel || element.textContent?.trim(),
        link_url:
          element instanceof HTMLAnchorElement ? element.href : element.dataset.analyticsUrl,
        page_path: window.location.pathname,
        page_location: window.location.href, // Captures query params like ?ref=outbound_linkedin
      });
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
