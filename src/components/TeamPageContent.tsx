"use client";

import { useMemo, useState } from "react";
import { DomainFilterBar } from "@/components/DomainFilter";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { TeamHero } from "@/components/TeamHero";
import { TeamSection } from "@/components/TeamSection";
import {
  filterMembers,
  teamSections,
  type DomainFilter,
  type SubDomainFilter,
  type TeamMember,
} from "@/data/team";

function filterRows(
  rows: TeamMember[][],
  domain: DomainFilter,
  subDomain: SubDomainFilter,
): TeamMember[][] {
  return rows
    .map((row) => filterMembers(row, domain, subDomain))
    .filter((row) => row.length > 0);
}

export function TeamPageContent() {
  const [domain, setDomain] = useState<DomainFilter>("techverse");
  const [subDomain, setSubDomain] = useState<SubDomainFilter>("app-dev");

  // Sections that are always visible (founders, mentors, executives)
  const staticSections = useMemo(
    () => teamSections.filter((section) => !section.filterable),
    [],
  );

  // Sections filtered by domain + subdomain (managers, associates)
  const filteredSections = useMemo(
    () => teamSections.filter((section) => section.filterable),
    [],
  );

  // When the top-level domain changes, also reset the subdomain
  function handleDomainChange(
    newDomain: DomainFilter,
    defaultSub: SubDomainFilter,
  ) {
    setDomain(newDomain);
    setSubDomain(defaultSub);
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <NavBar activeLabel="TEAM" />
      <TeamHero />

      {/* Founders, Mentors, Executives — always visible, never filtered */}
      {staticSections.map((section) => (
        <TeamSection
          key={section.id}
          title={section.title}
          columns={section.columns}
          rows={section.rows}
          cardVariant={section.cardVariant}
        />
      ))}

      {/* Domain / Subdomain filter bar */}
      <DomainFilterBar
        domain={domain}
        subDomain={subDomain}
        onDomainChange={handleDomainChange}
        onSubDomainChange={setSubDomain}
      />

      {/* Managers and Associates — filtered by domain + subdomain */}
      {filteredSections.map((section) => (
        <TeamSection
          key={section.id}
          title={section.title}
          columns={section.columns}
          rows={filterRows(section.rows, domain, subDomain)}
          cardVariant={section.cardVariant}
        />
      ))}

      <Footer />
    </main>
  );
}
