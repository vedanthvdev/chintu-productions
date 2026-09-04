import type { Film, FilmCategory } from "@/types/content";

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@chintuvedanth";

export const filmCategories: readonly FilmCategory[] = [
  "360° wedding films",
  "Wedding films",
];

export const films: Film[] = [
  {
    id: "hassan-360",
    youtubeId: "Aqjm5IZJsZc",
    title: "Hassan: engagement and dance in 360°",
    category: "360° wedding films",
    description:
      "A full celebration filmed in 360°. Play it here, then open it on YouTube to stand in the middle of the room and look wherever you want — the dance floor, the family, the ceremony.",
    is360: true,
    featured: true,
  },
  {
    id: "prajwal-haldi-360",
    youtubeId: "3kn-iGltCgc",
    title: "Prajwal's Haldi in 360°",
    category: "360° wedding films",
    description:
      "Colour, noise and family, captured so nothing happens off-camera.",
    is360: true,
  },
  {
    id: "prajwal-engagement-360",
    youtubeId: "XGXMztGdo9M",
    title: "Prajwal's engagement in 360°",
    category: "360° wedding films",
    description: "The engagement ceremony, filmed immersively end to end.",
    is360: true,
  },
  {
    id: "chaturya-mangalyam-360",
    youtubeId: "Hz1l-EbNhUg",
    title: "Chaturya's Mangalyam in 360°",
    category: "360° wedding films",
    description:
      "A traditional South Indian wedding in full 360°. Open it on YouTube to look around the mandap as the ceremony happens.",
    is360: true,
  },
  {
    id: "engagement-film",
    youtubeId: "Gr-25hyO5vk",
    title: "An engagement film",
    category: "Wedding films",
    description:
      "A short, conventionally shot engagement piece built around the people in the room.",
  },
];

export const featuredFilm = films.find((film) => film.featured) ?? films[0];

export const otherFilms = films.filter((film) => film !== featuredFilm);
