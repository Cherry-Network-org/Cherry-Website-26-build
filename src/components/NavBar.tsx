"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";

type NavBarProps = {
  activeLabel?: string;
};

export function NavBar({ activeLabel }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock page scroll while the full mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const resolvedActive =
    activeLabel ??
    navLinks.find((link) => link.href === pathname)?.label ??
    (pathname === "/" ? "HOME" : undefined);

  return (
    <>
    <header className="sticky top-0 z-50 border-b-[5px] border-[#fc0162] bg-[#0b0b0b]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[84px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative h-10 w-[185px] shrink-0 sm:h-12 sm:w-[225px]">
          <Image
            src="/images/brand/logo-full.png"
            alt="Cherry+ Network"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.label === resolvedActive;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative font-[family-name:var(--font-inter)] text-[13px] font-black uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "text-[#fc0162] after:absolute after:-bottom-3 after:left-0 after:h-0.5 after:w-full after:bg-[#fc0162]"
                    : "text-[#dedede] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/join"
            className="shine-sweep press-feedback hidden border-[3px] border-[#fc0162] bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)] px-4 py-2 font-[family-name:var(--font-inter)] text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            JOIN NOW
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="press-feedback inline-flex h-11 w-11 items-center justify-center border-2 border-white/20 text-white transition-colors hover:border-[#fc0162] lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>

      {/* Rendered outside <header> — backdrop-blur on the header creates a
          containing block for position:fixed descendants, which would
          otherwise collapse this panel's height to the header's own. */}
      {open && (
        <div className="nav-mobile-in fixed inset-x-0 top-[89px] bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-[#0b0b0b] lg:hidden">
          <div className="pointer-events-none absolute inset-0 spiderweb-bg opacity-40" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.55)_0%,rgba(11,11,11,0.96)_100%)]"
            aria-hidden
          />

          <div className="relative flex min-h-full flex-col justify-between px-6 py-8">
            <nav className="mx-auto flex w-full max-w-xs flex-1 flex-col justify-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = link.label === resolvedActive;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`nav-mobile-link press-feedback group flex items-center justify-between gap-4 border-b border-white/10 py-4 font-[family-name:var(--font-inter)] text-2xl font-black uppercase tracking-wide transition-colors ${
                      isActive ? "text-[#fc0162]" : "text-white/75 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full transition-all duration-200 ${
                        isActive
                          ? "scale-100 bg-[#fc0162]"
                          : "scale-0 bg-white/30 group-hover:scale-100"
                      }`}
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="shine-sweep press-feedback mx-auto mt-8 inline-flex w-full max-w-xs justify-center border-[3px] border-[#fc0162] bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)] px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm font-black uppercase tracking-[0.16em] text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]"
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
