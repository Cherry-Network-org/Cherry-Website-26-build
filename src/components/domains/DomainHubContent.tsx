"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeCommunityCta } from "@/components/home/HomeCommunityCta";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { NavBar } from "@/components/NavBar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { domainGroups } from "@/data/domains";

/** /domains — the picker page. Each universe now lives on its own route
 *  (/domains/techverse, /domains/endeavour); this page is just the entry
 *  point, built mobile-first so there's no separate desktop-only layout
 *  to fall out of sync. */
export function DomainHubContent() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-white">
      <div className="pointer-events-none absolute inset-0 spiderweb-bg opacity-65" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.92)_0%,rgba(11,11,11,0.86)_30%,rgba(11,11,11,0.96)_100%)]" />
      <NavBar activeLabel="DOMAINS" />

      <section className="relative z-10">
        <ScrollReveal as="div" className="home-red-web py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HomeSectionHeading eyebrow="Pick your universe" title="DOMAINS" accent="DOMAINS" />
            <p className="mx-auto mt-6 max-w-3xl text-center font-[family-name:var(--font-manrope)] text-sm font-semibold leading-relaxed text-[#c1c1c1] sm:text-base">
              Cherry+ Network is built around two key domains: Techverse and
              Endeavour. Together, they create a space where ideas turn into
              action and talent grows with purpose.
            </p>

            <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-10">
              {domainGroups.map((group, index) => {
                const accentText = group.accent === "blue" ? "text-[#1893ff]" : "text-[#ffe867]";
                const accentBorder = group.accent === "blue" ? "hover:border-[#1893ff]" : "hover:border-[#ffe867]";
                const accentShadow =
                  group.accent === "blue"
                    ? "hover:shadow-[14px_14px_0_0_rgba(24,147,255,0.25)]"
                    : "hover:shadow-[14px_14px_0_0_rgba(255,232,103,0.25)]";

                return (
                  <ScrollReveal key={group.id} delay={index * 120}>
                    <Link
                      href={`/domains/${group.id}`}
                      className={`group block border-[4px] border-black bg-[#111]/70 p-4 shadow-[10px_10px_0_0_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 sm:p-6 ${accentBorder} ${accentShadow}`}
                    >
                      <div className="overflow-hidden border-[3px] border-black">
                        <Image
                          src={group.posterSrc}
                          alt={group.posterAlt}
                          width={860}
                          height={1080}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={index === 0}
                        />
                      </div>

                      <div className="mt-5">
                        <span
                          className={`font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.28em] ${accentText}`}
                        >
                          {group.tagline}
                        </span>
                        <h2 className="mt-2 font-[family-name:var(--font-inter)] text-3xl font-black uppercase text-white sm:text-4xl">
                          {group.title}
                        </h2>
                        <p className="mt-3 max-w-md font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#c9c9c9]">
                          {group.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item.title}
                              className="border border-white/15 bg-white/5 px-3 py-1 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.16em] text-white/80"
                            >
                              {item.title}
                            </span>
                          ))}
                        </div>

                        <span className="mt-6 inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs font-black uppercase tracking-[0.2em] text-white transition-transform duration-300 group-hover:translate-x-1">
                          Explore {group.title}
                          <ArrowIcon />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <HomeCommunityCta />
      <HomeFooter />
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
