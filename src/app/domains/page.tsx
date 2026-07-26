import type { Metadata } from "next";
import { DomainPageContent } from "@/components/domains/DomainPageContent";

export const metadata: Metadata = {
  title: "Domains | Cherry+ Network",
  description:
    "Explore Techverse and Endeavour, the two core domains of Cherry+ Network.",
};

export default function DomainsPage() {
  return <DomainPageContent />;
}
