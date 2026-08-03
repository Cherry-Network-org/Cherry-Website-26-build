import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { PinkEyebrow } from "@/components/PinkEyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";
import { EventCard } from "@/components/events/EventCard";
import { PreviousEventFeature } from "@/components/events/PreviousEventFeature";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { featuredEvents, previousEventGroups } from "@/data/events-page";

export function EventsPageContent() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <NavBar activeLabel="EVENTS" />

      <ScrollReveal as="section" className="home-red-web py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomeSectionHeading title="EVENTS" accent="EVENTS" />
          <p className="mx-auto mt-6 max-w-3xl text-center font-[family-name:var(--font-manrope)] text-sm font-medium leading-relaxed text-[#c1c1c1] sm:text-base">
            Cherry+ Network events are designed to inspire creativity,
            collaboration, and real-world learning. From tech-driven challenges
            to skill-based experiences, each event creates opportunities to
            explore ideas, showcase talent, and connect with a driven community.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 80}>
                <EventCard
                  event={event}
                  tilt={index % 2 === 0 ? "left" : "right"}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="home-red-web py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomeSectionHeading
            eyebrow="Archive"
            title="PREVIOUS EVENTS"
            accent="EVENTS"
          />

          <div className="mt-14 space-y-16">
            {previousEventGroups.map((group, groupIndex) => (
              <ScrollReveal key={group.id} delay={groupIndex * 100} as="section" className="space-y-8">
                <div className="text-center lg:text-left">
                  <PinkEyebrow label={group.title} size="lg" />
                  <p className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#d6d6d6] lg:mx-0">
                    {group.intro}
                  </p>
                </div>

                <div className="space-y-12">
                  {group.events.map((event, index) => (
                    <ScrollReveal key={event.id} delay={index * 90}>
                      <PreviousEventFeature
                        event={event}
                        reverse={index % 2 === 1}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <HomeFooter />
    </main>
  );
}
