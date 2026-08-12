import type { SiteContent } from "@/types/content";
import { YOUTUBE_CHANNEL_URL } from "./films";

export const INSTAGRAM_URL = "https://www.instagram.com/chintuproductions/";
export const CONTACT_EMAIL = "vedanthlimited@gmail.com";

export const site: SiteContent = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  brand: {
    name: "Chintu Productions",
    company: "Vedanth Limited",
    tagline: "Wedding films, property 360 and drone cinematography",
    description:
      "Chintu Productions is a films studio covering weddings, property 360 tours, drone sequences and personal story films. Made to look back on.",
  },
  nav: [
    { label: "Films", href: "#films" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    {
      label: "Instagram",
      handle: "@chintuproductions",
      href: INSTAGRAM_URL,
    },
    {
      label: "YouTube",
      handle: "TheChintuVedanthShow",
      href: YOUTUBE_CHANNEL_URL,
    },
  ],
  contact: {
    heading: "Tell us about your day",
    body: "Send the date, the location and the kind of film you have in mind. Wedding, property 360, drone or a personal story piece. You will get a straight answer on availability and a quote built around the project.",
    primaryLabel: "Message on Instagram",
    primaryHref: INSTAGRAM_URL,
    email: CONTACT_EMAIL,
    note: "Instagram is the fastest way to reach us. Email works too if you prefer.",
  },
  hero: {
    titleLines: ["Stories worth", "returning to."],
    subtitle:
      "Wedding photography and cinematography, immersive property 360 tours, drone sequences and personal story films. Shot and edited so the day still feels like the day, years later.",
    primaryCta: { label: "Watch a film", href: "#films" },
    secondaryCta: { label: "Check your date", href: INSTAGRAM_URL },
    meta: ["Weddings", "Property 360", "Drone", "Story films"],
    reel: {
      src: "/reel/hero.mp4",
      fullSrc: "/reel/showreel.mp4",
      poster: "/reel/hero-poster.jpg",
    },
  },
  pricingNote:
    "Pricing is project based. Coverage, crew, drone and 360 are scoped around what you actually need, then quoted as one clear figure before anything is booked.",
};
