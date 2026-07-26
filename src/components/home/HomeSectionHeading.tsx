type HomeSectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accent: string;
  className?: string;
};

export function HomeSectionHeading({
  eyebrow,
  title,
  accent,
  className = "",
}: HomeSectionHeadingProps) {
  const plain = title.replace(accent, "").trim();

  return (
    <div className={`text-center ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-3 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.42em] text-[#fc0162]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-inter)] text-[clamp(2.25rem,6vw,4.3rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
        {plain ? <span className="block">{plain}</span> : null}
        <span className="block text-[#fc0162]">{accent}</span>
      </h2>
    </div>
  );
}
