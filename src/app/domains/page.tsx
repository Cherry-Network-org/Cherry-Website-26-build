import type { Metadata } from "next";
import { DomainHubContent } from "@/components/domains/DomainHubContent";

export const metadata: Metadata = {
  title: "Domains | Cherry+ Network",
  description:
    "Explore Techverse and Endeavour, the two core domains of Cherry+ Network.",
};

export default function DomainsPage() {
  return <DomainHubContent />;
}
