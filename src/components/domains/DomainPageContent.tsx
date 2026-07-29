"use client";

import { useEffect } from "react";
import Image from "next/image";
import { HomeCommunityCta } from "@/components/home/HomeCommunityCta";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { NavBar } from "@/components/NavBar";
import { PinkEyebrow } from "@/components/PinkEyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HomeButton } from "@/components/home/HomeButton";
import { endeavourDomains, techverseDomains } from "@/data/domains";

type DomainGroup = {
  id: string;
  title: string;
  description: string;
  posterSrc: string;
  posterAlt: string;
  items: typeof techverseDomains;
};

const domainGroups = [
  {
    id: "techverse",
    title: "TECHVERSE",
    description:
      "Ignite your technical prowess! Showcase skills, explore tech fields, and join a community of techies. Build, innovate, and learn alongside like-minded enthusiasts.",
    posterSrc: "/images/universes/techverse-card.png",
    posterAlt: "Techverse comic poster",
    items: techverseDomains,
  },
  {
    id: "endeavour",
    title: "ENDEAVOUR",
    description:
      "Endeavour is the heart of Cherry+ Network, helping members lead, create, execute, and grow through real experiences that move ideas into action.",
    posterSrc: "/images/universes/endeavour-card.png",
    posterAlt: "Endeavour comic poster",
    items: endeavourDomains,
  },
] satisfies DomainGroup[];

const posterGroups = [domainGroups[1], domainGroups[0]];

