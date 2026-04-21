# Landing Pages

## First Batch Routes

Prioritize:

- `/lp/bulk-bbq-briquettes`
- `/lp/malaysia-charcoal-supplier`
- `/lp/private-label-bbq-charcoal`
- `/lp/restaurant-bbq-charcoal`
- `/lp/middle-east-charcoal-export`

## Page Structure

Every landing page should include:

1. Hero: intent-matched H1, short proof-backed subcopy, primary CTA.
2. Proof bar: 800 MT/month, 12 machines, 72 kilns, Control Union inspected, PEFC CoC.
3. Buyer problem: instability, inconsistent batches, unclear documents, packaging mismatch.
4. Product/spec section: focus on BBQ briquettes; mark other categories as sourcing options.
5. Factory evidence: link and summarize `/factory-inspection`.
6. Quote form: collect company, email, country, product, quantity, destination port, packaging requirement, message.
7. FAQ: 5-8 buyer questions.
8. Final CTA: request quote, request factory documents, or start supplier evaluation.

## Copy Rules

- H1 must name the buyer intent; avoid vague brand slogans.
- Above the fold must answer: what, for whom, why credible, next step.
- Use evidence and numbers instead of “best”, “world-class”, or broad claims.
- Keep one primary conversion goal per page.
- Ensure ad keywords, H1, meta title, and CTA match.

## CTA Examples

- Request Export Quote
- Request Factory Documents
- Start Supplier Evaluation
- Discuss OEM Packaging
- Get Restaurant Supply Quote

## Tracking

Use `data-analytics-event` on CTA links:

- `select_content` for navigation/CTA clicks.
- `generate_lead` only for contact-intent actions such as WhatsApp/email or successful form submission.

All form-success flows should land on `/thank-you?submitted=1`.
