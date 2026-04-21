# Implementation Checklist

## Repo Patterns

- Next.js App Router.
- Main pages live in `app/`.
- Reusable components live in `components/`.
- Shared SEO constants live in `lib/seo.ts`.
- GA helpers live in `lib/analytics.ts`.
- Contact form lives in `components/contact-form.tsx`.
- Contact API lives in `app/api/contact/route.ts`.
- Dynamic sitemap lives in `app/sitemap.ts`.

## Before Editing

- Run `git status --short`.
- Read nearby files before changing patterns.
- Preserve unrelated user changes.
- Use existing design language and components.

## Code Change Requirements

- Use focused edits.
- Add canonical metadata for new indexable pages.
- Add structured data when useful for SEO/GEO.
- Keep `/thank-you` noindexed and out of sitemap.
- Add GA events for important CTAs.
- Avoid overclaiming product evidence.

## Validation

For code changes:

```bash
npm run build
```

For deployed changes:

```bash
curl -I https://www.bbqcharcoalexport.com/<path>
curl -s https://www.bbqcharcoalexport.com/sitemap.xml
curl -s https://www.bbqcharcoalexport.com/robots.txt
```

Check:

- target page returns 200
- sitemap includes indexable content pages
- sitemap excludes thank-you
- robots points to `https://www.bbqcharcoalexport.com/sitemap.xml`
- key metadata/canonical exists
- GA tags/events exist where expected

## Deployment

When the user asks to execute and the change is production-ready:

```bash
vercel deploy --prod --scope harrison-chaos-projects --yes
```

After deployment:

- verify production URL
- commit changes
- push `main`
- report build/deploy URL and commit hash