export function DomainPageContent() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909] text-white">
      <div className="pointer-events-none absolute inset-0 spiderweb-bg opacity-65" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.92)_0%,rgba(11,11,11,0.86)_30%,rgba(11,11,11,0.96)_100%)]" />
      <NavBar activeLabel="DOMAINS" />

      <section className="relative z-10 lg:hidden">
        <ScrollReveal as="div" className="home-red-web py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HomeSectionHeading title="DOMAINS" accent="DOMAINS" />
            <p className="mx-auto mt-6 max-w-3xl text-center font-[family-name:var(--font-manrope)] text-sm font-semibold leading-relaxed text-[#c1c1c1] sm:text-base">
              Cherry+ Network is built around two key domains: Techverse and
              Endeavour. Together, they create a space where ideas turn into
              action and talent grows with purpose.
            </p>
          </div>
        </ScrollReveal>

        <div className="home-red-web py-18 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
            {domainGroups.map((group, groupIndex) => (
              <ScrollReveal
                key={group.id}
                as="section"
                id={group.id}
                delay={groupIndex * 100}
                className="space-y-10"
              >
                <div className="text-center">
                  <PinkEyebrow label={group.title} />
                </div>

                <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
                  <div className="relative mx-auto w-full max-w-[260px] lg:max-w-none">
                    <div className="-rotate-[11deg] overflow-hidden border-[4px] border-black bg-white shadow-[10px_10px_0_0_rgba(0,0,0,0.35)]">
                      <Image
                        src={group.posterSrc}
                        alt={group.posterAlt}
                        width={860}
                        height={1080}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="font-[family-name:var(--font-inter)] text-[clamp(2rem,5vw,3.6rem)] font-black uppercase text-white">
                      {group.title}
                    </h2>
                    <p className="mt-4 max-w-3xl font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#dedede] sm:text-base">
                      {group.description}
                    </p>
                    <div className="mt-6">
                      <HomeButton href="/#join" label={`Join ${group.title}`} />
                    </div>

                    <div className="mt-8 space-y-5">
                      {group.items.map((item, itemIndex) => (
                        <ScrollReveal
                          key={item.title}
                          delay={itemIndex * 80}
                          className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start"
                        >
                          <span className="font-[family-name:var(--font-rubik-mono)] text-[clamp(3rem,9vw,5rem)] leading-none text-[#fc0162]">
                            {item.number}
                          </span>
                          <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,#232323_0%,#40081a_100%)] p-4 sm:p-5">
                            <div className="mb-4 overflow-hidden border-[3px] border-black bg-[url('/images/textures/red-stripes.png')] bg-cover bg-center px-4 py-3">
                              <h3 className="font-[family-name:var(--font-inter)] text-lg font-black uppercase text-white sm:text-xl">
                                {item.title}
                              </h3>
                            </div>
                            <p className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-white">
                              {item.description}
                            </p>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 hidden lg:block">
        <ScrollReveal as="div" className="home-red-web">
          <div className="mx-auto max-w-[1280px] pb-24 pt-[64px]">
            <div className="mx-auto max-w-[760px] text-center">
              <h1 className="font-[family-name:var(--font-inter)] text-[128px] font-black uppercase leading-[0.88] text-[#ff0d62] drop-shadow-[0_12px_0_rgba(0,0,0,0.35)]">
                Domains
              </h1>
              <p className="mx-auto mt-[28px] max-w-[751px] font-[family-name:var(--font-manrope)] text-[13px] font-medium leading-[22px] text-[#b9b9b9]">
                Cherry+ Network is built around two key domains: Techverse and
                Endeavour. Techverse drives innovation through technology and
                digital exploration, while Endeavour focuses on skill-building,
                leadership, and real-world execution. Together, they create a
                space where ideas turn into action and talent grows with
                purpose.
              </p>
              <div className="mt-[34px] flex items-center justify-center gap-4">
                <span className="h-px w-[84px] bg-[#fc0162]" />
                <p className="font-[family-name:var(--font-inter)] text-[13px] font-black uppercase tracking-[0.32em] text-[#fc0162]">
                  Pick your universe
                </p>
                <span className="h-px w-[84px] bg-[#fc0162]" />
              </div>
            </div>

            <div className="mx-auto mt-[38px] grid max-w-[984px] grid-cols-2 gap-[90px]">
              {posterGroups.map((group, index) => (
                <ScrollReveal key={group.id} delay={index * 120} className="w-full">
                  <div className="overflow-hidden border-[5px] border-black bg-black shadow-[16px_16px_0_0_rgba(0,0,0,0.35)]">
                    <Image
                      src={group.posterSrc}
                      alt={group.posterAlt}
                      width={860}
                      height={1080}
                      className="h-full w-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-[128px] space-y-[96px]">
              {domainGroups.map((group, groupIndex) => (
                <ScrollReveal
                  key={`${group.id}-desktop`}
                  as="section"
                  id={group.id}
                  delay={groupIndex * 100}
                  className="space-y-[64px]"
                >
                  <DesktopSectionBanner title={group.title} description={group.description} />

                  <div className="space-y-[42px]">
                    {group.items.map((item, index) => (
                      <ScrollReveal key={item.title} delay={index * 80}>
                        <DesktopDomainRow item={item} index={index} />
                      </ScrollReveal>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <HomeCommunityCta />
      <HomeFooter />
    </main>
  );
}

function DesktopSectionBanner({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[1182px]">
      <div className="relative min-h-[161px] bg-white shadow-[10px_10px_0_0_rgba(0,0,0,0.26)]">
        <div className="absolute left-0 top-0 h-[148px] w-[602px] overflow-hidden border-[5px] border-black bg-[linear-gradient(180deg,#fc0162_0%,#b70038_100%)] shadow-[8px_8px_0_0_rgba(0,0,0,0.45)]">
          <div
            className="absolute inset-0 opacity-35"
            style={{ backgroundImage: "url('/images/textures/red-stripes.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <p className="absolute left-[38px] top-[22px] font-[family-name:var(--font-inter)] text-[70px] font-black uppercase leading-none text-white">
            {title}
          </p>
        </div>

        <div className="flex min-h-[161px] items-center justify-end px-6 pb-6 pt-6">
          <p className="max-w-[481px] font-[family-name:var(--font-manrope)] text-[13px] font-semibold leading-[20px] text-[#161616]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function DesktopDomainRow({
  item,
  index,
}: {
  item: (typeof techverseDomains)[number];
  index: number;
}) {
  const reverse = item.align === "right";
  const leftShift = !reverse && index === 2 ? 24 : 0;
  const labelLeft = reverse ? 632 : 186 + leftShift;
  const panelLeft = reverse ? 0 : 340 + leftShift;
  const panelTop = reverse ? 57 : 42;
  const panelWidth = reverse ? 942 : 1238;
  const numberLeft = reverse ? 859 : 259;
  const numberTop = reverse ? 83 : 89;

  return (
    <div className="relative mx-auto h-[333px] w-full max-w-[1280px]">
      <div
        className="absolute z-20 flex h-[68px] w-[422px] items-center justify-center border-[4px] border-black bg-[linear-gradient(180deg,#fc0162_0%,#b70038_100%)] shadow-[8px_8px_0_0_#ffffff]"
        style={{ left: labelLeft, top: 0 }}
      >
        <div
          className="absolute inset-0 opacity-35"
          style={{ backgroundImage: "url('/images/textures/red-stripes.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <p className="relative font-[family-name:var(--font-inter)] text-[24px] font-black uppercase leading-none text-white">
          {item.title}
        </p>
      </div>

      <div
        className="absolute h-[276px] rounded-br-[24px] rounded-tl-[3px] border border-white/8 bg-[linear-gradient(180deg,rgba(44,44,44,0.94)_0%,rgba(64,8,26,0.96)_100%)] shadow-[12px_12px_0_0_rgba(0,0,0,0.34)]"
        style={{ left: panelLeft, top: panelTop, width: panelWidth }}
      >
        <p
          className="absolute top-[76px] font-[family-name:var(--font-manrope)] text-[18px] font-medium leading-[27px] text-[#ececec]"
          style={{
            left: reverse ? 63 : 104,
            width: reverse ? 760 : 772,
          }}
        >
          {item.description}
        </p>
      </div>

      <span
        className="absolute z-10 font-[family-name:var(--font-rubik-mono)] text-[145px] leading-none text-[#ff0d62] [text-shadow:6px_6px_0_#000] [-webkit-text-stroke:7px_#ffffff]"
        style={{ left: numberLeft, top: numberTop }}
      >
        {item.number}
      </span>
    </div>
  );
}
