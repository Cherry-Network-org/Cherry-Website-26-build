"use client";

import { useState } from "react";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("techverse");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <NavBar activeLabel="JOIN" />

      <main className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fc0162]/15 blur-[120px]" />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#fc0162_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#fc0162]/40 bg-[#fc0162]/10 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fc0162] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#fc0162]" />
            </span>
            <span className="font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-widest text-[#fc0162]">
              Recruitments Status
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-8 font-[family-name:var(--font-inter)] text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-tight text-white">
            RECRUITMENTS <br />
            <span className="text-[#fc0162]">COMING SOON</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[#cfcfcf] sm:text-lg">
            The next tenure recruitment drive for <strong className="text-white">Cherry+ Network</strong> is right around the corner. Get ready to build, lead, and experience the coolest network on campus.
          </p>

          {/* Notify / Pre-registration Card */}
          <div className="mx-auto mt-10 max-w-md border-[3px] border-[#fc0162] bg-[#12070c] p-6 shadow-[10px_10px_0_0_rgba(252,1,98,0.2)]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <p className="font-[family-name:var(--font-inter)] text-xs font-extrabold uppercase tracking-wider text-[#fc0162]">
                  Get Notified First
                </p>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#999]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-1 w-full border border-white/20 bg-black/60 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#fc0162] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#999]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@srmist.edu.in"
                    className="mt-1 w-full border border-white/20 bg-black/60 px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[#fc0162] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#999]">
                    Preferred Domain
                  </label>
                  <select
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="mt-1 w-full border border-white/20 bg-black/60 px-3 py-2.5 text-sm text-white focus:border-[#fc0162] focus:outline-none"
                  >
                    <option value="techverse">Techverse (App, Web, UI/UX)</option>
                    <option value="endeavour">Endeavour (Events, Corporate, Design)</option>
                    <option value="both">Both / Undecided</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full border-[3px] border-[#fc0162] bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)] py-3 font-[family-name:var(--font-inter)] text-sm font-black uppercase tracking-widest text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5"
                >
                  Notify Me When Open
                </button>
              </form>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fc0162] text-white">
                  ✓
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-inter)] text-xl font-bold text-white">
                  You&apos;re On The VIP List!
                </h3>
                <p className="mt-2 text-xs text-[#cfcfcf]">
                  Thanks {name || "friend"}! We&apos;ll notify <span className="text-[#fc0162]">{email}</span> the moment recruitment applications launch.
                </p>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/domains"
              className="border-2 border-white/30 bg-black/40 px-5 py-2.5 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wider text-white hover:border-[#fc0162] hover:text-[#fc0162]"
            >
              Explore Domains
            </Link>
            <Link
              href="/team"
              className="border-2 border-white/30 bg-black/40 px-5 py-2.5 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wider text-white hover:border-[#fc0162] hover:text-[#fc0162]"
            >
              Meet The Team
            </Link>
            <Link
              href="/"
              className="border-2 border-white/30 bg-black/40 px-5 py-2.5 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wider text-white hover:border-[#fc0162] hover:text-[#fc0162]"
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
