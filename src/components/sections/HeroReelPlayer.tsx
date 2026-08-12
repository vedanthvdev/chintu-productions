"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import type { HeroReel } from "@/types/content";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";
import { cn } from "@/lib/cn";

type Origin = { x: number; y: number };
const CENTER: Origin = { x: 50, y: 50 };
const noopSubscribe = () => () => {};

export function HeroReelPlayer({ reel }: { reel: HeroReel }) {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState<Origin>(CENTER);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  const close = useCallback(() => setOpen(false), []);

  const handleOpen = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({
        x: ((rect.left + rect.width / 2) / window.innerWidth) * 100,
        y: ((rect.top + rect.height / 2) / window.innerHeight) * 100,
      });
    }
    setOpen(true);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      void video.play().catch(() => {});
    }
  };

  useEffect(() => {
    if (!open) return;

    const video = videoRef.current;
    lockScroll();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      unlockScroll();
      if (video) {
        video.pause();
        video.muted = true;
      }
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleOpen}
        aria-label="Play showreel"
        className="group inline-flex items-center gap-3 border border-hairline bg-canvas/30 px-5 py-3 text-sm font-medium tracking-[0.06em] text-heading transition-colors duration-300 hover:border-gold hover:bg-canvas/60"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/70 transition-colors duration-300 group-hover:bg-gold">
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className="ml-0.5 h-3.5 w-3.5 fill-gold transition-colors duration-300 group-hover:fill-canvas"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        Play showreel
      </button>

      {mounted
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Showreel"
              onClick={close}
              style={{
                clipPath: open
                  ? `circle(150% at ${origin.x}% ${origin.y}%)`
                  : `circle(0% at ${origin.x}% ${origin.y}%)`,
                transition:
                  "clip-path 700ms cubic-bezier(0.77, 0, 0.175, 1)",
              }}
              className={cn(
                "fixed inset-0 z-[100] bg-black",
                open ? "pointer-events-auto" : "pointer-events-none",
              )}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-10">
                <video
                  ref={videoRef}
                  src={reel.fullSrc ?? reel.src}
                  poster={reel.poster}
                  preload="none"
                  playsInline
                  controls
                  onClick={(event) => event.stopPropagation()}
                  className="max-h-full max-w-full shadow-2xl"
                />
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close showreel"
                className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center border border-hairline bg-canvas/70 text-heading transition-colors duration-300 hover:border-gold hover:text-gold sm:top-8 sm:right-8"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
