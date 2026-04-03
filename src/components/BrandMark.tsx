/** Inline mark when logo.png is missing — matches brand palette */
export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="40" height="40" rx="10" className="fill-brand-900" />
      <path
        d="M12 28V12h4l4 6 4-6h4v16h-3.5v-9.2L22 25h-4l-4.5-6.2V28H12z"
        className="fill-accent"
      />
      <circle cx="30" cy="11" r="3" className="fill-accent-light/90" />
    </svg>
  )
}
