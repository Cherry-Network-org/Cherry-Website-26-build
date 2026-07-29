import Image from "next/image";
import Link from "next/link";

type UniverseCardProps = {
  title: string;
  image: string;
  /** Vertical image nudge to align header bars across cards (from Figma measurements) */
  imageOffset?: string;
};

function UniverseCard({ title, image, imageOffset }: UniverseCardProps) {
  return (
    <Link href="/domains" className="block">
      <article className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition hover:shadow-[0_0_30px_rgba(252,1,98,0.12)]">
        <div className="relative aspect-[447/564] w-full">
          <Image
            src={image}
            alt={`${title} universe card`}
            fill
            className={`object-cover object-top transition duration-500 group-hover:scale-[1.01] ${imageOffset ?? ""}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </article>
    </Link>
  );
}

export function UniverseCards() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
        <UniverseCard
          title="ENDEAVOUR"
          image="/images/universes/endeavour-card.png"
          imageOffset="-translate-y-[0.5%]"
        />
        <UniverseCard
          title="TECHVERSE"
          image="/images/universes/techverse-card.png"
        />
      </div>
    </section>
  );
}
