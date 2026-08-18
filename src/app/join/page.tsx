import { redirect } from "next/navigation";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function JoinPage() {
  redirect("https://recruitments.cherrynetwork.in/");
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <NavBar activeLabel="JOIN" />

      <main className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fc0162]/15 blur-[120px]" />

        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#fc0162_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-inter)] text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-tight text-white">
            RECRUITMENTS <br />
            <span className="text-[#fc0162]">COMING SOON</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[#cfcfcf] sm:text-lg">
            The next tenure recruitment drive for <strong className="text-white">Cherry+ Network</strong> is right around the corner. Get ready to build, lead, and experience the coolest network on campus.
          </p>

          {/* Stay-in-the-loop card — no form, just the fastest ways to hear about it first */}
          <div className="mx-auto mt-10 max-w-md -rotate-1 border-[3px] border-[#fc0162] bg-[#12070c] p-6 shadow-[10px_10px_0_0_rgba(252,1,98,0.2)] transition-transform duration-300 hover:rotate-0">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#fc0162] bg-[#fc0162]/10 text-2xl">
              🔔
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-inter)] text-xl font-black uppercase text-white">
              Be First In Line
            </h3>
            <p className="mx-auto mt-2 max-w-xs font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#cfcfcf]">
              Applications aren&apos;t open yet — follow along and we&apos;ll shout the moment they drop.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://www.instagram.com/cherry.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="press-feedback inline-flex items-center justify-center gap-2 border-[3px] border-[#fc0162] bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)] px-5 py-3 font-[family-name:var(--font-inter)] text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5"
              >
                Follow For Updates
              </a>
              <a
                href="mailto:techverse@cherrynetwork.in"
                className="press-feedback inline-flex items-center justify-center gap-2 border-[3px] border-white/30 bg-transparent px-5 py-3 font-[family-name:var(--font-inter)] text-xs font-black uppercase tracking-widest text-white transition-colors hover:border-[#fc0162] hover:text-[#fc0162]"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/domains"
              className="press-feedback border-2 border-white/30 bg-black/40 px-5 py-2.5 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#fc0162] hover:text-[#fc0162]"
            >
              Explore Domains
            </Link>
            <Link
              href="/team"
              className="press-feedback border-2 border-white/30 bg-black/40 px-5 py-2.5 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#fc0162] hover:text-[#fc0162]"
            >
              Meet The Team
            </Link>
            <Link
              href="/"
              className="press-feedback border-2 border-white/30 bg-black/40 px-5 py-2.5 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#fc0162] hover:text-[#fc0162]"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
