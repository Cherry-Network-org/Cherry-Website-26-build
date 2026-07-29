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
    id: "ataraxia-20",
    category: "Flagship",
    title: "Ataraxia 2.0",
    date: "11 - 14 February 2026",
    time: "Full Day Campus Event",
    location: "Main Campus Grounds",
    blurb:
      "A flagship multi-day festival featuring music, performances, RedBull stage activations, digicam reels, and energetic crowd moments.",
  },
  {
    id: "robofest-25",
    category: "Robotics & Tech",
    title: "Robofest '25",
    date: "10 - 11 September 2025",
    time: "10:00 am - 6:00 pm",
    location: "Techverse Arena",
    blurb:
      "High-octane robotics competitions, team challenges, and tech showcases bringing together student builders and engineers.",
  },
  {
    id: "robofest-dj-25",
    category: "Concert",
    title: "Robofest DJ Night",
    date: "11 September 2025",
    time: "6:00 pm - 10:00 pm",
    location: "Main Stage",
    blurb:
      "An unforgettable DJ night wrapping up Robofest with massive music production, lights, and non-stop campus energy.",
  },
  {
    id: "elysian-25",
    category: "Creative Tech",
    title: "Elysian '25",
    date: "7 August 2025",
    time: "2:00 pm - 7:00 pm",
    location: "Auditorium & Innovation Hub",
    blurb:
      "Techverse creative showcase combining interactive media, design storytelling, and student talent under one roof.",
  },
  {
    id: "orphanage-drive-26",
    category: "Community Outreach",
    title: "Orphanage Drive '26",
    date: "12 April 2026",
    time: "9:00 am - 4:00 pm",
    location: "City Hope Home",
    blurb:
      "A heartfelt social outreach drive where Cherry+ members spent the day engaging, sharing joy, and supporting local children.",
  },
  {
    id: "the-last-commit-26",
    category: "Tenure Finale",
    title: "The Last Commit '26",
    date: "23 April 2026",
    time: "4:00 pm - 9:00 pm",
    location: "Campus Amphitheatre",
    blurb:
      "The grand finale of the tenure celebrating team accomplishments, project handovers, and memorable tenure highlights.",
  },
];

export const previousEventGroups: PreviousEventGroup[] = [
  {
    id: "techverse",
    title: "TECHVERSE",
    intro:
      "Techverse is our technical domain focused on software development, hackathons, building, and engineering innovation.",
    events: [
      {
        id: "the-last-commit-26",
        date: "23 April 2026",
        title: "The Last Commit",
        highlight: "'26",
        description:
          "The grand finale hackathon celebrating project builds, developer handovers, and technical milestones of the tenure.",
        imageSrc: "/images/events/The Last Commit.png",
        imageAlt: "The Last Commit '26 hackathon poster",
        galleryHref: "/gallery#the-last-commit",
      },
    ],
  },
  {
    id: "endeavour",
    title: "ENDEAVOUR",
    intro:
      "Endeavour turns ideas into lived experiences, organizing flagship cultural festivals, creative showcases, DJ nights, and community outreach drives.",
    events: [
      {
        id: "elysian-25",
        date: "7 August 2025",
        title: "Elysian",
        highlight: "'25",
        description:
          "Endeavour creative showcase combining interactive media, design storytelling, stage performances, and student talent under one roof.",
        imageSrc: "/images/events/Elysian.png",
        imageAlt: "Elysian '25 event poster",
        galleryHref: "/gallery#elysian-25",
      },
      {
        id: "robofest-25",
        date: "10 - 11 September 2025",
        title: "Robofest",
        highlight: "'25",
        description:
          "High-octane campus festival, team challenges, and interactive showcases bringing together student participants.",
        imageSrc: "/images/events/preface-poster.png",
        imageAlt: "Robofest '25 event poster",
        galleryHref: "/gallery#robofest",
      },
      {
        id: "robofest-dj-25",
        date: "11 September 2025",
        title: "Robofest DJ Night",
        highlight: "'25",
        description:
          "An unforgettable DJ night wrapping up Robofest with massive music production, lights, and non-stop campus energy.",
        imageSrc: "/images/events/preface-poster.png",
        imageAlt: "Robofest DJ Night poster",
        galleryHref: "/gallery#robofest",
      },
      {
        id: "ataraxia-20",
        date: "11 - 14 February 2026",
        title: "Ataraxia",
        highlight: "2.0",
        description:
          "A flagship multi-day festival featuring music, performances, RedBull stage activations, digicam reels, and energetic crowd moments.",
        imageSrc: "/images/events/Elysian.png",
        imageAlt: "Ataraxia 2.0 event poster",
        galleryHref: "/gallery#ataraxia-20",
      },
      {
        id: "orphanage-drive-26",
        date: "12 April 2026",
        title: "Orphanage Drive",
        highlight: "'26",
        description:
          "A heartfelt social outreach drive where Cherry+ members spent the day engaging, sharing joy, and supporting local children.",
        imageSrc: "/images/events/preface-poster.png",
        imageAlt: "Orphanage Drive '26 event poster",
        galleryHref: "/gallery#orphanage-visit",
      },
    ],
  },
];
