type SectionDividerProps = {
  title: string;
};

export function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="mx-auto flex max-w-md items-center justify-center gap-4 sm:max-w-lg sm:gap-6">
      <h2 className="shrink-0 font-[family-name:var(--font-inter)] text-lg font-black tracking-wide text-[#dc143c] sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}
