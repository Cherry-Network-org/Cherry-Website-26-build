import Image from "next/image";
import { HomeButton } from "@/components/home/HomeButton";
import { PreviousEvent } from "@/data/events-page";

export function PreviousEventFeature({
  event,
  reverse = false,
}: {
  event: PreviousEvent;
  reverse?: boolean;
}) {
  const highlight = event.highlight ? ` ${event.highlight}` : "";

  return (
    <article
      id={event.id}
      className={`grid gap-6 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
    >
      <div className="relative overflow-hidden border-[3px] border-black bg-white">
        <Image
          src={event.imageSrc}
          alt={event.imageAlt}
          width={900}
          height={900}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="text-center lg:text-left">
        <div
          className={`flex items-center gap-4 ${reverse ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}
        >
          <span className="hidden h-px w-16 bg-[#fc0162] lg:block" />
          <p className="font-[family-name:var(--font-inter)] text-sm font-black uppercase tracking-[0.2em] text-[#fc0162]">
            {event.date}
          </p>
          <span className="hidden h-px w-16 bg-[#fc0162] lg:block" />
        </div>

        <h3 className="mt-4 font-[family-name:var(--font-inter)] text-[clamp(2.4rem,6vw,4.75rem)] font-black uppercase leading-[0.92] text-white">
          <span>{event.title}</span>
          {event.highlight ? <span className="text-[#fc0162]">{highlight}</span> : null}
        </h3>

        <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#cfcfcf] lg:mx-0 lg:text-base">
          {event.description}
        </p>

        <div
          className={`mt-7 flex flex-col gap-4 sm:flex-row ${reverse ? "sm:justify-center lg:justify-end" : "sm:justify-center lg:justify-start"}`}
        >
          <HomeButton href={event.galleryHref} label="View In Gallery" />
          <HomeButton href={`#${event.id}`} label="About Event" variant="secondary" />
        </div>
      </div>
    </article>
  );
}
