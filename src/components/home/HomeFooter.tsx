import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/cherry.network/" },
  { label: "X", href: "https://x.com/network_cherry" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cherry-network/" },
];

export function HomeFooter() {
  return (
    <footer className="relative z-10 border-t-[5px] border-[#fc0162] bg-[#0b0b0d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 text-center lg:grid-cols-[1.1fr_auto_1fr] lg:items-center lg:text-left">
          <div className="order-2 lg:order-1">
            <p className="mx-auto max-w-md font-[family-name:var(--font-poppins)] text-sm leading-7 text-[#dedede] lg:mx-0">
              Team up with Cherry+ Network, the coolest club on campus, where we
              discover the secret to success and pave the way for your dreams
              through networking events, workshops, industry partnerships and
              fantastic fests.
            </p>
          </div>

          <div className="order-1 justify-self-center lg:order-2">
            <Link
              href="/"
              className="group relative block h-24 w-24 transition-transform duration-300 ease-out hover:scale-110 hover:-rotate-3 active:scale-95"
              aria-label="Cherry+ Network home"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-[#fc0162]/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src="/images/brand/logo-mark.png"
                alt="Cherry+ Network"
                fill
                sizes="96px"
                className="object-contain"
              />
            </Link>
          </div>

          <div className="order-3 flex flex-col items-center gap-2 font-[family-name:var(--font-poppins)] text-sm font-semibold text-white sm:text-base lg:items-end">
            <p>
              <a href="tel:+918826022445" className="transition-colors hover:text-[#fc0162]">
                +91 88260 22445
              </a>
            </p>
            <p>
              <a href="mailto:techverse@cherrynetwork.in" className="transition-colors hover:text-[#fc0162]">
                techverse@cherrynetwork.in
              </a>
            </p>
            <p>
              <a href="https://www.cherrynetwork.in" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#fc0162]">
                www.cherrynetwork.in
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 border-t border-white/15 pt-8">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="hidden h-px w-14 bg-white/20 sm:block" />
            {socialLinks.map((item) => (
              <SocialBadge key={item.label} href={item.href} label={item.label} />
            ))}
            <span className="hidden h-px w-14 bg-white/20 sm:block" />
          </div>
          <p className="text-center font-[family-name:var(--font-montserrat)] text-sm font-medium text-[#dedede]">
            Crafted with &lt;3 by your friends at Cherry+ Network
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialBadge({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:-translate-y-1 hover:border-[#fc0162] hover:bg-[#fc0162]/10 hover:text-[#fc0162] active:translate-y-0 active:scale-90"
    >
      {label === "Instagram" ? <InstagramIcon /> : null}
      {label === "X" ? <XIcon /> : null}
      {label === "LinkedIn" ? <LinkedInIcon /> : null}
    </Link>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 4.35-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l12.966 15.644Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 9h3v12H6V9Zm1.5-4.5A1.8 1.8 0 1 1 9.3 6 1.8 1.8 0 0 1 7.5 4.5ZM11 9h3v1.7c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7V21h-3v-6.8c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V21h-3V9Z" />
    </svg>
  );
}
