"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryCarouselSlides } from "@/data/gallery";

export function GalleryHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = galleryCarouselSlides.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveSlide((index + slideCount) % slideCount);
    },
    [slideCount],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideCount);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [slideCount]);

  return (
    <section className="relative">
      <div className="relative aspect-[1280/658] w-full overflow-hidden">
        {galleryCarouselSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/70" />

        <h1 className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 text-center font-[family-name:var(--font-rubik-mono)] text-[clamp(3rem,12vw,8rem)] font-normal leading-none tracking-tight">
          <span className="cherry-gradient-text">GALLERY</span>
        </h1>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(activeSlide - 1)}
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#dc143c] text-white transition hover:bg-[#b81032] sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronIcon direction="left" />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(activeSlide + 1)}
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#dc143c] text-white transition hover:bg-[#b81032] sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronIcon direction="right" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
          {galleryCarouselSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeSlide
                  ? "bg-[#dc143c]"
                  : "bg-[#0b0b0b] ring-1 ring-[#dedede]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={direction === "left" ? "mr-0.5" : "ml-0.5"}
    >
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
