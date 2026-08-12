import type { ApproachStep } from "@/types/content";

export const approachSteps: ApproachStep[] = [
  {
    id: "conversation",
    number: "01",
    title: "Conversation",
    description:
      "You send the date, location and what matters most. We talk through how you want it to feel before anything is quoted.",
  },
  {
    id: "plan",
    number: "02",
    title: "Plan & quote",
    description:
      "Coverage, crew, drone and 360 are scoped to the project. You get one clear figure and a shot plan, agreed before the booking.",
  },
  {
    id: "filming",
    number: "03",
    title: "Filming day",
    description:
      "We work quietly around the day itself. No staged crowds, no long shot lists holding up your schedule.",
  },
  {
    id: "delivery",
    number: "04",
    title: "Edit & delivery",
    description:
      "Colour, pace and sound are treated like a short film, then delivered ready to watch, share and keep.",
  },
];
