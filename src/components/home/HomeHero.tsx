import Image from "next/image";
import Link from "next/link";
import { PinkEyebrow } from "@/components/PinkEyebrow";
import { heroMarqueeItems } from "@/data/homepage";

const HERO_TITLE_SRC = "/images/home/hero-title.svg";
const HERO_HALFTONE_SRC =
  "/images/home/hero-halftone.png";

export function HomeHero() {
  const repeatedItems = [...heroMarqueeItems, ...heroMarqueeItems];

  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden border border-[#fc0162]/35 bg-[#120406] py-12 sm:min-h-screen"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={HERO_HALFTONE_SRC}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/10 via-transparent to-[#0b0b0b]/75" />
      </div>

      {/* <SmokeLayer variant="hero" /> */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Marquee Pill */}
        <div className="mx-auto flex h-10 w-full max-w-[480px] items-center gap-3 border border-[#dc143c]/60 bg-[#0b0b0b] px-3 shadow-[0_0_15px_rgba(252,1,98,0.2)]">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fc0162] text-[11px] font-extrabold text-white">
            i
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="home-marquee-track flex min-w-max items-center gap-6 pr-6">
              {repeatedItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-6 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wider text-white sm:text-sm"
                >
                  <span>{item}</span>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#fc0162]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Title & CTAs */}
        <div className="relative mx-auto mt-14 max-w-7xl text-center sm:mt-20">
          {/* Bold, expanded logo — animated + reacts to hover for a livelier hero */}
          <div className="hero-logo-stage group relative mx-auto my-6 w-full max-w-[1300px] px-2 sm:my-12 sm:px-4">
            <span
              className="hero-logo-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fc0162]/25 blur-[70px]"
              aria-hidden
            />
            <div className="mx-auto w-full origin-center scale-y-[1.65] scale-x-[1.10] transition-transform duration-500 ease-out group-hover:scale-y-[1.7] group-hover:scale-x-[1.13] sm:scale-y-[1.80] sm:scale-x-[1.15] sm:group-hover:scale-y-[1.85] sm:group-hover:scale-x-[1.18]">
              <img
                src={HERO_TITLE_SRC}
                alt="Cherry+ Network"
                className="hero-logo-float mx-auto h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* What are we */}
          <div className="mx-auto mt-6 flex justify-center sm:mt-8">
            <PinkEyebrow label="What are we?" />
          </div>

          {/* Expanded Tagline */}
          <p className="mx-auto mt-4 max-w-[720px] font-[family-name:var(--font-manrope)] text-base font-medium leading-relaxed text-[#dedede] sm:text-lg sm:leading-relaxed">
            &quot;The Coolest Club on Campus&quot; — that is the tagline we are
            associated with. We put in the effort to live up to that tagline by
            offering adventures, learning experiences, and skill enhancement to
            aid the future.
          </p>

          {/* Prominent CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
            <Link
              href="/join"
              className="inline-flex h-[50px] w-[240px] items-center justify-center border-4 border-[#fc0162] bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)] font-[family-name:var(--font-inter)] text-lg font-black text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Join Cherry+ Network
            </Link>
            <Link
              href="/domains"
              className="inline-flex h-[50px] w-[240px] items-center justify-center border-4 border-white bg-transparent font-[family-name:var(--font-inter)] text-lg font-black text-white shadow-[6px_6px_0_0_rgba(252,1,98,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore Universes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
