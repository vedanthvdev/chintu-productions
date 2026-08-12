export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
};

export type FilmCategory = "360° wedding films" | "Wedding films";

export type Film = {
  id: string;
  youtubeId: string;
  title: string;
  category: FilmCategory;
  description: string;
  is360?: boolean;
  featured?: boolean;
};

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  includes: string[];
};

export type ApproachStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type HeroReel = {
  src: string;
  poster?: string;
  fullSrc?: string;
};

export type SiteContent = {
  siteUrl: string;
  brand: {
    name: string;
    company: string;
    tagline: string;
    description: string;
  };
  nav: NavItem[];
  social: SocialLink[];
  contact: {
    heading: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    email: string;
    note: string;
  };
  hero: {
    eyebrow?: string;
    titleLines: string[];
    subtitle: string;
    primaryCta: NavItem;
    secondaryCta: NavItem;
    meta: string[];
    reel: HeroReel | null;
  };
  pricingNote: string;
};
