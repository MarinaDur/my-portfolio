export function Ladybug({ size = 24, spots = false }: { size?: number; spots?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="9" r="5" fill="#2B1D16" />
      <ellipse cx="16" cy="19" rx="11" ry="10" fill="#E2412E" stroke="#2B1D16" strokeWidth="2" />
      <path d="M16 9v20" stroke="#2B1D16" strokeWidth="2" />
      <circle cx="10.5" cy="17" r="2" fill="#2B1D16" />
      <circle cx="21.5" cy="17" r="2" fill="#2B1D16" />
      {spots && (
        <>
          <circle cx="11.5" cy="23.5" r="1.6" fill="#2B1D16" />
          <circle cx="20.5" cy="23.5" r="1.6" fill="#2B1D16" />
        </>
      )}
    </svg>
  );
}
