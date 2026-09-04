import { featuredFilm, filmCategories, INSTAGRAM_URL, otherFilms } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { WatchIn360Link } from "@/components/ui/WatchIn360Link";

export function FilmsSection() {
  return (
    <section id="films" className="section relative">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected films"
          title="Watch the work"
          description="Every film below plays right here on the page. 360° films play flat in that player — open them on YouTube to drag or tilt and look around the room."
        />

        <div className="reveal mt-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-10">
          <VideoEmbed
            youtubeId={featuredFilm.youtubeId}
            title={featuredFilm.title}
            priority
          />
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="label text-gold">Featured film</span>
              {featuredFilm.is360 ? (
                <span className="border border-gold/40 px-2.5 py-1 text-[0.625rem] font-medium tracking-[0.18em] text-gold-strong uppercase">
                  360° on YouTube
                </span>
              ) : null}
            </div>
            <h3 className="display mt-4 text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">
              {featuredFilm.title}
            </h3>
            <p className="mt-4 text-body">{featuredFilm.description}</p>
            {featuredFilm.is360 ? (
              <WatchIn360Link
                youtubeId={featuredFilm.youtubeId}
                title={featuredFilm.title}
                variant="button"
                className="mt-6"
              />
            ) : null}
          </div>
        </div>

        {filmCategories.map((category) => {
          const items = otherFilms.filter((film) => film.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="mt-12 sm:mt-14">
              <h3 className="reveal label border-b border-hairline pb-4 text-body">
                {category}
              </h3>
              <div className="mt-6 grid gap-x-8 gap-y-10 sm:mt-8 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
                {items.map((film) => (
                  <article key={film.id} className="reveal">
                    <VideoEmbed youtubeId={film.youtubeId} title={film.title} />
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <h4 className="display text-xl leading-snug">
                        {film.title}
                      </h4>
                      {film.is360 ? (
                        <span className="mt-1 shrink-0 border border-gold/40 px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.16em] text-gold-strong uppercase">
                          360°
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm text-body">{film.description}</p>
                    {film.is360 ? (
                      <p className="mt-3 text-sm">
                        <WatchIn360Link
                          youtubeId={film.youtubeId}
                          title={film.title}
                        />
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          );
        })}

        <p className="reveal mt-10 text-sm text-subtle">
          New work is posted as it is finished.{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-strong underline underline-offset-4 transition-colors hover:text-heading"
          >
            Follow the studio on Instagram
          </a>
          .
        </p>
      </div>
    </section>
  );
}
