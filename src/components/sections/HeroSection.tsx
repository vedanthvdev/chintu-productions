import Image from "next/image";
import { featuredFilm, site } from "@/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroReelBackdrop } from "./HeroReelBackdrop";
import { HeroReelPlayer } from "./HeroReelPlayer";

function HeroBackdrop() {
  const { reel } = site.hero;

  if (reel) return <HeroReelBackdrop reel={reel} />;

  return (
    <Image
      src={`https://i.ytimg.com/vi/${featuredFilm.youtubeId}/hqdefault.jpg`}
      alt=""
      fill
      unoptimized
      priority
      sizes="100vw"
      className="scale-105 object-cover opacity-40"
    />
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20"
    >
      <div className="absolute inset-0">
        <HeroBackdrop />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-canvas/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-transparent to-transparent" />
      </div>

      <div className="shell relative">
        {site.hero.eyebrow ? (
          <p className="label">{site.hero.eyebrow}</p>
        ) : null}
        <h1 className="display text-[clamp(2.5rem,7.5vw,5.75rem)] leading-[1.02]">
          {site.hero.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-body sm:mt-6 sm:text-lg">
          {site.hero.subtitle}
        </p>

        <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
          <ButtonLink href={site.hero.primaryCta.href}>
            {site.hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={site.hero.secondaryCta.href} variant="ghost">
            {site.hero.secondaryCta.label}
          </ButtonLink>
          {site.hero.reel ? <HeroReelPlayer reel={site.hero.reel} /> : null}
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-4 sm:mt-12 sm:gap-x-8 sm:pt-5">
          {site.hero.meta.map((item) => (
            <li key={item} className="label text-body">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
