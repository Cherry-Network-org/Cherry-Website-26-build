import { FeaturedEvent } from "@/data/events-page";
import { PolaroidEventCard } from "@/components/PolaroidEventCard";

export function EventCard({
  event,
  tilt = "left",
}: {
  event: FeaturedEvent;
  tilt?: "left" | "right";
}) {
  return <PolaroidEventCard event={event} tilt={tilt} />;
}
