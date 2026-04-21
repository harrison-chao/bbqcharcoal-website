# Analytics And Conversion

## Current Conversion Logic

- Contact form submits to `/api/contact`.
- Only successful email send should route to `/thank-you?submitted=1`.
- `/thank-you` is a conversion-only page.
- `/thank-you` must be `noindex,nofollow`.
- `/thank-you` must not be included in sitemap.

## GA4 Events

Measurement ID: `G-L2JZ27GJGD`

Use:

- `generate_lead`: successful form, WhatsApp click, email click.
- `select_content`: CTA and navigation clicks.
- `page_view`: explicit thank-you page view if needed.

Recommended `generate_lead` params:

```yaml
form_name: contact_quote
lead_source: thank_you_page
country:
product_interest:
quantity:
page_path:
campaign:
```

## GA4 Admin Tasks

- Mark `generate_lead` as a Key event.
- Build a funnel: landing page view -> contact page/form view -> successful submission -> `/thank-you`.
- Segment by source/medium/campaign, country, product_interest, quantity, and landing page.

## UTM Convention

Example:

```text
utm_source=google
utm_medium=cpc
utm_campaign=bbq_briquettes_importers
utm_content=capacity_inspection
utm_term=bulk_bbq_briquettes_supplier
```

Use unique `utm_campaign` or `utm_content` per landing page/ad angle.

## Validation

Check after changes:

- `/contact` returns 200.
- `/thank-you` returns 200 and has `noindex,nofollow`.
- `/sitemap.xml` does not include `/thank-you`.
- GA script appears in HTML.
- CTA elements include expected `data-analytics-*` attributes.
- Successful form path reaches `/thank-you?submitted=1`.
