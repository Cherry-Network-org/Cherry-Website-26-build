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
  imagePosition?: string;
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
          image: "/images/mentors/Aditya Coomar Mentor.webp",
          imagePosition: "center",
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
          Linkedin: "https://www.linkedin.com/in/tejassharmaaa/",
          Github: "https://github.com/TejasSharma356",
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
          Linkedin: "https://www.linkedin.com/in/ayush-dungrakoti",
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

  // ─── Managers (filterable — individual members per subdomain) ────────────
  //     `image` is intentionally left unset until real headshots are dropped
  //     into /public/images/managers/ — NameCard falls back to an initials
  //     placeholder so the grid never shows a broken/blank tile.
  {
    id: "managers",
    title: "MANAGERS",
    columns: 3,
    filterable: true,
    cardVariant: "dynamic",
    rows: [
      [
        {
          id: "mg-appdev-ahana",
          name: "Ahana Chakraborty",
          role: "App Dev Manager",
          bio: "Leads the App Dev sub-team from concept to deployment, driving sprint planning and code reviews.",
          image: "/images/members/Ahana Chakraborty.jpeg",
          domain: "techverse",
          subDomain: "app-dev",
          Linkedin: "https://www.linkedin.com/in/ahana-chakraborty-982a54325",
          Github: "https://github.com/Ahana-333",
        },
      ],
      [
        {
          id: "mg-webdev-daksh",
          name: "Daksh Kothari",
          role: "Web Dev Manager",
          bio: "Steers the Web Dev team in crafting fast, accessible, and visually polished web experiences.",
          image: "/images/members/Daksh Kothari.jpeg",
          domain: "techverse",
          subDomain: "web-dev",
          Linkedin: "https://www.linkedin.com/in/daksh7kothari",
          Github: "https://github.com/daksh7kothari",
        },
        {
          id: "mg-webdev-archit",
          name: "Archit Sahoo",
          role: "Web Dev Manager",
          bio: "Sets technical standards for the Web Dev team and keeps every line of code shipping with purpose.",
          image: "/images/members/Archit Sahoo.png",
          imagePosition: "top",
          domain: "techverse",
          subDomain: "web-dev",
          Linkedin: "https://www.linkedin.com/in/architkumarsahoo/",
          Github: "https://github.com/4rch1t",
        },
      ],
      [
        {
          id: "mg-uiux-aditya",
          name: "Aditya Arul Manalan",
          role: "UI/UX Manager",
          bio: "Drives the UX vision and design process across Techverse projects, championing user research.",
          image: "/images/members/Aditya Arul Manalan.png",
          imagePosition: "top",
          domain: "techverse",
          subDomain: "ui-ux",
          Linkedin: "https://www.linkedin.com/in/adityaarulmanalan/",
          Github: "https://github.com/adityaarulmanalan",
        },
      ],
      [
        {
          id: "mg-events-kritarth",
          name: "Kritarth Sharan",
          role: "Events Manager",
          bio: "Orchestrates every detail behind Cherry+ events, from venue logistics to day-of coordination.",
          image: "/images/members/KritarthSharan.jpeg",
          domain: "endeavour",
          subDomain: "events",
          Linkedin: "https://www.linkedin.com/in/kritarthsharan2511",
          Github: "https://github.com/Krxtrate",
        },
      ],
      [
        {
          id: "mg-corporate-renisha",
          name: "Renisha Rana",
          role: "Corporate Manager",
          bio: "Builds and nurtures relationships with sponsors and partners that fuel Cherry+ Network's growth.",
          image: "/images/members/renisha.jpeg",
          imagePosition: "top",
          domain: "endeavour",
          subDomain: "corporate",
          Linkedin: "https://www.linkedin.com/in/renisha-rana/",
          Github: "https://github.com/Renisha537",
        },
      ],
      [
        {
          id: "mg-design-aarav",
          name: "Aarav Goel",
          role: "Design Manager",
          bio: "Owns the visual identity of Cherry+ Network, keeping every creative asset unmistakably consistent.",
          image: "/images/members/Aarav Goel.png",
          domain: "endeavour",
          subDomain: "design",
          Linkedin: "https://www.linkedin.com/in/aaravgoel12/",
          Github: "https://github.com/coderaarav12/",
        },
        {
          id: "mg-design-anugya",
          name: "Anugya",
          role: "Design Manager",
          bio: "Sets the design bar for the team, providing feedback that keeps the brand bold and cohesive.",
          domain: "endeavour",
          subDomain: "design",
          Linkedin: "",
          Github: "",
        },
      ],
    ],
  },

  // ─── Associates (filterable — individual members per subdomain) ──────────
  {
    id: "associates",
    title: "ASSOCIATES",
    columns: 3,
    filterable: true,
    cardVariant: "dynamic",
    rows: [
      [
        {
          id: "as-appdev-ammoditaa",
          name: "Ammoditaa Kandpal",
          role: "App Dev Associate",
          bio: "Hands-on contributor building app features and debugging in a real-world environment.",
          image: "/images/members/Ammoditaa Kandpal.jpeg",
          domain: "techverse",
          subDomain: "app-dev",
          Linkedin: "https://www.linkedin.com/in/ammoditaa-kandpal-a63588372/",
          Github: "https://github.com/Ammoditaa123",
        },
        {
          id: "as-appdev-aryan",
          name: "Aryan Kadam",
          role: "App Dev Associate",
          bio: "Sharpens sprint by sprint, adding another layer to the products that power Cherry+.",
          image: "/images/members/Aryan Kadam.png",
          imagePosition: "top",
          domain: "techverse",
          subDomain: "app-dev",
          Linkedin: "https://www.linkedin.com/in/aryan-k-72349021a",
          Github: "https://github.com/Aryan-2204",
        },
      ],
      [
        {
          id: "as-webdev-rohan",
          name: "Rohan A M",
          role: "Web Dev Associate",
          bio: "Collaborates on frontend builds and responsive layouts that reach the whole community.",
          image: "/images/members/Rohan A M.jpeg",
          domain: "techverse",
          subDomain: "web-dev",
          Linkedin: "https://www.linkedin.com/in/rohan-a-m-0382a2324/",
          Github: "https://github.com/RohanAM6606",
        },
        {
          id: "as-webdev-yuvraj",
          name: "Yuvraj Singh",
          role: "Web Dev Associate",
          bio: "Brings fresh perspective to the Web Dev team, shipping work that looks great and performs well.",
          domain: "techverse",
          subDomain: "web-dev",
          Linkedin: "https://www.linkedin.com/in/csyuvraj",
          Github: "https://github.com/csyuvraj",
        },
      ],
      [
        {
          id: "as-uiux-sreesweta",
          name: "Sreesweta Roy",
          role: "UI/UX Associate",
          bio: "Crafts wireframes and polished UI components that make every Cherry+ product a pleasure to use.",
          image: "/images/members/Sreesweta Roy.png",
          imagePosition: "top",
          domain: "techverse",
          subDomain: "ui-ux",
          Linkedin: "https://www.linkedin.com/in/sreesweta-roy-921012310",
          Github: "https://github.com/Swezz",
        },
      ],
      [
        {
          id: "as-events-akash",
          name: "Akash Garai",
          role: "Events Associate",
          bio: "Sets up and coordinates on event day, making sure attendees walk away with memories worth talking about.",
          image: "/images/members/Akash garai.jpeg",
          domain: "endeavour",
          subDomain: "events",
          Linkedin: "https://www.linkedin.com/in/akash-garai-43a858375/",
          Github: "https://github.com/Akashgarai",
        },
        {
          id: "as-events-tanvi",
          name: "Tanvi Malik",
          role: "Events Associate",
          bio: "Thrives under pressure, turning event plans into flawlessly executed reality.",
          image: "/images/members/Tanvi Malik.png",
          domain: "endeavour",
          subDomain: "events",
          Linkedin: "https://in.linkedin.com/in/tanvi-malik-4b2766375",
          Github: "",
        },
        {
          id: "as-events-mukhesh",
          name: "Mukhesh A K",
          role: "Events Associate",
          bio: "The engine room behind every Cherry+ event, from setup to day-of coordination.",
          image: "/images/members/Mukhesh.png",
          imagePosition: "top",
          domain: "endeavour",
          subDomain: "events",
          Linkedin: "https://www.linkedin.com/in/a-k-mukhesh-77a25040b",
          Github: "",
        },
        {
          id: "as-events-reeju",
          name: "Reeju Banerjee",
          role: "Events Associate",
          bio: "Keeps every event running on time, rallying the team through each moment.",
          image: "/images/members/Reeju Banerjee.png",
          imagePosition: "top",
          domain: "endeavour",
          subDomain: "events",
          Linkedin: "https://www.linkedin.com/in/reejubanerjee/",
          Github: "https://github.com/ReejuBanerjee",
        },
        {
          id: "as-events-nimrat",
          name: "Nimrat Kaur Maan",
          role: "Events Associate",
          bio: "Loves turning event plans into reality, one well-run detail at a time.",
          image: "/images/members/nimrat.png",
          imagePosition: "top",
          domain: "endeavour",
          subDomain: "events",
          Linkedin: "https://www.linkedin.com/in/nimrat-maan-18a1b8379",
          Github: "",
        },
      ],
      [
        {
          id: "as-corporate-tanishqa",
          name: "Tanishqa Sharma",
          role: "Corporate Associate",
          bio: "Supports outreach and sponsor follow-ups that keep the network's external relationships strong.",
          image: "/images/members/tanishqa.jpeg",
          imagePosition: "center 20%",
          domain: "endeavour",
          subDomain: "corporate",
          Linkedin: "https://www.linkedin.com/in/tanishqa-sharma-7293a7349",
          Github: "https://github.com/Tanishqa57",
        },
        {
          id: "as-corporate-krishav",
          name: "Krishav Dutta",
          role: "Corporate Associate",
          bio: "First point of contact for brands looking to collaborate with Cherry+.",
          domain: "endeavour",
          subDomain: "corporate",
          Linkedin: "https://www.linkedin.com/in/krishav-dutta-0b5a65372/",
          Github: "https://github.com/KillerkingKD2112",
        },
      ],
      [
        {
          id: "as-design-manthan",
          name: "Manthan",
          role: "Design Associate",
          bio: "Dives into every brief with curiosity, delivering visuals the community is proud of.",
          domain: "endeavour",
          subDomain: "design",
          Linkedin: "",
          Github: "",
        },
        {
          id: "as-design-piyush",
          name: "Piyush",
          role: "Design Associate",
          bio: "Brings Cherry+ stories to life through graphics and content that stop the scroll.",
          image: "/images/members/Piyush Kumar.png",
          domain: "endeavour",
          subDomain: "design",
          Linkedin: "https://www.linkedin.com/in/piyush-kumar-556aba33b/",
          Github: "https://github.com/int01001",
        },
        {
          id: "as-design-ronik",
          name: "Ronik",
          role: "Design Associate",
          bio: "Shapes the network's visual identity, one bold creative asset at a time.",
          domain: "endeavour",
          subDomain: "design",
          Linkedin: "",
          Github: "",
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
