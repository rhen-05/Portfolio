import React from 'react';

interface IStreetwearBadgeProps {
  text?: string;
  size?: number;
  className?: string;
  color?: string;
  monogram?: string;
}

export const StreetwearBadge: React.FC<IStreetwearBadgeProps> = ({
  text = '★ RHANENDRA PRADIPTA ★ CREATIVE ARCHITECT ★ 2026 ★',
  size = 110,
  className = '',
  color = '#087F5B',
  monogram = 'RP',
}) => {
  const pathId = React.useId();

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Rotating Circular Text Ring */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow origin-center"
        style={{ animationDuration: '22s' }}
      >
        <defs>
          <path
            id={pathId}
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.4"
        />
        <text
          fill={color}
          fontSize="7.8"
          fontWeight="800"
          letterSpacing="1.8"
          className="font-mono uppercase"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Static Center Monogram / Crosshair */}
      <div
        className="absolute inset-0 m-auto w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-black/80 backdrop-blur-sm"
        style={{ borderColor: `${color}40` }}
      >
        <span
          className="font-display font-black text-xs tracking-tight"
          style={{ color }}
        >
          {monogram}
        </span>
      </div>
    </div>
  );
};
