"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import type { HeroReel } from "@/types/content";

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SIZE_QUERY = "(min-width: 768px)";

function subscribe(onChange: () => void) {
  const motion = window.matchMedia(MOTION_QUERY);
  const size = window.matchMedia(SIZE_QUERY);
  motion.addEventListener("change", onChange);
  size.addEventListener("change", onChange);
  return () => {
    motion.removeEventListener("change", onChange);
    size.removeEventListener("change", onChange);
  };
}

function shouldPlay() {
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;

  return (
    !window.matchMedia(MOTION_QUERY).matches &&
    window.matchMedia(SIZE_QUERY).matches &&
    !connection?.saveData
  );
}

export function HeroReelBackdrop({ reel }: { reel: HeroReel }) {
  const playVideo = useSyncExternalStore(subscribe, shouldPlay, () => false);

  if (playVideo) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src={reel.src}
        poster={reel.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
    );
  }

  if (!reel.poster) return null;

  return (
    <Image
      src={reel.poster}
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover opacity-60"
    />
  );
}
