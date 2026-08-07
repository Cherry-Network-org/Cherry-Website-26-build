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
  const renderCard = (member: TeamMember) =>
    cardVariant === "dynamic" ? (
      <DynamicNameCard key={member.id} member={member} showSocials={showSocials} />
    ) : (
      <NameCard key={member.id} member={member} />
    );

  return (
    <div
      className={`mx-auto flex w-full flex-wrap justify-center gap-3.5 sm:gap-6 ${
        columns === 3 ? "max-w-[1100px]" : "max-w-[720px]"
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
