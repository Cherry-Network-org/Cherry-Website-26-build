import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { visionMissionCards } from "@/data/homepage";

export function HomeVisionMission() {
  return (
    <ScrollReveal as="section" className="relative overflow-hidden py-18 home-red-web sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomeSectionHeading
          eyebrow="About us"
          title="MORE THAN A CLUB"
          accent="A CLUB"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {visionMissionCards.map((card, index) => (
            <ScrollReveal
              key={card.title}
              delay={index * 120}
              className={`relative border-[3px] border-[#fc0139] bg-[#0b0b0b] p-4 shadow-[10px_10px_0_0_rgba(0,0,0,0.35)] ${index === 0 ? "lg:-rotate-2" : "lg:rotate-2"}`}
            >
              <span className="absolute left-1/2 top-0 h-4 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] bg-[#e9d8a6] shadow-[0_4px_0_0_rgba(0,0,0,0.28)]" />
              <div className="border-[5px] border-black bg-[url('/images/textures/red-stripes.png')] bg-cover bg-center p-8">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-black bg-white/95 shadow-[0_0_0_10px_rgba(255,255,255,0.08)]">
                  {card.accent === "vision" ? <EyeIcon /> : <CapIcon />}
                </div>
              </div>
              <div className="pt-6">
                <h3 className="font-[family-name:var(--font-inter)] text-2xl font-black text-white">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-xl font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#d7d7d7]">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function EyeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
      <path
        d="M4 22c3.6-6.7 10.5-11 18-11s14.4 4.3 18 11c-3.6 6.7-10.5 11-18 11S7.6 28.7 4 22Z"
        stroke="#fc0139"
        strokeWidth="3"
      />
      <circle cx="22" cy="22" r="6.5" fill="#fc0162" stroke="#111" strokeWidth="3" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M4 18 24 10l20 8-20 8L4 18Zm8 4v8.5C12 34 17 38 24 38s12-4 12-7.5V22"
        stroke="#fc0139"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M40 20v9" stroke="#111" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
