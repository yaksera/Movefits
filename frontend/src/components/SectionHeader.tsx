type Props = {
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  className?: string;
};

export function SectionPill({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      data-pill
      className={`font-label inline-flex h-10 items-center gap-3 rounded-full bg-forest-400 px-6 text-[24px] font-bold uppercase leading-none text-paper ${className}`}
    >
      <span className="size-2.5 rounded-full bg-paper" aria-hidden />
      {label}
    </span>
  );
}

export function SectionHeader({ label, title, lead, className = "" }: Props) {
  return (
    <div data-section-head className={className}>
      <SectionPill label={label} />
      <h2 className="mt-[13px] font-display text-[30px] font-bold leading-[1.2] text-forest-800 lg:text-[40px]">
        {title}
      </h2>
      {lead && (
        <p data-lead className="mt-[27px] max-w-[1140px] text-[18px] leading-[23px] text-ink-600">{lead}</p>
      )}
    </div>
  );
}
