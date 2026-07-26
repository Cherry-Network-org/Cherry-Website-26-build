"use client";

import Image from "next/image";
import { DomainBlock } from "@/components/DomainBlock";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { DomainItem } from "@/data/domains";

type DomainSectionProps = {
  id: string;
  title: string;
  description: string;
  domains: DomainItem[];
};

export function DomainSection({
  id,
  title,
  description,
  domains,
}: DomainSectionProps) {
  return (
    <ScrollReveal
      as="section"
      id={id}
      className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 spiderweb-bg opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
          <div className="relative w-fit max-w-full">
            <div className="slant-banner relative overflow-hidden rounded-none bg-[#dc143c] px-6 py-3 sm:px-10 sm:py-4 comic-border">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/images/textures/red-stripes.png"
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden
                />
              </div>
              <h2 className="relative font-[family-name:var(--font-inter)] text-[clamp(2.5rem,8vw,5rem)] font-black leading-none text-white">
                {title}
              </h2>
            </div>
          </div>

          <p className="font-[family-name:var(--font-manrope)] text-sm font-semibold leading-relaxed text-[#dedede] sm:text-base lg:pt-2">
            {description}
          </p>
        </div>

        <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-20">
          {domains.map((domain) => (
            <DomainBlock key={domain.title} domain={domain} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
