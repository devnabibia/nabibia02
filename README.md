# Dennis Nangendo — portfolio

SvelteKit 3 (Svelte 5), TypeScript and Tailwind CSS 4, with a light/dark theme and scroll animations.

## Run it

    npm install
    npm run dev          # http://localhost:5173
    npm run build        # production build
    npm run preview      # serve the production build

Needs Node.js 20.19 or newer. If you ran an older copy of this project before, delete the
`node_modules` folder first so the right versions are installed.

SvelteKit 3 reads its settings from `vite.config.ts` (there is no `svelte.config.js`), and the
`#lib/...` imports are defined by the `imports` field in `package.json`.

## Edit your content (everything is in `src/lib`)

| File | What it holds |
|---|---|
| `data/about.ts` | the about paragraphs |
| `data/stack.ts` | skills, grouped |
| `data/experience.ts` | jobs and education (order on the page = order in the file) |
| `data/projects.ts` | projects (screenshots optional: put images in `static/projects/`) |
| `data/articles.ts` | articles; the Writing section appears when you add one |
| `constants/links.ts` | email, GitHub, X, project links |

Your résumé is `static/Dennis-Nangendo-Resume.pdf`. To update it, replace that file (keep the name) or change `CV_LINK`.
Links that start with `[` (like `[CV_LINK_PLACEHOLDER]`) are treated as not ready and are hidden.
Fill in `CV_LINK`, `LINKEDIN_LINK` and `SITE_URL` in `constants/links.ts` when you have them.
The hero headline is in `components/Hero.svelte`.

## Deploy

Netlify and Vercel both work: import the repository and keep the default settings (`adapter-auto`
picks the right adapter).
