import { PolaroidEventCard } from "@/components/PolaroidEventCard";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { activityCards } from "@/data/homepage";

export function HomeActivities() {
  return (
    <ScrollReveal
      as="section"
      id="events"
      className="relative overflow-hidden py-18 home-red-web sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomeSectionHeading
          eyebrow="What we do"
          title="NEVER STOP HAVING FUN"
          accent="HAVING FUN"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activityCards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 80}>
              <PolaroidEventCard
                event={card}
                tilt={index % 2 === 0 ? "left" : "right"}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
