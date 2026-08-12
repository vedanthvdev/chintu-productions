import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;
let lockCount = 0;

export function registerLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function lockScroll() {
  lockCount += 1;
  if (lockCount > 1) return;
  lenisInstance?.stop();
  document.documentElement.style.overflow = "hidden";
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0) return;
  lenisInstance?.start();
  document.documentElement.style.overflow = "";
}
