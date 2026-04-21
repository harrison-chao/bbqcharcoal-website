# Agent Team Workflow

## Integrated Team

Use this team when designing proactive operations:

1. Market Radar Agent: finds markets, competitors, buyer segments, and intent signals.
2. Lead Discovery Agent: finds public buyer leads and records source evidence.
3. Lead Qualification Agent: scores fit and routes leads to angles/pages.
4. Outreach Strategist Agent: drafts email, WhatsApp, LinkedIn, and follow-up sequences.
5. Landing Page Dev Agent: builds intent-matched pages and tracking.
6. SEO/GEO Content Agent: creates briefs and articles.
7. Trade Docs Agent: drafts quotes, PI/CI/packing-list style documents for human review.
8. CRM Memory Agent: keeps lead state, buyer questions, and follow-up tasks.
9. Analytics Loop Agent: reads performance and creates next actions.
10. DevOps & QA Agent: verifies build, deploy, SEO basics, forms, and analytics.

## Weekly Growth Loop

1. Analytics Loop Agent reports traffic, leads, campaigns, queries, and weak pages.
2. CRM Memory Agent reports buyer questions and lead quality.
3. Market Radar Agent identifies country and buyer opportunities.
4. Lead Discovery Agent creates candidate lead list.
5. Lead Qualification Agent scores and prioritizes.
6. Growth owner picks weekly priorities.
7. Landing Page Dev Agent builds or improves pages.
8. SEO/GEO Content Agent writes or refreshes content.
9. Outreach Strategist Agent prepares sequences.
10. Trade Docs Agent supports replies and document drafts.
11. DevOps & QA Agent validates and deploys.
12. Data returns to Analytics Loop Agent.

## Handoff Formats

### Market Opportunity

```yaml
market:
country:
buyer_type:
primary_keyword:
secondary_keywords:
buyer_pain:
recommended_offer:
recommended_landing_page:
required_evidence:
next_action:
```

### Qualified Lead

```yaml
company_name:
website:
country:
buyer_type:
product_fit:
priority: A/B/C
evidence_url:
contact_email:
whatsapp_or_phone:
recommended_angle:
recommended_landing_page:
next_action:
confidence:
```

### Weekly Report

```yaml
period:
traffic_summary:
lead_summary:
best_pages:
weak_pages:
best_queries:
new_opportunities:
lead_quality_notes:
recommended_next_actions:
owner:
deadline:
```

## Permission Boundaries

Agents may draft, research, score, and propose. Require human approval before:

- sending official quotes
- committing price, lead time, certification, or production schedule
- bulk sending cold outreach
- changing ad budget
- deleting data
- publishing major positioning changes
