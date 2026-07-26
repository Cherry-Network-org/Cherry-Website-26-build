"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/navigation";

type NavBarProps = {
  activeLabel?: string;
};

export function NavBar({ activeLabel }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const resolvedActive =
    activeLabel ??
    navLinks.find((link) => link.href === pathname)?.label ??
    (pathname === "/" ? "HOME" : undefined);

  return (
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
            href="/#join"
            className="hidden border-[3px] border-[#fc0162] bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)] px-4 py-2 font-[family-name:var(--font-inter)] text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            JOIN NOW
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-white/20 text-white lg:hidden"
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

      {open && (
        <div className="border-t border-white/10 bg-[#0b0b0b] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = link.label === resolvedActive;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-[family-name:var(--font-inter)] text-sm font-black uppercase tracking-[0.16em] ${
                    isActive ? "text-[#fc0162]" : "text-[#dedede]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#join"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full justify-center border-[3px] border-[#fc0162] bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)] px-4 py-3 font-[family-name:var(--font-inter)] text-sm font-black uppercase tracking-[0.16em] text-white"
            >
              JOIN NOW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
