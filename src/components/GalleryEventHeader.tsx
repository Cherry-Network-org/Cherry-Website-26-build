type GalleryEventHeaderProps = {
  date: string;
  title: string;
  highlight: string;
};

export function GalleryEventHeader({
  date,
  title,
  highlight,
}: GalleryEventHeaderProps) {
  return (
    <div className="space-y-4 text-center sm:space-y-6">
      <div className="mx-auto flex max-w-md items-center justify-center gap-4 sm:max-w-xl sm:gap-6">
        <span className="h-px flex-1 bg-[#dc143c]/80" />
        <p className="shrink-0 font-[family-name:var(--font-inter)] text-base font-black text-[#dc143c] sm:text-xl">
          {date}
        </p>
        <span className="h-px flex-1 bg-[#dc143c]/80" />
      </div>

      <h2 className="font-[family-name:var(--font-inter)] text-[clamp(2.5rem,10vw,6rem)] font-black leading-none tracking-tight">
        <span className="text-white">{title} </span>
        <span className="cherry-gradient-text">{highlight}</span>
      </h2>
    </div>
  );
}
