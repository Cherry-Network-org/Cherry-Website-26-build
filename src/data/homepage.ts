import { endeavourDomains, techverseDomains } from "@/data/domains";
export const heroMarqueeItems = [
  "upcoming events",
  "robofest '25",
  "ataraxia 2.0",
  "the last commit '26",
];

export const visionMissionCards = [
  {
    title: "Our Vision",
    description:
      "We want Cherry+ Network to feel like the place where curious students find their people, chase bigger ideas, and turn college life into something unforgettable.",
    accent: "vision" as const,
  },
  {
    title: "Our Mission",
    description:
      "We build that experience through events, domains, and collaborative projects that help students grow in technology, leadership, creativity, and confidence.",
    accent: "mission" as const,
  },
];

export const journeyMilestones = [
  {
    year: "2015",
    title: "Founded",
    description:
      "Started with 2 passionate founders and a simple goal: make campus life more fun, creative, and connected.",
  },
  {
    year: "2017",
    title: "Expansion",
    description:
      "Grew into a student-led network with larger events, stronger collaborations, and more room for members to lead.",
  },
  {
    year: "2019",
    title: "Recognised",
    description:
      "Recognised for building memorable experiences and giving students a space to learn by doing.",
  },
];

export const pillarSections = [
  {
    id: "techverse",
    title: "TECHVERSE",
    posterSrc: "/images/universes/techverse-card.png",
    posterAlt: "Techverse comic poster",
    accent: "techverse" as const,
    description:
      "Techverse is where our builders, designers, and problem-solvers sharpen their craft together. Members collaborate on projects, workshops, and experiments that turn curiosity into practical skill.",
    tags: techverseDomains.map((domain) => domain.title),
    primaryHref: "https://recruitments.cherrynetwork.in/",
    primaryLabel: "Join Techverse",
    secondaryHref: "/domains/techverse",
    secondaryLabel: "Learn More",
  },
  {
    id: "endeavour",
    title: "ENDEAVOUR",
    posterSrc: "/images/universes/endeavour-card.png",
    posterAlt: "Endeavour comic poster",
    accent: "endeavour" as const,
    description:
      "Endeavour is the engine behind execution, storytelling, and community energy. It is where members learn to lead events, shape experiences, and bring ambitious ideas to life.",
    tags: endeavourDomains.map((domain) => domain.title),
    primaryHref: "https://recruitments.cherrynetwork.in/",
    primaryLabel: "Join Endeavour",
    secondaryHref: "/domains/endeavour",
    secondaryLabel: "Learn More",
  },
];

export const activityCards = [
  {
    category: "Creative Tech",
    title: "Elysian '25",
    date: "7 August 2025",
    location: "Auditorium & Innovation Hub",
    blurb:
      "Techverse creative showcase combining interactive media, design storytelling, and student talent under one roof.",
  },
  {
    category: "Robotics & Tech",
    title: "Robofest '25",
    date: "10 - 11 September 2025",
    location: "Techverse Arena",
    blurb:
      "High-octane robotics competitions, team challenges, and tech showcases bringing together student builders and engineers.",
  },
  {
    category: "Concert",
    title: "Robofest DJ Night",
    date: "11 September 2025",
    location: "Main Stage",
    blurb:
      "An unforgettable DJ night wrapping up Robofest with massive music production, lights, and non-stop campus energy.",
  },
  {
    category: "Flagship",
    title: "Ataraxia 2.0",
    date: "11 - 14 February 2026",
    location: "Main Campus Grounds",
    blurb:
      "A flagship multi-day festival featuring music, performances, RedBull stage activations, digicam reels, and energetic crowd moments.",
  },
  {
    category: "Community Outreach",
    title: "Orphanage Drive '26",
    date: "12 April 2026",
    location: "City Hope Home",
    blurb:
      "A heartfelt social outreach drive where Cherry+ members spent the day engaging, sharing joy, and supporting local children.",
  },
  {
    category: "Tenure Finale",
    title: "The Last Commit '26",
    date: "23 April 2026",
    location: "Campus Amphitheatre",
    blurb:
      "The grand finale of the tenure celebrating team accomplishments, project handovers, and memorable tenure highlights.",
  },
];

export const communityStats = [
  {
    value: "200+",
    label: "Active Members",
    icon: "people",
  },
  {
    value: "10+",
    label: "Events",
    icon: "extension",
  },
  {
    value: "100%",
    label: "Fun and Satisfaction",
    icon: "heart",
  },
] as const;
