"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeButton } from "@/components/home/HomeButton";
import { HomeCommunityCta } from "@/components/home/HomeCommunityCta";
import { HomeFooter } from "@/components/home/HomeFooter";
import { NavBar } from "@/components/NavBar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { domainGroups, type DomainGroup } from "@/data/domains";

type DomainDetailContentProps = {
  group: DomainGroup;
};

/** One dedicated, fully responsive page per domain (/domains/techverse,
 *  /domains/endeavour) — replaces the old single-page anchor-scroll layout
 *  so there's no separate, easy-to-break desktop-only positioning to
 *  maintain on mobile. */
export function DomainDetailContent({ group }: DomainDetailContentProps) {
  const otherGroup = domainGroups.find((item) => item.id !== group.id);
  const isBlue = group.accent === "blue";
  const accentText = isBlue ? "text-[#1893ff]" : "text-[#ffe867]";
  const accentBg = isBlue ? "bg-[#1893ff]" : "bg-[#ffe867]";
  const accentBorder = isBlue ? "border-[#1893ff]" : "border-[#ffe867]";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [group.id]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-white">
      <div className="pointer-events-none absolute inset-0 spiderweb-bg opacity-65" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.92)_0%,rgba(11,11,11,0.86)_30%,rgba(11,11,11,0.96)_100%)]" />
      <NavBar activeLabel="DOMAINS" />

      <section className="relative z-10 home-red-web py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/domains"
            className="press-feedback inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs font-black uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-[#fc0162]"
          >
            <BackArrowIcon /> All Domains
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <ScrollReveal className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
              <div className={`overflow-hidden border-[4px] border-black shadow-[10px_10px_0_0_rgba(0,0,0,0.35)] lg:-rotate-2`}>
                <Image
                  src={group.posterSrc}
                  alt={group.posterAlt}
                  width={860}
                  height={1080}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <span
                className={`inline-flex px-3 py-1 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.24em] ${accentBg} ${isBlue ? "text-[#04101f]" : "text-[#221800]"}`}
              >
                {group.tagline}
              </span>
              <h1
                className={`mt-4 font-[family-name:var(--font-inter)] text-[clamp(2.75rem,8vw,5.5rem)] font-black uppercase leading-[0.88] ${accentText}`}
              >
                {group.title}
              </h1>
              <p className="mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#dedede] sm:text-base">
                {group.description}
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <HomeButton href="/join" label={`Join ${group.title}`} />
                {otherGroup ? (
                  <HomeButton
                    href={`/domains/${otherGroup.id}`}
                    label={`Explore ${otherGroup.title}`}
                    variant="secondary"
                  />
                ) : null}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
          {group.items.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 90}
              className={`flex flex-col items-start gap-5 sm:flex-row ${item.align === "right" ? "sm:flex-row-reverse" : ""}`}
            >
              <span
                className={`shrink-0 font-[family-name:var(--font-rubik-mono)] text-[clamp(3rem,8vw,4.5rem)] leading-none ${accentText}`}
              >
                {item.number}
              </span>
              <div
                className={`w-full overflow-hidden rounded-[18px] border-t-4 ${accentBorder} bg-[linear-gradient(180deg,#1c1c1c_0%,#141414_100%)] p-5 sm:p-7`}
              >
                <h3 className="font-[family-name:var(--font-inter)] text-xl font-black uppercase text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#d2d2d2] sm:text-base">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <HomeCommunityCta />
      <HomeFooter />
    </main>
  );
}

function BackArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19 12H5M11 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
