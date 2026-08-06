import { DynamicNameCard, NameCard } from "@/components/NameCard";
import { SectionDivider } from "@/components/SectionDivider";
import type { TeamMember } from "@/data/team";

type TeamSectionProps = {
  title: string;
  columns: 2 | 3;
  rows: TeamMember[][];
  cardVariant?: "default" | "dynamic";
  showSocials?: boolean;
};

function TeamRow({
  members,
  columns,
  cardVariant,
  showSocials = true,
}: {
  members: TeamMember[];
  columns: 2 | 3;
  cardVariant?: "default" | "dynamic";
  showSocials?: boolean;
}) {
  const useCenteredFlex =
    (columns === 3 && members.length < 3) ||
    (columns === 2 && members.length < 2);

  const renderCard = (member: TeamMember) =>
    cardVariant === "dynamic" ? (
      <DynamicNameCard key={member.id} member={member} showSocials={showSocials} />
    ) : (
      <NameCard key={member.id} member={member} />
    );

  if (useCenteredFlex) {
    return (
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
        {members.map(renderCard)}
      </div>
    );
  }

  return (
    <div
      className={`mx-auto grid w-full grid-cols-2 gap-3 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:mx-auto [&>*:last-child:nth-child(odd)]:w-1/2 sm:gap-6 lg:[&>*:last-child:nth-child(odd)]:col-span-1 lg:[&>*:last-child:nth-child(odd)]:w-full ${
        columns === 3 ? "max-w-[1100px] lg:grid-cols-3" : "max-w-[720px]"
      }`}
    >
      {members.map(renderCard)}
    </div>
  );
}

export function TeamSection({ title, columns, rows, cardVariant, showSocials }: TeamSectionProps) {
  const visibleRows = rows.filter((row) => row.length > 0);

  if (visibleRows.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 spiderweb-bg opacity-60" />

      <div className="relative mx-auto max-w-7xl space-y-10">
        <SectionDivider title={title} />

        <div className="space-y-8">
          {visibleRows.map((row, rowIndex) => (
            <TeamRow
              key={`${title}-${rowIndex}`}
              members={row}
              columns={columns}
              cardVariant={cardVariant}
              showSocials={showSocials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
