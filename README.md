# Karthik Surya Portfolio

Personal portfolio site for **Karthik Surya** built with React + Vite + TypeScript, with custom SEO metadata and Brevo-powered contact mailer.

Live domain target: `https://nakarthiksurya.com`

## Tech Stack

- React 18 + TypeScript
- Vite 5
- React Router
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Helmet Async (SEO meta management)
- Brevo Transactional Email API (contact form emails)
- Vitest + Testing Library

## Pages / Routes

- `/` Home
- `/about` About
- `/experience` Experience
- `/projects` Projects
- `/contact` Contact
- `/resume` Resume Viewer
- `*` 404

Routes are defined in `src/App.tsx`.

## SEO Setup

SEO is configured with:

- `src/config/seo.ts` for global site metadata
- `src/components/Seo.tsx` for per-page tags (title, description, canonical, OG, Twitter, JSON-LD)
- `public/robots.txt`
- `public/sitemap.xml`
- `index.html` fallback meta tags

Each main page injects route-specific metadata using `<Seo />`.

## Contact Form / Mailer

Contact form is in `src/pages/Contact.tsx`.

It supports two sending modes:

1. React-only direct Brevo mode (no separate backend runtime)
2. Serverless API fallback mode (`api/contact.ts`)

### Email behavior

On each successful submission, two mails are sent:

- Owner notification email (to your inbox)
- User acknowledgment email (to submitter inbox)

Both use professional HTML templates.

## Environment Variables

Use `.env.example` as reference.

### React-only mode (client-side)

These are read by Vite and exposed to browser bundle:

- `VITE_BREVO_API_KEY`
- `VITE_CONTACT_TO_EMAIL`
- `VITE_CONTACT_FROM_EMAIL`
- `VITE_CONTACT_ENDPOINT` (optional, fallback endpoint path)

### Server-only mode (API route)

- `BREVO_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run tests:

```bash
npm run test
```

Run lint:

```bash
npm run lint
```

## Deployment Notes

- If you use React-only mode, emails work anywhere but API key is public in client bundle.
- For safer production, prefer server-side mode using `api/contact.ts` on a serverless platform.
- Ensure `CONTACT_FROM_EMAIL` / `VITE_CONTACT_FROM_EMAIL` is a verified sender in Brevo.

## Important Files

- `src/App.tsx` route map
- `src/config/seo.ts` global SEO config
- `src/components/Seo.tsx` SEO tag injector
- `src/pages/Contact.tsx` contact form + direct Brevo mail logic
- `api/contact.ts` serverless mail endpoint
- `public/robots.txt` crawler directives
- `public/sitemap.xml` sitemap
