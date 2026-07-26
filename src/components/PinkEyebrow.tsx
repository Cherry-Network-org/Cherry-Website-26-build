type PinkEyebrowProps = {
  label: string;
  className?: string;
  size?: "sm" | "lg";
};

export function PinkEyebrow({
  label,
  className = "",
  size = "sm",
}: PinkEyebrowProps) {
  const textClass =
    size === "lg"
      ? "text-xl tracking-[0.16em]"
      : "text-sm tracking-[0.24em]";

  return (
    <div className={`inline-flex items-center gap-4 ${className}`.trim()}>
      <span className="hidden h-px w-20 bg-[#fc0162] sm:block" />
      <p
        className={`font-[family-name:var(--font-inter)] font-black uppercase text-[#fc0162] ${textClass}`}
      >
        {label}
      </p>
      <span className="hidden h-px w-20 bg-[#fc0162] sm:block" />
    </div>
  );
}
