---
name: bbq-charcoal-growth
description: Specialized workflow for BBQ Charcoal Export website growth and proactive development. Use when working on this project’s SEO/GEO strategy, landing pages, high-standard blog articles, GA4 lead tracking, thank-you conversion flow, buyer-development agent teams, trade-document support, marketing handoff docs, or iterative growth loops for bbqcharcoalexport.com.
---

# BBQ Charcoal Growth

## Core Rule

Optimize for verified B2B export trust and measurable inquiry generation. Every page, article, landing page, automation, or agent workflow must connect to at least one of:

- documented factory credibility
- buyer intent
- inquiry conversion
- lead qualification
- sales follow-up
- measurable SEO/GEO improvement

## Project Context

Use these constants unless the repo shows newer values:

- Site: `https://www.bbqcharcoalexport.com`
- Product focus: factory-backed BBQ briquette charcoal
- Sourcing options: lump charcoal and binchotan, only when confirmed by specs/samples
- Contact recipient: `expo@arterki.com`
- GA4 measurement ID: `G-L2JZ27GJGD`
- Valid lead path: `/contact` form success -> `/thank-you?submitted=1`
- Key conversion event: `generate_lead`

Load [business-context.md](references/business-context.md) when writing claims, trust sections, FAQs, or sales copy.

## Decision Tree

1. **Landing page or ads work**: load [landing-pages.md](references/landing-pages.md). Build one intent-matched page, not a generic homepage clone.
2. **Blog / SEO / GEO work**: load [content-standards.md](references/content-standards.md). Use answer-first structure, evidence, FAQ, and internal links.
3. **Agent team / operations design**: load [agent-team.md](references/agent-team.md). Preserve loop ownership and handoff formats.
4. **Analytics / forms / conversion work**: load [analytics-and-conversion.md](references/analytics-and-conversion.md). Keep thank-you tracking clean and noindexed.
5. **Sales assets / trade documents**: load [trade-docs.md](references/trade-docs.md). Draft only; require human approval for price, lead time, and official commitments.
6. **Implementation in repo**: load [implementation-checklist.md](references/implementation-checklist.md). Build, verify, deploy, and summarize.

## Non-Negotiable Fact Boundaries

Say only what the current evidence supports:

- OK: Control Union (Malaysia) inspected the factory on 2025-10-16.
- OK: The report documents 800 MT/month briquette charcoal capacity.
- OK: The report documents 12 briquette machines, 72 carbonization kilns, 26,000 sq ft storage, 82,146 sq ft factory building, and an 80 MT weighbridge.
- OK: Quality evidence includes moisture testing, weight/density checks, daily records, and SGS testing several times per year.
- Do not claim lump charcoal or binchotan share the same inspected 800 MT/month production line.
- Do not claim ISO/FDA/HALAL or other certifications unless current certificates are provided.
- Do not present indicative prices as fixed offers.

## Output Standards

For any growth task, produce concrete artifacts:

- landing page: route, H1, sections, CTA, FAQ, tracking events, and validation checklist
- article: title, slug, meta, outline, full draft or brief, FAQ, schema recommendation, internal links
- agent workflow: role, input, output, quality gate, owner handoff, loop timing
- analytics task: event name, trigger, parameter set, GA4 interpretation, validation path
- code change: build result, deployed URL if deployed, and commit hash if committed

## Quality Gates

Before finalizing:

- Verify the work maps to buyer intent and product evidence.
- Preserve the thank-you page as conversion-only; do not add it to sitemap.
- Ensure CTAs point to `/contact` or a dedicated landing page.
- Include `/factory-inspection` as a trust link where buyer trust matters.
- Run `npm run build` for code changes.
- For deployed changes, verify the relevant production URL returns `200`.

## References

- [business-context.md](references/business-context.md): positioning, factory facts, proof boundaries.
- [landing-pages.md](references/landing-pages.md): ad landing page strategy and structure.
- [content-standards.md](references/content-standards.md): strict SEO/GEO article requirements.
- [agent-team.md](references/agent-team.md): integrated marketing and proactive development agent team.
- [analytics-and-conversion.md](references/analytics-and-conversion.md): GA4, forms, thank-you flow, UTM rules.
- [trade-docs.md](references/trade-docs.md): sales and trade-document workflow.
- [implementation-checklist.md](references/implementation-checklist.md): repo execution and validation.
