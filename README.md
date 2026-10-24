# marinadurmishov.com

Portfolio site of Marina Durmishov — web developer & QA engineer.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS. Deployed on Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open http://localhost:3000.

## Where things live

| Path | What |
| --- | --- |
| `src/app/` | One folder per page: `/`, `/work`, `/services`, `/about`, `/contact` |
| `src/app/contact/actions.ts` | Server Action that emails contact form messages via Resend |
| `src/data/projects.ts` | Project list shown on `/work` — add a project here |
| `src/data/site.ts` | Name, email, social links, footer year |
| `src/components/` | Header, mobile menu, footer, project card |
| `src/components/Page.tsx`, `Bento.tsx`, `PageHeader.tsx` | Page shell, tile grid and page title shared by every page |
| `src/components/Arrow.tsx`, `CtaTile.tsx` | Round arrow badge and the orange "let's talk" tile |
| `src/data/testimonials.ts` | Recommendation quotes (word for word from LinkedIn) |
| `src/lib/bug-hunt.ts` | The hidden-bug game; progress is saved in `localStorage` |
| `src/app/globals.css` | Color palette, fonts and shared tile/pill styles |
| `public/projects/` | Project screenshots |

## Environment variables

| Name | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | From the Resend dashboard |
| `CONTACT_TO_EMAIL` | yes | Where form messages are sent |
| `CONTACT_FROM_EMAIL` | no | Sender address; needs a domain verified in Resend. Defaults to Resend's test sender |

Set the same variables in Vercel → Project → Settings → Environment Variables.
