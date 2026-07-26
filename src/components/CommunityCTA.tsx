import Image from "next/image";
import Link from "next/link";

export function CommunityCTA() {
  return (
    <section id="join" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 spiderweb-bg opacity-70" />
      
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-none border-5 border-[#fc0162] shadow-[0_0_40px_rgba(252,1,98,0.15)]">
        <div className="absolute inset-0">
          <Image
            src="/images/textures/red-stripes.png"
            alt=""
            fill
            className="object-cover opacity-30"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#dc143c]/60" />
        </div>

        <div className="relative z-10 px-6 py-14 text-center sm:px-10 sm:py-20">
          <h2 className="font-[family-name:var(--font-inter)] text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.95] tracking-tight">
            <span className="block text-white">OUR COMMUNITY</span>
            <span className="block text-[#dc143c]">AWAITS</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-manrope)] text-sm font-semibold text-[#dedede] sm:text-base">
            JOIN 500+ STUDENTS MAKING CAMPUS LIFE MEMORABLE AND FUN
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex min-w-[180px] items-center justify-center rounded-none bg-[#dc143c] px-6 py-3 font-[family-name:var(--font-inter)] text-base font-black text-white transition hover:bg-[#b81032]"
            >
              Apply To Join
            </Link>
            <Link
              href="/team"
              className="inline-flex min-w-[180px] items-center justify-center rounded-none border-2 border-white px-6 py-3 font-[family-name:var(--font-inter)] text-base font-black text-white transition hover:bg-white/10"
            >
              Meet The Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
