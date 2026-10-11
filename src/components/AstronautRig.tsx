import React from 'react';

interface AstronautRigProps {
  velocity?: number; // scroll velocity for tilt and thruster flame scale
  isDragging?: boolean;
  scale?: number;
  className?: string;
}

export const AstronautRig: React.FC<AstronautRigProps> = ({
  velocity = 0,
  isDragging = false,
  scale = 1,
  className = ''
}) => {
  // Compute tilt angle based on velocity (-18deg to +18deg)
  const clampedVel = Math.max(-25, Math.min(25, velocity));
  const tiltDeg = isDragging ? -8 : clampedVel * 0.7;

  // Flame intensity
  const isMoving = Math.abs(velocity) > 0.5 || isDragging;
  const flameScale = isDragging
    ? 1.6
    : isMoving
    ? Math.min(1.8, 0.8 + Math.abs(clampedVel) * 0.04)
    : 0.5;

  return (
    <div
      className={`astronaut-rig inline-block select-none pointer-events-none transition-transform duration-150 ${className}`}
      style={{
        transform: `scale(${scale}) rotate(${tiltDeg}deg)`,
        transformOrigin: '50% 60%'
      }}
    >
      <svg
        viewBox="0 0 160 200"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Helmet Visor Cosmic Reflection Gradient */}
          <linearGradient id="visor-grad" x1="0.1" y1="0.1" x2="0.9" y2="0.9">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#1B2A4A" />
            <stop offset="70%" stopColor="#0B0F19" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0.8" />
          </linearGradient>

          {/* Plasma Flame Gradient */}
          <linearGradient id="plasma-flame" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#00F0FF" />
            <stop offset="65%" stopColor="#FF2E93" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Gold Thruster Flame */}
          <linearGradient id="gold-flame" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFB800" />
            <stop offset="70%" stopColor="#FF3E00" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="plasma-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= JETPACK & THRUSTER FLAMES ================= */}
        {/* Left Thruster Exhaust Flame */}
        <g
          transform={`translate(42, 134) scale(1, ${flameScale})`}
          filter="url(#plasma-glow)"
          opacity={isMoving ? 0.95 : 0.4}
        >
          <path
            d="M-6 0 C-10 16, -4 34, 0 46 C4 34, 10 16, 6 0 Z"
            fill="url(#plasma-flame)"
          />
          <path
            d="M-3 0 C-5 10, -2 22, 0 30 C2 22, 5 10, 3 0 Z"
            fill="#FFFFFF"
          />
        </g>

        {/* Right Thruster Exhaust Flame */}
        <g
          transform={`translate(118, 134) scale(1, ${flameScale})`}
          filter="url(#plasma-glow)"
          opacity={isMoving ? 0.95 : 0.4}
        >
          <path
            d="M-6 0 C-10 16, -4 34, 0 46 C4 34, 10 16, 6 0 Z"
            fill="url(#gold-flame)"
          />
          <path
            d="M-3 0 C-5 10, -2 22, 0 30 C2 22, 5 10, 3 0 Z"
            fill="#FFFFFF"
          />
        </g>

        {/* Jetpack Tanks & Frame (behind body) */}
        <g stroke="#070913" strokeWidth="3.5" strokeLinejoin="round">
          {/* Left Tank */}
          <rect x="32" y="74" width="20" height="58" rx="8" fill="#1C2438" />
          {/* Right Tank */}
          <rect x="108" y="74" width="20" height="58" rx="8" fill="#1C2438" />
          {/* Connecting Manifold */}
          <path d="M48 94 H112" stroke="#00F0FF" strokeWidth="4" />
          <path d="M48 116 H112" stroke="#2D3A58" strokeWidth="3" />

          {/* Nozzle Bells */}
          <path d="M34 128 L30 138 H54 L50 128 Z" fill="#2A354E" />
          <path d="M110 128 L106 138 H130 L126 128 Z" fill="#2A354E" />
        </g>

        {/* ================= ASTRONAUT SUIT BODY ================= */}
        {/* Legs & Boots */}
        <g stroke="#070913" strokeWidth="3.5" strokeLinejoin="round">
          {/* Left Leg */}
          <path d="M60 132 L54 168 L44 172" fill="#E2E8F0" />
          {/* Right Leg */}
          <path d="M100 132 L106 168 L116 172" fill="#E2E8F0" />

          {/* Left Boot */}
          <path
            d="M42 168 H66 C68 174 66 182 64 184 H36 C34 180 36 172 42 168 Z"
            fill="#0F172A"
          />
          {/* Right Boot */}
          <path
            d="M94 168 H118 C124 172 126 180 124 184 H96 C94 182 92 174 94 168 Z"
            fill="#0F172A"
          />
          {/* Boot Soles (High-grip tread) */}
          <line x1="36" y1="184" x2="64" y2="184" stroke="#00F0FF" strokeWidth="3.5" />
          <line x1="96" y1="184" x2="124" y2="184" stroke="#FFB800" strokeWidth="3.5" />
        </g>

        {/* Torso & Flight Suit */}
        <g stroke="#070913" strokeWidth="3.5" strokeLinejoin="round">
          {/* Main Torso */}
          <path
            d="M52 74 C50 68 58 64 80 64 C102 64 110 68 108 74 L114 134 C114 140 106 142 80 142 C54 142 46 140 46 134 Z"
            fill="#F8FAFC"
          />

          {/* Chest Utility Pack */}
          <rect x="62" y="80" width="36" height="38" rx="6" fill="#0F172A" />

          {/* Chest Indicators & Telemetry LEDs */}
          <circle cx="70" cy="88" r="3" fill="#00FF88" />
          <circle cx="80" cy="88" r="3" fill="#00F0FF" />
          <circle cx="90" cy="88" r="3" fill="#FF2E93" />

          {/* Chest Digital Grid / Callout */}
          <rect x="67" y="96" width="26" height="15" rx="3" fill="#030712" />
          <text
            x="80"
            y="108"
            textAnchor="middle"
            fill="#00F0FF"
            fontSize="8"
            fontFamily="monospace"
            fontWeight="bold"
          >
            28-EVA
          </text>

          {/* Oxygen Hoses */}
          <path
            d="M56 86 C50 94 52 108 62 110"
            fill="none"
            stroke="#00F0FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M104 86 C110 94 108 108 98 110"
            fill="none"
            stroke="#FFB800"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Utility Belt */}
          <rect x="50" y="126" width="60" height="10" rx="3" fill="#1E293B" />
          <rect x="74" y="124" width="12" height="14" rx="2" fill="#FFB800" />
        </g>

        {/* Arms & Hands */}
        <g stroke="#070913" strokeWidth="3.5" strokeLinejoin="round">
          {/* Left Arm */}
          <path
            d="M52 76 C40 84 34 98 32 112 L42 116 C44 104 48 94 58 88 Z"
            fill="#F1F5F9"
          />
          {/* Left Glove */}
          <circle cx="35" cy="118" r="8" fill="#0F172A" />

          {/* Right Arm (Posed with control joystick or gesture) */}
          <path
            d="M108 76 C120 84 126 98 128 112 L118 116 C116 104 112 94 102 88 Z"
            fill="#F1F5F9"
          />
          {/* Right Glove */}
          <circle cx="125" cy="118" r="8" fill="#0F172A" />

          {/* Mission Arm Patch (Left Shoulder) */}
          <rect x="42" y="86" width="7" height="10" rx="2" fill="#FF2E93" />
        </g>

        {/* ================= HELMET & VISOR ================= */}
        <g stroke="#070913" strokeWidth="3.5" strokeLinejoin="round">
          {/* Helmet Outer Shell */}
          <ellipse cx="80" cy="44" rx="34" ry="32" fill="#F8FAFC" />

          {/* Helmet Collar Ring */}
          <rect x="56" y="64" width="48" height="10" rx="4" fill="#0F172A" />

          {/* Visor Bezel */}
          <ellipse cx="80" cy="42" rx="26" ry="22" fill="#070913" />

          {/* Reflective Visor Screen */}
          <ellipse cx="80" cy="42" rx="24" ry="20" fill="url(#visor-grad)" />

          {/* Visor Glint / Reflection Highlight */}
          <path
            d="M64 30 C72 26 88 26 96 32 C92 36 78 36 64 30 Z"
            fill="#FFFFFF"
            opacity="0.75"
          />
          <ellipse cx="68" cy="46" rx="4" ry="7" fill="#FFFFFF" opacity="0.4" />

          {/* Visor HUD overlay when active/dragging */}
          {isDragging && (
            <text
              x="80"
              y="46"
              textAnchor="middle"
              fill="#00FF88"
              fontSize="6"
              fontFamily="monospace"
              fontWeight="bold"
            >
              [LOCKED]
            </text>
          )}

          {/* Helmet Antenna / Comms Beacon */}
          <line x1="104" y1="24" x2="114" y2="12" stroke="#070913" strokeWidth="3" />
          <circle cx="115" cy="11" r="3.5" fill="#FF2E93" />
        </g>
      </svg>
    </div>
  );
};
