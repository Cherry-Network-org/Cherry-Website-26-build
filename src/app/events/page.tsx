import type { Metadata } from "next";
import { EventsPageContent } from "@/components/events/EventsPageContent";

export const metadata: Metadata = {
  title: "Events | Cherry+ Network",
  description:
    "Explore upcoming and previous Cherry+ Network events across Techverse and Endeavour.",
};

export default function EventsPage() {
  return <EventsPageContent />;
}
