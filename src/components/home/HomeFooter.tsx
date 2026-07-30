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
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_auto_1fr] lg:items-center">
          <div>
            <p className="max-w-md font-[family-name:var(--font-poppins)] text-sm leading-7 text-[#dedede]">
              Team up with Cherry+ Network, the coolest club on campus, where we
              discover the secret to success and pave the way for your dreams
              through networking events, workshops, industry partnerships and
              fantastic fests.
            </p>
          </div>

          <div className="justify-self-center">
            <Link href="/" className="relative block h-20 w-[220px]">
              <Image
                src="/images/brand/logo-full.png"
                alt="Cherry+ Network"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          <div className="justify-self-end text-left lg:text-right">
            <div className="space-y-2 font-[family-name:var(--font-poppins)] text-sm font-semibold text-white sm:text-base">
              <p>
                <a href="tel:+919778154742" className="transition-colors hover:text-[#fc0162]">
                  +91 97781 54742
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
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 border-t border-white/15 pt-8">
          <div className="flex items-center gap-5">
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#fc0162] hover:text-[#fc0162]"
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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 4 20 20M20 4 4 20" stroke="currentColor" strokeWidth="2.4" />
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
