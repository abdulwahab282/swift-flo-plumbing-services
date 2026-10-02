# Swift Flo Plumbing Services

Marketing site for Swift Flo Plumbing Services in Smyrna, Tennessee.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch

Edit `src/data/site.ts` when real contact details are available:

- `phone`
- `email`
- `NEXT_PUBLIC_SITE_URL` for the live domain (used by metadata, the sitemap, and local business data)

Edit these files as the business confirms more information:

- `src/data/services.ts` — add a service only after it is actually offered
- `src/data/service-areas.ts` — add a city only after it is served
- `src/data/testimonials.ts` — replace placeholders with genuine reviews

The contact form validates requests. It does not email the business until a phone number, email, or form delivery service is connected.
