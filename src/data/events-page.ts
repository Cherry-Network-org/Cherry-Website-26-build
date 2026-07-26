export type FeaturedEvent = {
  id: string;
  category: string;
  title: string;
  date: string;
  time: string;
  location: string;
  blurb: string;
};

export type PreviousEvent = {
  id: string;
  date: string;
  title: string;
  highlight?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  galleryHref: string;
};

export type PreviousEventGroup = {
  id: string;
  title: string;
  intro: string;
  events: PreviousEvent[];
};

export const featuredEvents: FeaturedEvent[] = [
  {
    id: "ataraxia",
    category: "Featured",
    title: "Ataraxia",
    date: "23 January 2024",
    time: "5:00 pm - 6:00 pm",
    location: "Around Campus",
    blurb:
      "A flagship Cherry+ experience built around energy, spectacle, and the kind of crowd moments people keep talking about later.",
  },
  {
    id: "301-redirect",
    category: "Hackathon",
    title: "301 Redirect",
    date: "23 January 2024",
    time: "5:00 pm - 6:00 pm",
    location: "Around Campus",
    blurb:
      "Students moved from ideas to working builds fast, combining engineering, design, and pressure-tested teamwork.",
  },
  {
    id: "rain-dance",
    category: "Sponsored",
    title: "Rain Dance",
    date: "23 January 2024",
    time: "5:00 pm - 6:00 pm",
    location: "Around Campus",
    blurb:
      "A playful, full-campus celebration that turned atmosphere, music, and student energy into a shared memory.",
  },
  {
    id: "ux-masterclass",
    category: "Workshop",
    title: "UX MasterClass",
    date: "14 April 2024",
    time: "2:00 pm - 5:00 pm",
    location: "Innovation Lab",
    blurb:
      "A focused learning session on product thinking, interface craft, and how to turn research into stronger experiences.",
  },
  {
    id: "app-wars",
    category: "Build Sprint",
    title: "App Wars",
    date: "3 May 2024",
    time: "10:00 am - 4:00 pm",
    location: "Tech Studio",
    blurb:
      "Teams prototyped fast, defended their ideas, and sharpened both technical and presentation skills under one roof.",
  },
  {
    id: "talent-showcase",
    category: "Community",
    title: "Talent Showcase",
    date: "19 July 2024",
    time: "6:00 pm - 8:00 pm",
    location: "Student Center",
    blurb:
      "A stage for members to share what they make, perform, and care about with the wider Cherry+ community.",
  },
];

export const previousEventGroups: PreviousEventGroup[] = [
  {
    id: "techverse",
    title: "TECHVERSE",
    intro:
      "Techverse events blend learning, experimentation, and execution so members can sharpen craft while building with other curious students.",
    events: [
      {
        id: "elysian-23",
        date: "19 August 2023",
        title: "Elysian",
        highlight: "‘23",
        description:
          "A high-energy event that brought tech-driven storytelling and student creativity together through memorable interactive moments.",
        imageSrc: "/images/events/elysian-poster.png",
        imageAlt: "Elysian '23 event poster",
        galleryHref: "/gallery#elysian-23",
      },
      {
        id: "app-archives-preface",
        date: "1 March 2024",
        title: "App Archives",
        highlight: "Preface",
        description:
          "The kickoff event for App Archives set the tone with sessions on color theory, UI/UX, prototyping, and design curiosity.",
        imageSrc: "/images/events/preface-poster.png",
        imageAlt: "App Archives Preface event poster",
        galleryHref: "/gallery#app-archives",
      },
    ],
  },
  {
    id: "endeavour",
    title: "ENDEAVOUR",
    intro:
      "Endeavour turns ideas into lived experiences, giving members room to organize, coordinate, and elevate every detail behind the scenes.",
    events: [
      {
        id: "rain-dance-archive",
        date: "12 August 2023",
        title: "Rain Dance",
        description:
          "A crowd-first experience powered by planning, logistics, and execution that kept the energy high from start to finish.",
        imageSrc: "/images/events/elysian-poster.png",
        imageAlt: "Rain Dance event poster stand-in",
        galleryHref: "/gallery#ataraxia-23",
      },
      {
        id: "showcase-archive",
        date: "28 September 2022",
        title: "301 Redirect",
        description:
          "A bold student-facing production that showcased how Endeavour shapes atmosphere, pacing, and memorable audience experiences.",
        imageSrc: "/images/events/preface-poster.png",
        imageAlt: "301 Redirect event poster stand-in",
        galleryHref: "/gallery#301-redirect",
      },
    ],
  },
];
