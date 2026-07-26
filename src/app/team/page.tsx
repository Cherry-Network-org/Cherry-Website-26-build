import type { Metadata } from "next";
import { TeamPageContent } from "@/components/TeamPageContent";

export const metadata: Metadata = {
  title: "Team | Cherry+ Network",
  description:
    "Meet the founders, mentors, directors, and team members behind Cherry+ Network.",
};

export default function TeamPage() {
  return <TeamPageContent />;
}
