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

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-2 py-1 font-[family-name:var(--font-inter)] text-lg font-black tracking-wide transition sm:text-2xl ${
        active
          ? "cherry-gradient-text after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#fc0162]"
          : "text-[#dedede] hover:text-white"
      }`}
    >
      {label}
    </button>
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
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6">
      {/* Top level: Techverse | Endeavour */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {topFilters.map((filter) => (
          <FilterButton
            key={filter.id}
            label={filter.label}
            active={domain === filter.id}
            onClick={() => {
              // When switching domains, reset to the first subdomain of that domain
              const defaultSub: SubDomainFilter =
                filter.id === "techverse"
                  ? (techSubDomains[0].id as TechSubDomain)
                  : (endeavourSubDomains[0].id as EndeavourSubDomain);
              onDomainChange(filter.id, defaultSub);
            }}
          />
        ))}
      </div>

      {/* Bottom level: sub-domains (change based on active top domain) */}
      <div className="relative flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        <span className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-[#dc143c]/40 sm:block" />
        {bottomFilters.map((filter) => (
          <FilterButton
            key={filter.id}
            label={filter.label}
            active={subDomain === filter.id}
            onClick={() => onSubDomainChange(filter.id)}
          />
        ))}
      </div>
    </div>
  );
}
