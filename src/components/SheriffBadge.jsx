export default function SheriffBadge({ size = 48 }) {
  // 5-pointed star: outer radius 46, inner radius 20, centered at (50,50)
  const outerR = 46;
  const innerR = 20;
  const cx = 50;
  const cy = 50;
  const points = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  const starPoints = points.join(' ');

  return (
    <svg
      className="sheriff-badge"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sheriff Badge"
    >
      <defs>
        <radialGradient id="badgeGold" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="60%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#b8960c" />
        </radialGradient>
        <radialGradient id="badgeFace" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#1a1f8a" />
          <stop offset="100%" stopColor="#03068a" />
        </radialGradient>
      </defs>

      {/* Star body */}
      <polygon
        points={starPoints}
        fill="url(#badgeGold)"
        stroke="#b8960c"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Center badge face circle */}
      <circle cx={cx} cy={cy} r="24" fill="url(#badgeFace)" stroke="#ffd700" strokeWidth="1.5" />

      {/* Inner ring detail */}
      <circle cx={cx} cy={cy} r="21" fill="none" stroke="#ffd700" strokeWidth="0.6" opacity="0.5" />

      {/* SHERIFF text */}
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fill="#ffd700"
        fontSize="7.5"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        letterSpacing="1"
      >
        SHERIFF
      </text>

      {/* Divider line */}
      <line x1="33" y1={cy + 1} x2="67" y2={cy + 1} stroke="#ffd700" strokeWidth="0.7" opacity="0.7" />

      {/* MAYBERRY text */}
      <text
        x={cx}
        y={cy + 10}
        textAnchor="middle"
        fill="#ffd700"
        fontSize="5.5"
        fontFamily="Georgia, serif"
        letterSpacing="0.5"
      >
        MAYBERRY
      </text>

      {/* Small center star */}
      <polygon
        points="50,38 51.2,41.6 55,41.6 52,43.8 53.1,47.5 50,45.3 46.9,47.5 48,43.8 45,41.6 48.8,41.6"
        fill="#ffd700"
        opacity="0.9"
      />
    </svg>
  );
}
