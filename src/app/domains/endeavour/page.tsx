import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DomainDetailContent } from "@/components/domains/DomainDetailContent";
import { getDomainGroup } from "@/data/domains";

export const metadata: Metadata = {
  title: "Endeavour | Cherry+ Network",
  description:
    "Endeavour focuses on skill-building, leadership, and real-world execution — Events, Design, and Corporate.",
};

export default function EndeavourPage() {
  const group = getDomainGroup("endeavour");
  if (!group) notFound();

  return <DomainDetailContent group={group} />;
}
