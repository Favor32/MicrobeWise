// Simplified, stylised illustrations. Not to scale and not anatomically exact.

export function BacteriaShape() {
  return (
    <g>
      <defs>
        <radialGradient id="gBac" cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#FF7A8C" />
          <stop offset="1" stopColor="#C91832" />
        </radialGradient>
      </defs>
      <g transform="rotate(-30 100 100)">
        {/* flagellum */}
        <path
          d="M150 100 q6 -12 12 0 t12 0 t12 0"
          fill="none"
          stroke="#C91832"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* pili */}
        {[70, 90, 110, 130].map((x) => (
          <g key={x} stroke="#C91832" strokeWidth="2.5" strokeLinecap="round">
            <line x1={x} y1="78" x2={x} y2="68" />
            <line x1={x} y1="122" x2={x} y2="132" />
          </g>
        ))}
        {/* rod-shaped cell */}
        <rect x="50" y="78" width="100" height="44" rx="22" fill="url(#gBac)" />
        <ellipse cx="82" cy="90" rx="20" ry="6" fill="#fff" opacity="0.25" />
        {/* hint of genetic material */}
        <path
          d="M72 102 q9 -10 18 0 t18 0 t18 0"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.5"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </g>
  );
}

export function VirusShape() {
  const spikes = Array.from({ length: 14 }, (_, i) => i * (360 / 14));
  return (
    <g>
      <defs>
        <radialGradient id="gVir" cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#FF8A9A" />
          <stop offset="1" stopColor="#A8122A" />
        </radialGradient>
      </defs>
      {spikes.map((a) => (
        <g key={a} transform={`rotate(${a} 100 100)`}>
          <line
            x1="100"
            y1="58"
            x2="100"
            y2="40"
            stroke="#C91832"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="100" cy="35" r="6" fill="#C91832" />
        </g>
      ))}
      <circle cx="100" cy="100" r="44" fill="url(#gVir)" />
      <circle
        cx="100"
        cy="100"
        r="30"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeDasharray="4 5"
      />
      <ellipse cx="86" cy="82" rx="14" ry="8" fill="#fff" opacity="0.25" />
    </g>
  );
}

export function FungusShape() {
  return (
    <g>
      <defs>
        <radialGradient id="gFun" cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#FFA3AF" />
          <stop offset="1" stopColor="#D8344B" />
        </radialGradient>
      </defs>
      {/* thread-like hypha with cross-walls */}
      <path
        d="M24 168 C56 150 84 180 122 162 S160 152 178 166"
        fill="none"
        stroke="#E8566A"
        strokeWidth="11"
        strokeLinecap="round"
      />
      {[58, 92, 128, 158].map((x, i) => (
        <line
          key={x}
          x1={x}
          y1={i % 2 === 0 ? 156 : 168}
          x2={x}
          y2={i % 2 === 0 ? 176 : 186}
          stroke="#fff"
          strokeOpacity="0.7"
          strokeWidth="2"
        />
      ))}
      {/* budding yeast cells */}
      <circle cx="82" cy="98" r="38" fill="url(#gFun)" />
      <circle cx="130" cy="66" r="22" fill="url(#gFun)" />
      <circle cx="140" cy="112" r="14" fill="url(#gFun)" />
      <ellipse cx="68" cy="84" rx="14" ry="8" fill="#fff" opacity="0.28" />
      <circle cx="86" cy="102" r="9" fill="#fff" opacity="0.3" />
    </g>
  );
}

export function ParasiteShape() {
  return (
    <g>
      <defs>
        <radialGradient id="gPar" cx="40%" cy="35%" r="80%">
          <stop offset="0" stopColor="#FFE3E6" />
          <stop offset="1" stopColor="#F29AA7" />
        </radialGradient>
      </defs>
      {/* red blood cell */}
      <circle cx="100" cy="100" r="62" fill="url(#gPar)" />
      <ellipse
        cx="100"
        cy="100"
        rx="30"
        ry="30"
        fill="#fff"
        opacity="0.35"
      />
      {/* ring-stage parasite inside */}
      <circle
        cx="112"
        cy="94"
        r="17"
        fill="none"
        stroke="#7A0F1F"
        strokeWidth="6"
      />
      <circle cx="124" cy="82" r="5.5" fill="#7A0F1F" />
    </g>
  );
}

const shapes = {
  bacteria: BacteriaShape,
  viruses: VirusShape,
  fungi: FungusShape,
  parasites: ParasiteShape,
};

/** One illustration in its own square canvas (used on cards). */
export function MicrobeIcon({ type, className = "" }) {
  const Shape = shapes[type];
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <Shape />
    </svg>
  );
}

/** Moves and resizes a shape inside the big hero canvas. */
function Place({ x, y, s, className = "", children }) {
  return (
    <g className={className}>
      <g transform={`translate(${x} ${y}) scale(${s}) translate(-100 -100)`}>
        {children}
      </g>
    </g>
  );
}

/** The large composition shown in the hero section. */
export function HeroArt({ className = "" }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      role="img"
      aria-label="Simplified illustration of a bacterium, a virus, a fungus and a malaria parasite inside a red blood cell, shown as if under a microscope"
    >
      {/* microscope field of view */}
      <circle cx="250" cy="250" r="236" fill="#FFF1F2" />
      <circle
        cx="250"
        cy="250"
        r="236"
        fill="none"
        stroke="#F0E5E7"
        strokeWidth="2"
      />
      <circle
        cx="250"
        cy="250"
        r="200"
        fill="none"
        stroke="#C91832"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        strokeDasharray="3 8"
      />

      <Place x={335} y={150} s={0.85} className="float-slow">
        <BacteriaShape />
      </Place>
      <Place x={150} y={205} s={0.95} className="float-slow float-delay">
        <VirusShape />
      </Place>
      <Place x={185} y={365} s={0.8} className="float-slow">
        <ParasiteShape />
      </Place>
      <Place x={350} y={345} s={0.9} className="float-slow float-delay">
        <FungusShape />
      </Place>

      {/* small floating particles */}
      <circle cx="250" cy="78" r="6" fill="#C91832" opacity="0.5" />
      <circle cx="418" cy="250" r="8" fill="#C91832" opacity="0.25" />
      <circle cx="268" cy="262" r="5" fill="#C91832" opacity="0.35" />
      <circle cx="84" cy="330" r="7" fill="#C91832" opacity="0.25" />
    </svg>
  );
}