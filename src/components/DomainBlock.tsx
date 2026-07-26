"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { DomainItem } from "@/data/domains";

function SlantTitle({ title, align }: { title: string; align: "left" | "right" }) {
  return (
    <div
      className={`relative mb-6 w-fit max-w-full ${align === "right" ? "ml-auto" : ""}`}
    >
      <div className="slant-banner relative overflow-hidden rounded-none bg-[#dc143c] px-6 py-2 sm:px-8 sm:py-3 comic-border">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/textures/red-stripes.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <h4 className="relative font-[family-name:var(--font-inter)] text-lg font-black tracking-wide text-white sm:text-[2rem]">
          {title}
        </h4>
      </div>
    </div>
  );
}

function DomainNumber({ number }: { number: string }) {
  return (
    <span
      className="shrink-0 font-[family-name:var(--font-rubik-mono)] text-[clamp(5rem,18vw,11rem)] leading-none text-[#dc143c]"
      aria-hidden
    >
      {number}
    </span>
  );
}

export function DomainBlock({ domain }: { domain: DomainItem }) {
  const isRight = domain.align === "right";

  return (
    <ScrollReveal as="article" className="space-y-4">
      <SlantTitle title={domain.title} align={domain.align} />

      <div
        className={`flex flex-col gap-4 sm:gap-6 ${
          isRight ? "sm:flex-row-reverse" : "sm:flex-row"
        } sm:items-center sm:justify-between`}
      >
        <div className="shrink-0">
          <DomainNumber number={domain.number} />
        </div>

        <div className="hidden sm:block shrink-0 h-16 w-16">
          <div className="relative h-full w-full">
            <Image
              src="/images/textures/hero-float-1.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden
            />
          </div>
        </div>

        <div className="panel-gradient flex-1 rounded-none p-5 sm:p-6 lg:p-8 comic-border">
          <p className="font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[#dedede] sm:text-xl sm:leading-8">
            {domain.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
