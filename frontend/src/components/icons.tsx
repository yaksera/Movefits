type IconProps = { className?: string };

export function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6z" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#3a4d3d" opacity="0.85" />
      <path d="M10 8.2v7.6l5.6-3.8z" fill="#28362a" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="10" width="16" height="11" rx="3" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.5" />
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="3" y="16" width="3" height="5" rx="0.5" />
      <rect x="8" y="13" width="3" height="8" rx="0.5" />
      <rect x="13" y="15" width="3" height="6" rx="0.5" />
      <rect x="18" y="11" width="3" height="10" rx="0.5" />
      <path d="M3 12l5-5 4 3 8-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LotusIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 20c-4.5 0-8-3.5-8-9 3 0 5.5 1.2 7 3.2" />
      <path d="M12 20c4.5 0 8-3.5 8-9-3 0-5.5 1.2-7 3.2" />
      <path d="M12 20c-2.2-2-3.2-4.6-3.2-7.4S10 7 12 4.5c2 2.5 3.2 5.3 3.2 8.1S14.2 18 12 20z" />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 18" fill="currentColor" aria-hidden>
      <path d="M5 18a5 5 0 0 1-5-5c0-5 3-10 8-13l1.5 1.8C6.5 4 5 6.6 5 8.5A4.75 4.75 0 0 1 5 18zm13 0a5 5 0 0 1-5-5c0-5 3-10 8-13l1.5 1.8C19.5 4 18 6.6 18 8.5A4.75 4.75 0 0 1 18 18z" />
    </svg>
  );
}
