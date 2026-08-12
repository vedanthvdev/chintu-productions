# Chintu Productions

Client-facing site for **Chintu Productions**, a **Vedanth Limited** studio — wedding photography and cinematography, property 360 tours, drone work and story films.

Stack: Next.js (App Router) · TypeScript · Tailwind CSS v4 · Lenis · GSAP ScrollTrigger.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy and every list on the page live in `src/content/`. No component changes are needed to update the site.

| File | Controls |
| --- | --- |
| `site.ts` | Brand, navigation, hero copy, contact block, pricing note, social links |
| `films.ts` | The portfolio — YouTube videos, categories, featured film |
| `services.ts` | The four service blocks and what each includes |
| `approach.ts` | Process steps |
| `faq.ts` | FAQ questions and answers |

### Adding a film

Append to the `films` array in `src/content/films.ts`:

```ts
{
  id: "unique-slug",
  youtubeId: "Hz1l-EbNhUg",
  title: "Film title",
  category: "Weddings & celebrations",
  description: "One or two lines about the piece.",
  is360: true,
}
```

The film appears automatically under its category heading. Set `featured: true` to promote a film to the large player at the top of the Films section and use its still as the hero backdrop.

`category` is a typed union, so a typo fails the build rather than silently dropping the film from the page. To add a new category, add it to `FilmCategory` in `src/types/content.ts` and to `filmCategories` in `films.ts` — the order of that array is the order the groups render in.

Videos are embedded with a click-to-play facade: only the YouTube thumbnail loads on page load, and the player is injected on click. This keeps the page fast even with a large portfolio.

### Hero showreel

The hero plays a muted, looping background video defined by `hero.reel` in `src/content/site.ts`. Set it to `null` to fall back to a still frame from the featured film.

The video only loads on screens 768px and wider, and never when the visitor has Data Saver on or prefers reduced motion — those visitors get the poster image instead, so nobody on mobile data downloads it. Keep the file small; re-encode a source clip with:

```bash
ffmpeg -ss <start> -t <seconds> -i source.mov -an \
  -vf "scale=1440:-2" -c:v libx264 -crf 31 -preset slow \
  -pix_fmt yuv420p -movflags +faststart public/reel/hero.mp4
```

Drop the audio (`-an`) — the video is muted anyway, so shipping an audio track is wasted bytes.

## Contributing

Master is protected. Never push to it directly. Work happens on a feature branch, then a pull request into master:

```bash
git checkout master
git pull
git checkout -b short-descriptive-name
# make changes
git add -A && git commit -m "Short imperative title"
git push -u origin HEAD
gh pr create --fill
```

Once merged, the deploy workflow publishes the site automatically.

## Deployment

The live site is [chintuproductions.dpdns.org](https://chintuproductions.dpdns.org), hosted on GitHub Pages.

Every push to `master` triggers `.github/workflows/deploy.yml`, which runs `next build` (static export) and publishes `out/` to Pages. Two things wire the custom domain:

- `public/CNAME` contains `chintuproductions.dpdns.org` and gets copied into every build, so GitHub Pages knows which host to serve.
- A `CNAME` record at dpdns.org points `chintuproductions` at `vedanthvdev.github.io`.

The `NEXT_PUBLIC_SITE_URL` env var (set on the deploy workflow, overridable locally via `.env.local`) drives canonical links, Open Graph tags, `robots.txt` and `sitemap.xml`. Without it the site falls back to `http://localhost:3000`.

The favicon (`src/app/icon.tsx`) and the social share card (`src/app/opengraph-image.tsx`) are generated at build time from the brand colours and `site.ts` — there are no image files to maintain. Structured data for search engines (studio details, services, FAQ) is built from the same content in `src/lib/structuredData.ts`.

## Architecture

```
src/
  app/            Layout, page composition, design tokens in globals.css
  content/        All editable site data (the only file you normally touch)
  types/          Shared content types
  components/
    layout/       Header, footer, Lenis + GSAP scroll wrapper
    sections/     One component per page section, fed from content/
    ui/           ButtonLink, SectionHeading, VideoEmbed
  lib/            Utilities
```

Design tokens (colours, fonts, spacing) are CSS custom properties in `src/app/globals.css`, exposed to Tailwind via `@theme inline`. Change a colour once there and it updates everywhere.

Scroll reveals use `gsap.from()` so content is never hidden by CSS — if JavaScript fails, the page still renders fully readable. Animations and smooth scrolling are skipped entirely when the visitor prefers reduced motion, in which case in-page links fall back to native anchor jumps with `scroll-margin-top` to clear the fixed header.

## Contact

Enquiries currently route to Instagram: [@chintuproductions](https://www.instagram.com/chintuproductions/). When a booking email exists, add it in `src/content/site.ts`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
