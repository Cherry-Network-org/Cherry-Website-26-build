import { HomeButton } from "@/components/home/HomeButton";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HomeCommunityCta() {
  return (
    <ScrollReveal
      as="section"
      id="join"
      className="relative overflow-hidden py-18 home-red-web sm:py-24"
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* Outer double-border card */}
        <div className="border-[4px] border-[#fc0162] bg-[#13080d] p-3 shadow-[12px_12px_0_0_rgba(252,1,98,0.12)] sm:p-5">
          {/* Inner card with gradient + bg image */}
          <div className="relative overflow-hidden border border-white/10 px-6 py-14 text-center sm:px-10 sm:py-20">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(252,1,98,0.82),rgba(92,0,16,0.88))]" />
            {/* Background image layer */}
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage: "url('/images/textures/cta-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content */}
            <div className="relative">
              {/* Large heading */}
              <h2 className="font-[family-name:var(--font-inter)] text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
                <span className="block">OUR COMMUNITY</span>
                <span className="block">AWAITS</span>
              </h2>

              {/* Subtitle */}
              <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-manrope)] text-sm font-medium uppercase tracking-[0.16em] text-[#ffe9ef] sm:text-base">
                Join 500+ students making campus life memorable and fun
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <HomeButton href="/join" label="Apply" />
                <HomeButton href="/team" label="Meet The Team" variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
