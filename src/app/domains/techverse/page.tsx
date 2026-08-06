import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DomainDetailContent } from "@/components/domains/DomainDetailContent";
import { getDomainGroup } from "@/data/domains";

export const metadata: Metadata = {
  title: "Techverse | Cherry+ Network",
  description:
    "Techverse drives innovation through technology and digital exploration — Web Dev, App Dev, and UI/UX.",
};

export default function TechversePage() {
  const group = getDomainGroup("techverse");
  if (!group) notFound();

  return <DomainDetailContent group={group} />;
}
