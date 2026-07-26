import { navLinks } from "@/data/navigation";

export { navLinks };

export const techverseDomains = [
  {
    number: "1",
    title: "WEB DEVELOPEMENT",
    description:
      "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. The web dev domain focuses on developing your full stack web development skills.",
    align: "left" as const,
  },
  {
    number: "2",
    title: "APP DEVELOPEMENT",
    description:
      "App development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems. The App Dev domain provides its members with opportunities to work on projects and develop their skills.",
    align: "right" as const,
  },
  {
    number: "3",
    title: "UI/UX DESIGN",
    description:
      "UI focuses on visual elements like screens, buttons, and icons users interact with. UX covers the overall experience and emotions while using a product. Though UI influences UX, they are distinct concepts with different goals, processes, and responsibilities for designers.",
    align: "left" as const,
  },
];

export const endeavourDomains = [
  {
    number: "1",
    title: "EVENTS",
    description:
      "If you love social interaction and believe in an all-hands-on-deck approach, we have a place for you in our Events Domain. From shaping ideas to executing successful events, our team collaborates throughout the journey, gaining leadership and real-world experience.",
    align: "left" as const,
  },
  {
    number: "2",
    title: "DESIGN",
    description:
      "A picture speaks a thousand words, and our Design Domain brings those words to life. From concept to final creation, the team collaborates to turn ideas into impactful visuals, giving your inner artist the space to create, experiment, and leave a lasting impression.",
    align: "right" as const,
  },
  {
    number: "3",
    title: "CORPORATE",
    description:
      "Step into the business world through our Corporate Domain, where we build college-approved relationships with sponsors, the public, and each other. From professional communication to partnership management, the team works collaboratively to represent the organization with clarity, confidence, and impact.",
    align: "left" as const,
  },
];

export type DomainItem = (typeof techverseDomains)[number];
