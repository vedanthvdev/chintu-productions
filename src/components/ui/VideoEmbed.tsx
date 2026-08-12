"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

function thumbnailUrl(youtubeId: string, quality: "hqdefault" | "maxresdefault") {
  return `https://i.ytimg.com/vi/${youtubeId}/${quality}.jpg`;
}

type VideoEmbedProps = {
  youtubeId: string;
  title: string;
  className?: string;
  priority?: boolean;
};

export function VideoEmbed({
  youtubeId,
  title,
  className,
  priority,
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(
    thumbnailUrl(youtubeId, "hqdefault"),
  );

  useEffect(() => {
    const highRes = thumbnailUrl(youtubeId, "maxresdefault");
    const probe = new window.Image();
    probe.onload = () => {
      if (probe.naturalWidth > 480) setThumbnail(highRes);
    };
    probe.src = highRes;
    return () => {
      probe.onload = null;
    };
  }, [youtubeId]);

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden border border-hairline bg-surface",
        className,
      )}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <Image
            src={thumbnail}
            alt=""
            fill
            unoptimized
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            className="object-cover opacity-85 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-canvas/10 to-canvas/30" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-canvas/75 transition duration-300 group-hover:border-gold group-hover:bg-gold sm:h-20 sm:w-20">
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="ml-1 h-5 w-5 fill-gold transition duration-300 group-hover:fill-canvas sm:h-6 sm:w-6"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
