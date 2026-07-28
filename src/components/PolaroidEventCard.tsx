export type PolaroidEventCardData = {
  category: string;
  title: string;
  date?: string;
  time?: string;
  location?: string;
  blurb: string;
};

type PolaroidEventCardProps = {
  event: PolaroidEventCardData;
  tilt?: "left" | "right" | "none";
  className?: string;
};

export function PolaroidEventCard({
  event,
  tilt = "none",
  className = "",
}: PolaroidEventCardProps) {
  const tiltClass =
    tilt === "left"
      ? "lg:-rotate-2"
      : tilt === "right"
        ? "lg:rotate-2"
        : "";

  return (
    <article
      className={`relative border-[3px] border-[#fc0162] bg-white p-3 shadow-[8px_8px_0_0_rgba(252,1,98,0.18)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_rgba(252,1,98,0.28)] ${tiltClass} ${className}`.trim()}
    >
      <span className="absolute left-1/2 top-0 h-4 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] bg-[#d8c59d] shadow-[0_3px_0_0_rgba(0,0,0,0.3)]" />
      <div className="border-[5px] border-black bg-[url('/images/textures/red-stripes.png')] bg-cover bg-center px-5 py-6">
        <span className="inline-flex bg-black/25 px-2 py-1 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.22em] text-white">
          {event.category}
        </span>
        <h3 className="mt-8 break-words font-[family-name:var(--font-inter)] text-2xl font-black uppercase leading-[0.95] text-white sm:text-3xl">
          {event.title}
        </h3>
      </div>

      <div className="space-y-2 px-2 pb-2 pt-4 text-black">
        {event.date ? (
          <p className="font-[family-name:var(--font-manrope)] text-[11px] font-bold uppercase tracking-[0.12em] text-[#5d5d5d]">
            {event.date}
          </p>
        ) : null}
        {event.time ? (
          <p className="font-[family-name:var(--font-manrope)] text-[11px] font-bold uppercase tracking-[0.12em] text-[#5d5d5d]">
            {event.time}
          </p>
        ) : null}
        {event.location ? (
          <p className="font-[family-name:var(--font-manrope)] text-[11px] font-bold uppercase tracking-[0.12em] text-[#5d5d5d]">
            {event.location}
          </p>
        ) : null}
        <p className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#242424]">
          {event.blurb}
        </p>
      </div>
    </article>
  );
}
