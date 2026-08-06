import Image from "next/image";
import type { TeamMember } from "@/data/team";

type NameCardProps = {
  member: TeamMember;
};

/** Dynamic card — natural portrait aspect ratio, no fixed height, no side gaps.
 *  Used for Founders and Mentors where photos vary in size. */
export function DynamicNameCard({
  member,
  showSocials = true,
}: NameCardProps & { showSocials?: boolean }) {
  return (
    <div
      className="flip-card mx-auto h-[210px] w-full max-w-[300px] transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1 sm:h-[255px]"
      tabIndex={0}
    >
      <div className="flip-card-inner">
        {/* ── FRONT ─────────────────────────────────────────────────────── */}
        <div className="flip-card-front flex flex-col overflow-hidden rounded-xl bg-[#d9d9d9] shadow-lg sm:rounded-[26px]">
          {/* Banner area — image fits naturally */}
          <div className="relative h-[125px] w-full overflow-hidden bg-[#111] sm:h-[165px]">
            {member.image && (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                style={{ objectPosition: member.imagePosition ?? "top" }}
                sizes="(max-width: 640px) 45vw, 300px"
              />
            )}
          </div>

          {/* Thin red accent line (3px divider) */}
          <div className="h-[3px] w-full bg-[#dc143c]" />

          {/* Bottom name / role strip */}
          <div className="flex flex-1 flex-col justify-center bg-[#d9d9d9] px-2 py-1.5 text-center sm:px-3 sm:py-2">
            <h3 className="font-[family-name:var(--font-inter)] text-xs font-bold leading-tight text-black sm:text-xl">
              {member.name}
            </h3>
            <p className="mt-0.5 font-[family-name:var(--font-inter)] text-[9px] font-semibold uppercase tracking-wider text-[#dc143c] sm:text-xs">
              {member.role}
            </p>
          </div>
        </div>

        {/* ── BACK ──────────────────────────────────────────────────────── */}
        <div className="flip-card-back flex flex-col justify-between overflow-hidden rounded-xl bg-[#dc143c] p-3 shadow-lg sm:rounded-[26px] sm:p-4">
          {showSocials && (
            <div className="flex items-center gap-2 sm:gap-3">
              <SocialIcon label="LinkedIn" href={member.Linkedin || member.linkedin}>
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon label="GitHub" href={member.Github || member.github}>
                <GitHubIcon />
              </SocialIcon>
            </div>
          )}

          <p className="line-clamp-4 font-[family-name:var(--font-inter)] text-[10px] leading-relaxed text-black sm:text-sm">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export function NameCard({ member }: NameCardProps) {
  return (
    <div
      className="flip-card mx-auto h-[220px] w-full max-w-[342px] transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1 sm:h-[264px]"
      tabIndex={0}
    >
      <div className="flip-card-inner">
        {/* ── FRONT ─────────────────────────────────────────────────────── */}
        <div className="flip-card-front flex flex-col overflow-hidden rounded-xl bg-[#d9d9d9] shadow-lg sm:rounded-[30px]">
          {/* Banner area — image fits naturally */}
          <div className="relative h-[130px] w-full overflow-hidden bg-[#111] sm:h-[172px]">
            {member.image && (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                style={{ objectPosition: member.imagePosition ?? "top" }}
                sizes="(max-width: 640px) 45vw, 342px"
              />
            )}
          </div>

          {/* Thin red accent line (3px divider) */}
          <div className="h-[3px] w-full bg-[#dc143c]" />

          {/* Bottom name / role strip */}
          <div className="flex flex-1 flex-col justify-center bg-[#d9d9d9] px-2.5 py-2 text-center sm:px-4 sm:py-3">
            <h3 className="font-[family-name:var(--font-inter)] text-sm font-bold leading-tight text-black sm:text-2xl">
              {member.name}
            </h3>
            <p className="mt-0.5 font-[family-name:var(--font-inter)] text-[9px] font-semibold uppercase tracking-wider text-[#dc143c] sm:mt-1 sm:text-xs">
              {member.role}
            </p>
          </div>
        </div>

        {/* ── BACK ──────────────────────────────────────────────────────── */}
        <div className="flip-card-back flex flex-col justify-between overflow-hidden rounded-xl bg-[#dc143c] p-3.5 shadow-lg sm:rounded-[30px] sm:p-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <SocialIcon label="LinkedIn" href={member.Linkedin || member.linkedin}>
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon label="GitHub" href={member.Github || member.github}>
              <GitHubIcon />
            </SocialIcon>
          </div>

          <p className="line-clamp-4 font-[family-name:var(--font-inter)] text-[11px] leading-relaxed text-black sm:text-base">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href || "#"}
      target={href && href !== "#" ? "_blank" : undefined}
      rel={href && href !== "#" ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="press-feedback flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 sm:h-10 sm:w-10"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 9h3v12H6V9zm1.5-4.5A1.8 1.8 0 119.3 6 1.8 1.8 0 017.5 4.5zM11 9h3v1.7c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7V21h-3v-6.8c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V21h-3V9z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.35-1.34-3.35-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
    </svg>
  );
}
