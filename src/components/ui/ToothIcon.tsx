interface ToothIconProps {
  className?: string;
}

/** Simple tooth glyph used in the logo. */
export function ToothIcon({ className }: ToothIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5.5C9.5 3 5 3.2 4 6.5c-.7 2.3.3 4.6.8 7 .4 1.9.3 5 1.7 6 1.6 1.1 2.3-1.8 2.6-3.2.3-1.4.5-2.8 2-2.8s1.7 1.4 2 2.8c.3 1.4 1 4.3 2.6 3.2 1.4-1 1.3-4.1 1.7-6 .5-2.4 1.5-4.7.8-7C17.9 3.2 13.4 3 12 5.5Z" />
    </svg>
  );
}
