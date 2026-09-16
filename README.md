# Akhila Amudala Ganesh — Healthcare Informatics Portfolio

A personal portfolio connecting clinical knowledge, healthcare informatics, clinical research, and data analytics. The original visual identity uses an A/stethoscope monogram, an abstract ECG-to-chart illustration, a restrained navy/teal palette, and light/dark themes.

## Technology

Next.js App Router, React, strict TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Exact compatible package versions are pinned in package.json and package-lock.json. System fonts avoid remote font requests.

## Installation and development

Use Node.js 22 LTS or newer compatible Node.js.

```sh
npm ci
npm run dev
```

The development server normally opens at http://localhost:3000.

## Production and quality checks

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The build generates a static site in `out/`. The included Node server serves the production export at http://127.0.0.1:3000. It binds only to this computer. No backend or environment variables are needed.

The Next.js configuration uses the TypeScript API and a single threaded build worker for compatibility with this Windows environment. The webpack build is explicit and reproducible.

## Structure

- `app/`: page composition, site metadata, theme initialization, responsive styles.
- `components/`: logo, navbar, accessible theme toggle, hero, healthcare/data visual, scrolling skills, section reveals, portfolio sections, social links.
- `data/portfolio.ts`: personal details, social URLs, experience, skills, education, certifications.
- `public/resume/Akhila-Amudala-Ganesh-Resume.pdf`: the actual supplied resume, copied without alterations.
- `scripts/serve.mjs`: lightweight local production preview.
- `.openai/hosting.json`: existing Sites registration; independent of Vercel deployment.

## Resume

All download buttons target `/resume/Akhila-Amudala-Ganesh-Resume.pdf`. To update the resume, replace that exact file with the real updated PDF and rebuild. No generated substitute is used. The supplied document is unchanged, including its original contact information; the website uses the newer public email requested by Akhila.

## Update personal information and links

Edit `profile` in `data/portfolio.ts`:

- Email: akhilarathnadeep@gmail.com
- Location: Plano, Texas
- GitHub: https://github.com/AGAkhila12345
- LinkedIn: https://www.linkedin.com/in/dr-akhila-24396ag/ — taken directly from the supplied resume hyperlink.

All social and email actions use this configuration. Email uses mailto only. No email account password, secret, token, or API key is needed.

Professional experience, skills, education, and certifications are also centralized. Update dates and content there. No invented achievements, credential details, outcomes, or analytics demonstrations are displayed.

## Themes and motion

The initial theme follows the system unless the visitor has selected a theme. The toggle stores only the theme preference locally under `akhila-theme`. It remains usable if browser storage is unavailable.

Reduced-motion preferences disable decorative animation, smooth scrolling, and motion effects. The scrolling skills strip has an explicit pause/play control and also pauses on hover or keyboard focus. With reduced motion it becomes a manually scrollable strip.

## Accessibility

Semantic landmarks, a skip link, visible focus indicators, native link navigation, descriptive social labels, theme-toggle labels, a mobile navigation disclosure with Escape support, and responsive layouts are included. Decorative visuals are labeled or hidden appropriately. No phone number is shown in webpage content.

## Deploy to Vercel

1. Push this directory to your Git repository.
2. Import it in Vercel and select this directory as the root if nested.
3. Use the Next.js framework preset and `npm run build`.
4. No environment variables are required.
5. Deploy, then review the actual resume download and contact links.
6. Add your domain when available. Configure canonical URLs or a sitemap only after the real domain is known.

The same `out/` export can be hosted on any compatible static host. Metadata includes title, description, Open Graph, Twitter summary, robots, and a custom favicon. No domain or social image URL is fabricated.

## Security

This is a static portfolio with no account login, contact-form backend, analytics tracker, authentication, or secret-dependent integration. Keep local environment files and dependencies out of Git; the included .gitignore excludes them. Never add credentials to source, PDFs, or documentation.

