"use client";

import type {
  DomainFilter,
  SubDomainFilter,
  TechSubDomain,
  EndeavourSubDomain,
} from "@/data/team";
import { techSubDomains, endeavourSubDomains } from "@/data/team";

type DomainFilterBarProps = {
  domain: DomainFilter;
  subDomain: SubDomainFilter;
  onDomainChange: (domain: DomainFilter, defaultSub: SubDomainFilter) => void;
  onSubDomainChange: (subDomain: SubDomainFilter) => void;
};

const topFilters: { id: DomainFilter; label: string }[] = [
  { id: "techverse", label: "TECHVERSE" },
  { id: "endeavour", label: "ENDEAVOUR" },
];

/** Comic-style pill switch with a bouncy sliding thumb behind the active
 *  label — swapped in for the old flat gray tabs so the filter feels as
 *  playful as the rest of the site. */
function SegmentedSwitch<T extends string>({
  options,
  value,
  onSelect,
  size = "lg",
}: {
  options: { id: T; label: string }[];
  value: T;
  onSelect: (id: T) => void;
  size?: "lg" | "sm";
}) {
  const activeIndex = Math.max(
    0,
    options.findIndex((option) => option.id === value),
  );

  return (
    <div
      className={`relative grid overflow-hidden rounded-full border-black bg-[#111] ${
        size === "lg"
          ? "border-[3px] shadow-[5px_5px_0_0_#000]"
          : "border-[3px] shadow-[4px_4px_0_0_#000]"
      }`}
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {/* Sliding thumb */}
      <span
        aria-hidden
        className="segment-thumb absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)]"
        style={{
          width: `${100 / options.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {options.map((option) => {
        const active = option.id === value;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`press-feedback relative z-10 font-[family-name:var(--font-inter)] font-black uppercase tracking-wide transition-colors duration-300 ${
              size === "lg"
                ? "px-2 py-3 text-sm sm:text-xl"
                : "px-1 py-2.5 text-[11px] sm:text-base"
            } ${active ? "text-white" : "text-[#9c9c9c] hover:text-white"}`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function DomainFilterBar({
  domain,
  subDomain,
  onDomainChange,
  onSubDomainChange,
}: DomainFilterBarProps) {
  // Pick the correct subdomain list based on the active top-level domain
  const bottomFilters: { id: SubDomainFilter; label: string }[] =
    domain === "techverse"
      ? (techSubDomains as { id: SubDomainFilter; label: string }[])
      : (endeavourSubDomains as { id: SubDomainFilter; label: string }[]);

  return (
    <div className="mx-auto max-w-xl space-y-5 px-4 py-8 sm:max-w-2xl sm:space-y-6 sm:px-6 sm:py-10">
      {/* Top level: Techverse | Endeavour */}
      <SegmentedSwitch
        options={topFilters}
        value={domain}
        size="lg"
        onSelect={(id) => {
          // When switching domains, reset to the first subdomain of that domain
          const defaultSub: SubDomainFilter =
            id === "techverse"
              ? (techSubDomains[0].id as TechSubDomain)
              : (endeavourSubDomains[0].id as EndeavourSubDomain);
          onDomainChange(id, defaultSub);
        }}
      />

      {/* Bottom level: sub-domains (change based on active top domain) */}
      <SegmentedSwitch
        key={domain}
        options={bottomFilters}
        value={subDomain}
        size="sm"
        onSelect={onSubDomainChange}
      />
    </div>
  );
}
