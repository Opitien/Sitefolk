export default function SitefolkLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer digital/web grid (Hexagon) */}
      <path 
        d="M16 2 L28 9 L28 23 L16 30 L4 23 L4 9 Z" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinejoin="round"
      />
      
      {/* Integrated human form (Head) */}
      <circle 
        cx="16" 
        cy="12" 
        r="3.5" 
        fill="currentColor" 
      />
      
      {/* Integrated human form (Shoulders/Body connected to the web) */}
      <path 
        d="M10 23 C10 19 12.5 17.5 16 17.5 C19.5 17.5 22 19 22 23" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Structural connection lines (Web to Person) */}
      <path 
        d="M4 9 L11 13" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      <path 
        d="M28 9 L21 13" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
    </svg>
  );
}
