import Image from "next/image";

const HALFTONE_BURST =
  "/images/home/hero-halftone.png";

type SmokeLayerProps = {
  variant?: "hero" | "ambient";
  className?: string;
};

export function SmokeLayer({ variant = "hero", className = "" }: SmokeLayerProps) {
  if (variant === "ambient") {
    return (
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()}
        aria-hidden
      >
        <div className="ambient-smoke-wisp ambient-smoke-wisp-1" />
        <div className="ambient-smoke-wisp ambient-smoke-wisp-2" />
        <div className="ambient-smoke-wisp ambient-smoke-wisp-3" />
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 ${className}`.trim()}
      aria-hidden
    >
      <div className="relative h-[min(52vw,420px)] overflow-hidden">
        <Image
          src={HALFTONE_BURST}
          alt=""
          fill
          className="object-cover object-bottom opacity-90"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0b0b]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-44 overflow-hidden sm:h-52">
        <div className="hero-smoke-wisp hero-smoke-wisp-1" />
        <div className="hero-smoke-wisp hero-smoke-wisp-2" />
        <div className="hero-smoke-wisp hero-smoke-wisp-3" />
      </div>
    </div>
  );
}
