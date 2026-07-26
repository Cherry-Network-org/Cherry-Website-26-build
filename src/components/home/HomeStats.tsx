"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SmokeLayer } from "@/components/SmokeLayer";
import { communityStats } from "@/data/homepage";

export function HomeStats() {
  return (
    <ScrollReveal as="section" className="relative overflow-hidden py-18 home-red-web sm:py-24">
      <SmokeLayer variant="ambient" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section eyebrow with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-20 bg-white/30" />
          <p className="font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.42em] text-white/70">
            Our Community
          </p>
          <span className="h-px w-20 bg-white/30" />
        </div>

        {/* Main heading */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-[clamp(2.25rem,6vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-white">
            BUILT BY STUDENTS,
          </h2>
          <h2 className="font-[family-name:var(--font-inter)] text-[clamp(2.25rem,6vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-[#fc0162]">
            FOR STUDENTS
          </h2>
        </div>

        {/* Stats cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {communityStats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              delay={index * 120}
              className="group relative border border-[#fc0162]/40 bg-[#121212]/90 px-6 py-8 text-center shadow-[8px_8px_0_0_rgba(252,1,98,0.12)] transition-all duration-300 hover:border-[#fc0162] hover:shadow-[10px_10px_0_0_rgba(252,1,98,0.22)] hover:-translate-y-1"
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 left-0 h-5 w-5 border-t-2 border-l-2 border-[#fc0162]/50" />
              <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-[#fc0162]/50" />

              <div className="mx-auto flex h-11 w-11 items-center justify-center text-white/90">
                <StatIcon kind={stat.icon} />
              </div>
              <p className="mt-5 font-[family-name:var(--font-inter)] text-[clamp(2rem,4vw,3.2rem)] font-black uppercase text-[#fc0162]">
                {stat.value}
              </p>
              <p className="mt-2 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function StatIcon({ kind }: { kind: "people" | "extension" | "heart" }) {
  if (kind === "people") {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    );
  }

  if (kind === "extension") {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" />
      </svg>
    );
  }

  // Heart icon
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
