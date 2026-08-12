import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "weddings",
    number: "01",
    title: "Wedding photography & cinematography",
    description:
      "Full-day coverage that stays out of the way. Stills and film captured together, so you get the portraits and the moving story of the same moment.",
    includes: [
      "Preparations to reception",
      "Photography and video",
      "Highlight film",
      "Full edited gallery",
    ],
  },
  {
    id: "property-360",
    number: "02",
    title: "Property 360 tours",
    description:
      "Immersive walkthroughs for homes, venues and developments. Viewers look around the room from any device, no headset or app required.",
    includes: [
      "360 capture",
      "Guided walkthrough edit",
      "Venue and estate coverage",
      "Web-ready delivery",
    ],
  },
  {
    id: "drone",
    number: "03",
    title: "Drone & aerial cinematography",
    description:
      "Establishing shots and moving aerials that give a venue, property or landscape a real sense of place and scale.",
    includes: [
      "Aerial establishing shots",
      "Tracking and reveal moves",
      "Property and landscape",
      "Graded footage",
    ],
  },
  {
    id: "story-films",
    number: "04",
    title: "Cinematic & story films",
    description:
      "Travel pieces, milestones and brand adjacent story films with a documentary pulse, paced and graded like a short film.",
    includes: [
      "Concept and shot planning",
      "On-location filming",
      "Colour grade and sound",
      "Social cutdowns",
    ],
  },
];
