export function DeveloperIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration of a software engineer coding at a desk"
    >
      <defs>
        <linearGradient id="deskGlow" x1="80" y1="80" x2="440" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818CF8" stopOpacity="0.18" />
          <stop offset="1" stopColor="#09090B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="screenGlow" x1="190" y1="170" x2="360" y2="290" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" stopOpacity="0.55" />
          <stop offset="1" stopColor="#1E1B4B" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect x="36" y="40" width="448" height="400" rx="36" fill="url(#deskGlow)" />
      <rect x="36" y="40" width="448" height="400" rx="36" stroke="#FFFFFF" strokeOpacity="0.06" />

      {/* subtle code fragments */}
      <text x="64" y="88" fill="#A1A1AA" fillOpacity="0.35" fontFamily="ui-monospace, monospace" fontSize="14">
        {"</>"}
      </text>
      <text x="410" y="102" fill="#A1A1AA" fillOpacity="0.28" fontFamily="ui-monospace, monospace" fontSize="12">
        {"{}"}
      </text>
      <text x="78" y="390" fill="#818CF8" fillOpacity="0.35" fontFamily="ui-sans-serif, system-ui" fontSize="11">
        React Native
      </text>
      <text x="380" y="390" fill="#A1A1AA" fillOpacity="0.35" fontFamily="ui-sans-serif, system-ui" fontSize="11">
        TypeScript
      </text>

      {/* floor / desk shadow */}
      <ellipse cx="260" cy="392" rx="150" ry="18" fill="#000" fillOpacity="0.28" />

      {/* desk */}
      <rect x="110" y="320" width="300" height="18" rx="6" fill="#27272A" />
      <rect x="128" y="338" width="16" height="42" rx="4" fill="#3F3F46" />
      <rect x="376" y="338" width="16" height="42" rx="4" fill="#3F3F46" />

      {/* laptop base */}
      <path d="M170 304h180l18 16H152l18-16Z" fill="#3F3F46" />
      <rect x="188" y="188" width="144" height="116" rx="10" fill="#18181B" stroke="#52525B" />
      <rect x="198" y="198" width="124" height="88" rx="6" fill="url(#screenGlow)" />
      <rect x="248" y="292" width="24" height="4" rx="2" fill="#52525B" />

      {/* code lines on screen */}
      <rect x="208" y="212" width="52" height="5" rx="2.5" fill="#C7D2FE" fillOpacity="0.85" />
      <rect x="208" y="224" width="78" height="5" rx="2.5" fill="#E4E4E7" fillOpacity="0.45" />
      <rect x="208" y="236" width="64" height="5" rx="2.5" fill="#A5B4FC" fillOpacity="0.7" />
      <rect x="208" y="248" width="88" height="5" rx="2.5" fill="#E4E4E7" fillOpacity="0.35" />
      <rect x="208" y="260" width="42" height="5" rx="2.5" fill="#818CF8" fillOpacity="0.8" />

      {/* mug */}
      <rect x="360" y="292" width="22" height="26" rx="5" fill="#3F3F46" />
      <path d="M382 298h8a8 8 0 0 1 0 16h-8" stroke="#52525B" strokeWidth="3" />

      {/* chair back */}
      <rect x="214" y="250" width="92" height="70" rx="18" fill="#1F1F23" />

      {/* person torso */}
      <path d="M232 248c8-28 48-28 56 0l8 56H224l8-56Z" fill="#312E81" />
      <path d="M236 262c14-8 34-8 48 0" stroke="#818CF8" strokeOpacity="0.4" strokeWidth="3" />

      {/* arms */}
      <path d="M228 276c-18 10-28 28-30 42" stroke="#A8A29E" strokeWidth="10" strokeLinecap="round" />
      <path d="M292 276c18 10 28 28 30 42" stroke="#A8A29E" strokeWidth="10" strokeLinecap="round" />
      {/* hands on keyboard */}
      <ellipse cx="204" cy="316" rx="10" ry="6" fill="#A8A29E" />
      <ellipse cx="316" cy="316" rx="10" ry="6" fill="#A8A29E" />

      {/* neck + head */}
      <rect x="248" y="188" width="24" height="22" rx="8" fill="#A8A29E" />
      <circle cx="260" cy="164" r="32" fill="#A8A29E" />
      {/* hair */}
      <path d="M230 156c4-28 56-28 60 0-10-14-50-14-60 0Z" fill="#18181B" />
      <path d="M228 168c8-20 56-20 64 0v8c-12-14-52-14-64 0v-8Z" fill="#27272A" />

      {/* headphones */}
      <path d="M228 160c0-24 20-40 32-40s32 16 32 40" stroke="#52525B" strokeWidth="6" fill="none" />
      <rect x="220" y="156" width="14" height="24" rx="7" fill="#3F3F46" />
      <rect x="286" y="156" width="14" height="24" rx="7" fill="#3F3F46" />

      {/* floating accent chip */}
      <rect x="392" y="210" width="54" height="28" rx="10" fill="#18181B" stroke="#6366F1" strokeOpacity="0.45" />
      <text x="404" y="228" fill="#C7D2FE" fontFamily="ui-monospace, monospace" fontSize="11">
        RN
      </text>
    </svg>
  );
}
