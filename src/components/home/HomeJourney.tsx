import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SmokeLayer } from "@/components/SmokeLayer";
import { journeyMilestones } from "@/data/homepage";

export function HomeJourney() {
  return (
    <ScrollReveal as="section" className="relative overflow-hidden py-18 home-red-web sm:py-24">
      <SmokeLayer variant="ambient" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomeSectionHeading
          eyebrow="Milestones"
          title="OUR JOURNEY"
          accent="JOURNEY"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {journeyMilestones.map((item, index) => (
            <ScrollReveal
              key={item.year}
              delay={index * 100}
              className="border border-[#fc0162] bg-[#111111]/90 p-5 shadow-[8px_8px_0_0_rgba(252,1,98,0.15)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 font-[family-name:var(--font-inter)] text-[11px] font-black uppercase tracking-[0.26em] text-white">
                  {item.year}
                </span>
                <span className="h-px flex-1 bg-[#fc0162]/40" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-inter)] text-2xl font-black uppercase text-white">
                {item.title}
              </h3>
              <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#cfcfcf]">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
