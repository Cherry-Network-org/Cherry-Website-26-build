import { endeavourDomains, techverseDomains } from "@/data/domains";
export const heroMarqueeItems = [
  "upcoming events",
  "elysian '26",
  "robofest '26",
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
    primaryHref: "#join",
    primaryLabel: "Join Techverse",
    secondaryHref: "/domains#techverse",
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
    primaryHref: "#join",
    primaryLabel: "Join Endeavour",
    secondaryHref: "/domains#endeavour",
    secondaryLabel: "Learn More",
  },
];

export const activityCards = [
  {
    category: "Featured",
    title: "Ataraxia",
    date: "26 February 2023",
    location: "Campus Commons",
    blurb:
      "A full-sensory celebration that mixed music, interaction, and club energy into one unforgettable night.",
  },
  {
    category: "Flagship",
    title: "301 Redirect",
    date: "28 September 2022",
    location: "Main Auditorium",
    blurb:
      "A bold student experience designed to surprise, entertain, and pull the audience into the Cherry+ world.",
  },
  {
    category: "Spotlight",
    title: "Rain Dance",
    date: "12 August 2023",
    location: "Open Grounds",
    blurb:
      "High-energy programming, crowd moments, and a playful campus atmosphere turned into a signature memory.",
  },
  {
    category: "Workshop",
    title: "UX MasterClass",
    date: "14 April 2024",
    location: "Innovation Lab",
    blurb:
      "A focused learning session where students explored product thinking, interface craft, and design feedback loops.",
  },
  {
    category: "Hack Week",
    title: "App Wars",
    date: "3 May 2024",
    location: "Tech Studio",
    blurb:
      "Teams moved fast from concept to prototype, combining engineering, design, and storytelling under pressure.",
  },
  {
    category: "Showcase",
    title: "Talent Showcase",
    date: "19 July 2024",
    location: "Student Center",
    blurb:
      "A stage for members to share what they build, perform, and care about in front of the wider community.",
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
