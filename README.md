# ozge-site

Personal website for **Özge Büyüktorun** — Senior QA & Test Automation Engineer (SDET).

A small monorepo:

```
ozge-site/
├─ apps/
│  ├─ web/                 # React + Vite frontend (bilingual TR/EN)
│  │  └─ src/
│  │     ├─ i18n/          # en.ts + tr.ts content, language context & toggle
│  │     ├─ components/    # Hero, About, Metrics, Skills, Experience, …
│  │     ├─ hooks/         # scroll-reveal (reduced-motion aware)
│  │     └─ lib/           # api client + console logger
│  └─ api/                 # Express + Prisma backend (contact + health)
│     ├─ prisma/           # schema.prisma + migrations
│     └─ src/
│        ├─ modules/       # contact, health
│        ├─ middleware/    # errorHandler (logs), notFound
│        ├─ logger.ts      # pino structured logging
│        └─ env.ts         # zod-validated config
├─ render.yaml             # optional Render blueprint for the API
└─ docker-compose.yml      # local Postgres (optional)
```

## How it’s built

The **site content lives in the frontend**, in two parallel dictionaries
(`apps/web/src/i18n/en.ts` and `tr.ts`). The language toggle in the top bar
switches between them instantly and remembers the choice. Because the content is
bundled, the site loads immediately and stays full even if the API is asleep.

The **API has one job**: receive the contact form, validate it, store it, and
log everything so issues are easy to trace. Routes: `GET /api/health`,
`POST /api/contact`.

## Run locally

```bash
# from the repo root
npm install

# API config
cp apps/api/.env.example apps/api/.env     # set DATABASE_URL to your Postgres
cd apps/api && npx prisma migrate deploy && npx prisma generate && cd ../..

# web config
cp apps/web/.env.example apps/web/.env      # VITE_API_URL=http://localhost:4000

# start both (web on :5173, api on :4000)
npm run dev
```

No seed step — there’s no content in the database anymore.

## Editing your content

Everything you’d want to change is in two files:

- `apps/web/src/i18n/en.ts` — English
- `apps/web/src/i18n/tr.ts` — Turkish

They share the same shape (TypeScript will warn you if one is missing a field),
so edit them in pairs. Change a job, a metric, the hero line — save, and it’s live.

## Deploy

| Piece | Service | Notes |
|-------|---------|-------|
| Frontend | Vercel | Set `VITE_API_URL` to your **Render API URL** (no trailing slash). |
| API | Render | Build: `npm install --include=dev && npx prisma generate && npm run build` · Start: `npx prisma migrate deploy && npm start` |
| Database | Neon | `DATABASE_URL` on the API service. Set `CORS_ORIGIN` to your Vercel URL. |

On the next deploy, Render runs `prisma migrate deploy`, which **automatically
applies the migration that drops the old content tables** — no manual database
step. Your stored contact messages are preserved.

## Logs

- **API:** structured logs (pino). In production they’re JSON — open the **Logs**
  tab on Render. Each request gets an `x-request-id` so you can trace one request
  end to end. Contact submissions, validation failures, rate-limits and errors
  are all logged.
- **Frontend:** the browser console, prefixed with `[ozge-site]`.

## Scripts

- Root: `dev`, `build`, `lint`, `typecheck`, `test`
- API (`apps/api`): `dev`, `build`, `start`, `test`, `prisma:migrate`, `prisma:deploy`, `db:reset`
- Web (`apps/web`): `dev`, `build`, `preview`, `typecheck`, `lint`
