import Link from "next/link";

type HomeButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function HomeButton({
  href,
  label,
  variant = "primary",
  className = "",
}: HomeButtonProps) {
  const base =
    "inline-flex items-center justify-center border-[3px] px-5 py-3 font-[family-name:var(--font-inter)] text-xs font-black uppercase tracking-[0.18em] transition-transform duration-200 hover:-translate-y-0.5 sm:text-sm";
  const styles =
    variant === "primary"
      ? "border-[#fc0162] bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)] text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]"
      : "border-white bg-transparent text-white shadow-[6px_6px_0_0_rgba(252,1,98,0.18)]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`.trim()}>
      {label}
    </Link>
  );
}
