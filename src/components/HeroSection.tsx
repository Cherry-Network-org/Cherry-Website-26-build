export function HeroSection() {
  return (
    <section className="relative overflow-hidden spiderweb-bg">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0b0b0b]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-14">
        <div className="relative mx-auto max-w-4xl text-center">

          <h1 className="cherry-gradient-text font-[family-name:var(--font-rubik-mono)] text-[clamp(3.5rem,12vw,8rem)] font-normal leading-none tracking-tight">
            DOMAINS
          </h1>

          <p className="mx-auto mt-8 max-w-3xl font-[family-name:var(--font-manrope)] text-sm font-medium leading-relaxed text-[#dedede] sm:text-base">
            Cherry+ Network is built around two key domains: Techverse and
            Endeavour. Techverse drives innovation through technology and digital
            exploration, while Endeavour focuses on skill-building, leadership,
            and real-world execution. Together, they create a space where ideas
            turn into action and talent grows with purpose.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-4 sm:mt-16">
          <span className="h-px flex-1 bg-[#dc143c]/80" />
          <h2 className="shrink-0 font-[family-name:var(--font-inter)] text-lg font-black tracking-wide text-white sm:text-2xl">
            PICK YOUR UNIVERSE
          </h2>
          <span className="h-px flex-1 bg-[#dc143c]/80" />
        </div>
      </div>
    </section>
  );
}
