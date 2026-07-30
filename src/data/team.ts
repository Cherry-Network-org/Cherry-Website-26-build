export type DomainFilter = "techverse" | "endeavour";
export type TechSubDomain = "app-dev" | "web-dev" | "ui-ux";
export type EndeavourSubDomain = "events" | "corporate" | "design";
export type SubDomainFilter = TechSubDomain | EndeavourSubDomain;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  domain: DomainFilter;
  subDomain?: SubDomainFilter;
  Linkedin?: string;
  linkedin?: string;
  Github?: string;
  github?: string;
};

export type TeamSection = {
  id: string;
  title: string;
  columns: 2 | 3;
  rows: TeamMember[][];
  filterable?: boolean;
  cardVariant?: "default" | "dynamic";
};

// ─── Founders ────────────────────────────────────────────────────────────────

export const teamSections: TeamSection[] = [
  {
    id: "founders",
    title: "FOUNDERS",
    columns: 2,
    cardVariant: "dynamic",
    rows: [
      [
        {
          id: "f1",
          name: "Aditya Krishnan",
          role: "Co-Founder",
          bio: "Visionary co-founder driving the technical direction and growth of Cherry+ Network.",
          image: "/images/mentors/Aditya Krishnan_Co Founder.jpg",
          domain: "techverse",
          linkedin: "https://www.linkedin.com/in/aditya-krishnan-0740/",
          Github: "https://github.com/Wolferino-74",
        },
        {
          id: "f2",
          name: "Siddhant Vashistha",
          role: "Co-Founder",
          bio: "Co-founder shaping the community, culture, and outreach of Cherry+ Network.",
          image: "/images/mentors/Siddhant Vashistha_Co founder.jpg",
          domain: "endeavour",
          Linkedin: "https://www.linkedin.com/in/siddhant-vashistha",
          Github: "https://www.instagram.com/siddhantvashistha",

        },
      ],
    ],
  },

  // ─── Mentors (not filterable — same across views) ────────────────────────
  {
    id: "mentors",
    title: "MENTORS",
    columns: 3,
    cardVariant: "dynamic",
    rows: [
      [
        {
          id: "m1",
          name: "Aditya Coomar",
          role: "Mentor",
          bio: "Guiding members through technical challenges and professional growth.",
          image: "/images/mentors/Mentor Aditya Coomar.jpg",
          domain: "techverse",
          subDomain: "web-dev",
          Linkedin: "https://www.linkedin.com/in/aditya-coomar/",
          Github: "https://github.com/Aditya-Coomar",
        },
        {
          id: "m2",
          name: "Aditri Rathore",
          role: "Mentor",
          bio: "Providing mentorship and insights across domains to nurture talent.",
          image: "/images/mentors/Mentor Aditri Rathore.jpg",
          domain: "techverse",
          subDomain: "app-dev",
          Linkedin: "https://www.linkedin.com/in/aditri-rathore-31b282310/",
          Github: "https://github.com/Aditri-R",
        },
        {
          id: "m3",
          name: "Priyanshika Rai",
          role: "Mentor",
          bio: "Supporting members with strategic thinking and creative problem-solving.",
          image: "/images/mentors/Mentor Priyanshika Rai.jpg",
          domain: "endeavour",
          Linkedin: "https://www.linkedin.com/in/priyanshika-rai-ba985b273/",
          Github: "https://github.com/Pr737",
        },
      ],
      [
        {
          id: "m4",
          name: "Aaditya Nigam",
          role: "Mentor",
          bio: "Empowering the next generation with hands-on guidance and expertise.",
          image: "/images/mentors/Mentor Aaditya Nigam.jpg",
          domain: "techverse",
          subDomain: "ui-ux",
          Linkedin: "https://www.linkedin.com/in/aaditya-nigam-student/",
          Github: "https://github.com/Aadityanigam06",
        },
        {
          id: "m5",
          name: "Abhilipsa Sahoo",
          role: "Mentor",
          bio: "Inspiring members through collaborative learning and shared experiences.",
          image: "/images/mentors/Mentor Abhilipsa Sahoo.jpg",
          domain: "endeavour",
          Linkedin: "https://www.linkedin.com/in/abhilipsa-sahoo-497797227/",
          Github: "https://github.com/Abhilipsasahoo",
        },
        {
          id: "m6",
          name: "Shreyas Manchanda",
          role: "Mentor",
          bio: "Bridging the gap between ideas and execution with practical mentorship.",
          image: "/images/mentors/Mentor Shreyas Manchanda.jpg",
          domain: "endeavour",
          Linkedin: "https://www.linkedin.com/in/shreyasmanchanda/",
          Github: "https://github.com/ShreyasManchanda",
        },
      ],
      [
        {
          id: "m7",
          name: "Chavan Aditi Anand",
          role: "Mentor",
          bio: "Dedicated to fostering creativity and critical thinking within the community.",
          image: "/images/mentors/Mentor Chavan Aditi Anand.jpg",
          domain: "endeavour",
          Linkedin: "https://www.linkedin.com/in/aditi-chavan-284977287/",
          Github: "https://github.com/aaditi72",
        },
      ],
    ],
  },

  // ─── Directors (NOT filterable) ───────────────────────────────────────────
  {
    id: "directors",
    title: "DIRECTORS",
    columns: 2,
    filterable: false,
    rows: [
      [
        {
          id: "dir1",
          name: "Atharv Gogia",
          role: "Executive Director",
          bio: "Steering the strategic direction of Cherry+ Network and driving its long-term vision.",
          image: "/images/execs/ED Atharv Gogia.jpg",
          domain: "techverse",
          Linkedin: "https://www.linkedin.com/in/atharv-gogia/",
          Github: "",
        },
        {
          id: "dir2",
          name: "Medhansh Shankpal",
          role: "Chief Operating Officer",
          bio: "Overseeing day-to-day operations and ensuring seamless coordination across all teams.",
          image: "/images/execs/COO Medhansh Shankpal.jpg",
          domain: "endeavour",
          Linkedin: "https://www.linkedin.com/in/medhansh-shankpal-0b14b2326/",
          Github: "",
        },
      ],
    ],
  },

  // ─── Executives (filterable by domain only — shown inside the filter bar) ──
  {
    id: "executives",
    title: "EXECUTIVES",
    columns: 2,
    filterable: true,
    rows: [
      // Techverse execs — appear for all techverse subdomains (no subDomain set)
      [
        {
          id: "e1",
          name: "Tejas Sharma",
          role: "Tech Executive",
          bio: "Leading the technical vision and driving innovation across the engineering teams.",
          image: "/images/execs/Tech EXEC Tejas Sharma.jpg",
          domain: "techverse",
          Linkedin: "https://github.com/TejasSharma356",
          Github: "https://www.linkedin.com/in/tejassharmaaa/",
        },
        {
          id: "e2",
          name: "Vighnesh Singh Dhanai",
          role: "Tech Executive",
          bio: "Architecting robust solutions and mentoring the technical team.",
          image: "/images/execs/Tech EXEC Vighnesh Singh Dhanai.jpg",
          domain: "techverse",
          Linkedin: "https://www.linkedin.com/in/vighnesh-singh-dhanai-b93118349/",
          Github: "https://github.com/Boomerforlife",
        },
      ],
      // Corporate execs — only under Endeavour → Corporate
      [
        {
          id: "e3",
          name: "Ayush Dungrakoti",
          role: "Corp Executive",
          bio: "Building impactful partnerships and leading corporate outreach strategies.",
          image: "/images/execs/Corp EXEC AYush Dungrakoti.jpg",
          domain: "endeavour",
          subDomain: "corporate",
          Linkedin: "",
          Github: "",
        },
        {
          id: "e4",
          name: "Mohak Dhawan",
          role: "Corp Executive",
          bio: "Driving corporate relationships and brand collaborations forward.",
          image: "/images/execs/Corp EXEC Mohak Dhawan.jpg",
          domain: "endeavour",
          subDomain: "corporate",
          Linkedin: "",
          Github: "",
        },
      ],
      // Design exec — only under Endeavour → Design
      [
        {
          id: "e5",
          name: "Bhavika Dutta",
          role: "Design Executive",
          bio: "Crafting stunning visuals and ensuring design consistency across all outputs.",
          image: "/images/execs/Design EXEC Bhavika Dutta.jpg",
          domain: "endeavour",
          subDomain: "design",
          Linkedin: "",
          Github: "https://github.com/helloiambd",
        },
      ],
      // Events exec — only under Endeavour → Events
      [
        {
          id: "e6",
          name: "Ayan Khan",
          role: "Events Executive",
          bio: "Orchestrating memorable events that bring the community together.",
          image: "/images/execs/Event EXEC AYAN Khan.jpg",
          domain: "endeavour",
          subDomain: "events",
          Linkedin: "",
          Github: "",
        },
      ],
    ],
  },

  // ─── Managers (filterable — one per subdomain) ───────────────────────────
  {
    id: "managers",
    title: "MANAGERS",
    columns: 3,
    filterable: true,
    cardVariant: "dynamic",
    rows: [
      [
        {
          id: "mg1",
          name: "App Dev Managers",
          role: "App Dev Managers",
          bio: "Overseeing the App Dev sub-team and ensuring project milestones are met.",
          image: "/images/managers/Tech.JPG",
          domain: "techverse",
          subDomain: "app-dev",
          Linkedin: "",
          Github: "",
        },
      ],
      [
        {
          id: "mg2",
          name: "Web Dev Managers",
          role: "Web Dev Managers",
          bio: "Leading the Web Dev team in building impactful web experiences.",
          image: "/images/managers/Tech.JPG",
          domain: "techverse",
          subDomain: "web-dev",
          Linkedin: "",
          Github: "",
        },
      ],
      [
        {
          id: "mg3",
          name: "UI/UX Managers",
          role: "UI/UX Managers",
          bio: "Guiding the design team in crafting intuitive and beautiful user experiences.",
          image: "/images/managers/Tech.JPG",
          domain: "techverse",
          subDomain: "ui-ux",
          Linkedin: "",
          Github: "",
        },
      ],
      [
        {
          id: "mg4",
          name: "Events Managers",
          role: "Events Managers",
          bio: "Coordinating events logistics and team collaboration for seamless experiences.",
          image: "/images/managers/Events.JPG",
          domain: "endeavour",
          subDomain: "events",
          Linkedin: "",
          Github: "",
        },
      ],
      [
        {
          id: "mg5",
          name: "Corporate Managers",
          role: "Corporate Managers",
          bio: "Managing sponsor relations and corporate partnerships across the network.",
          image: "/images/managers/Corp.JPG",
          domain: "endeavour",
          subDomain: "corporate",
          Linkedin: "",
          Github: "",
        },
      ],
      [
        {
          id: "mg6",
          name: "Design Managers",
          role: "Design Managers",
          bio: "Overseeing visual output and maintaining brand consistency across all creatives.",
          image: "/images/managers/Design.JPG",
          domain: "endeavour",
          subDomain: "design",
          Linkedin: "",
          Github: "",
        },
      ],
    ],
  },

  // ─── Associates (filterable) ─────────────────────────────────────────────
  {
    id: "associates",
    title: "ASSOCIATES",
    columns: 3,
    filterable: true,
    cardVariant: "dynamic",
    rows: [
      [
        {
          id: "a1",
          name: "App Dev Associates",
          role: "App Dev Associates",
          bio: "Contributing to mobile app projects and growing technical skills.",
          image: "/images/assocs/Tech.JPG",
          domain: "techverse",
          subDomain: "app-dev",
        },
      ],
      [
        {
          id: "a2",
          name: "Web Dev Associates",
          role: "Web Dev Associates",
          bio: "Developing web solutions and collaborating with the frontend team.",
          image: "/images/assocs/Tech.JPG",
          domain: "techverse",
          subDomain: "web-dev",
        },
      ],
      [
        {
          id: "a3",
          name: "UI/UX Associates",
          role: "UI/UX Associates",
          bio: "Designing intuitive user interfaces and enhancing user experiences.",
          image: "/images/assocs/Tech.JPG",
          domain: "techverse",
          subDomain: "ui-ux",
        },
      ],
      [
        {
          id: "a4",
          name: "Events Associates",
          role: "Events Associates",
          bio: "Supporting event planning and execution across all community events.",
          image: "/images/assocs/Events.JPG",
          domain: "endeavour",
          subDomain: "events",
        },
      ],
      [
        {
          id: "a5",
          name: "Corporate Associates",
          role: "Corporate Associates",
          bio: "Assisting in corporate relations and sponsor communications.",
          image: "/images/assocs/Corp.JPG",
          domain: "endeavour",
          subDomain: "corporate",
        },
      ],
      [
        {
          id: "a6",
          name: "Design Associates",
          role: "Design Associates",
          bio: "Creating compelling visuals that tell the Cherry+ story.",
          image: "/images/assocs/Design.JPG",
          domain: "endeavour",
          subDomain: "design",
        },
      ],
    ],
  },
];

// ─── Filter helpers ──────────────────────────────────────────────────────────

export const techSubDomains: { id: TechSubDomain; label: string }[] = [
  { id: "app-dev", label: "APP DEV" },
  { id: "web-dev", label: "WEB DEV" },
  { id: "ui-ux", label: "UI/UX" },
];

export const endeavourSubDomains: { id: EndeavourSubDomain; label: string }[] =
  [
    { id: "events", label: "EVENTS" },
    { id: "corporate", label: "CORPORATE" },
    { id: "design", label: "DESIGN" },
  ];

export function filterMembers(
  members: TeamMember[],
  domain: DomainFilter,
  subDomain: SubDomainFilter,
): TeamMember[] {
  return members.filter((member) => {
    if (member.domain !== domain) return false;
    if (member.subDomain) {
      return member.subDomain === subDomain;
    }
    return true;
  });
}
