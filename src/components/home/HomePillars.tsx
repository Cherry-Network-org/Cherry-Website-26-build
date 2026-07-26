import Image from "next/image";
import { HomeButton } from "@/components/home/HomeButton";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { pillarSections } from "@/data/homepage";

export function HomePillars() {
  return (
    <ScrollReveal
      as="section"
      id="domains"
      className="relative overflow-hidden py-18 home-red-web sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomeSectionHeading
          eyebrow="Universes"
          title="TWO PILLARS INFINITE FUN"
          accent="INFINITE FUN"
        />

        <div className="mt-14 space-y-10">
          {pillarSections.map((pillar, index) => {
            const panelClasses =
              pillar.accent === "techverse"
                ? "border-[#1777ff] bg-[#0b0f16]"
                : "border-[#ffe867] bg-[#171307]";

            const titleClasses =
              pillar.accent === "techverse" ? "text-[#1893ff]" : "text-[#ffe867]";

            const bannerClasses =
              pillar.accent === "techverse"
                ? "bg-[#1893ff] text-[#04101f]"
                : "bg-[#fff27c] text-[#221800]";

            return (
              <ScrollReveal
                key={pillar.id}
                delay={index * 120}
                className="grid gap-5 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-stretch"
              >
                <div className="relative overflow-hidden border-[3px] border-black bg-white">
                  <div className="absolute inset-x-0 top-4 z-10 flex items-center justify-between bg-white/95 px-3 py-2 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.24em] text-black sm:px-4">
                    <span>1. All-New Collection</span>
                    <span className="border border-black px-2 py-1 text-[9px]">Approved</span>
                  </div>
                  <Image
                    src={pillar.posterSrc}
                    alt={pillar.posterAlt}
                    width={860}
                    height={1080}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className={`border-[3px] p-5 sm:p-7 ${panelClasses}`}>
                  <div
                    className={`inline-flex px-3 py-1 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.22em] ${bannerClasses}`}
                  >
                    {pillar.accent === "techverse" ? "Technology-led" : "Leadership-led"}
                  </div>

                  <h3
                    className={`mt-5 font-[family-name:var(--font-inter)] text-[clamp(2rem,6vw,3.5rem)] font-black uppercase leading-none ${titleClasses}`}
                  >
                    {pillar.title}
                  </h3>

                  <p className="mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#dedede] sm:text-base">
                    {pillar.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/20 bg-white/5 px-3 py-1 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.18em] text-white/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                    <HomeButton href={pillar.primaryHref} label={pillar.primaryLabel} />
                    <HomeButton
                      href={pillar.secondaryHref}
                      label={pillar.secondaryLabel}
                      variant="secondary"
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
