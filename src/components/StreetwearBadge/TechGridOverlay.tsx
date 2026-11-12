import React from 'react';

interface ITechGridOverlayProps {
  className?: string;
  size?: number;
  color?: string;
}

export const TechGridOverlay: React.FC<ITechGridOverlayProps> = ({
  className = '',
  size = 140,
  color = '#2238FF',
}) => {
  const patternId = React.useId();

  return (
    <div
      className={`relative overflow-hidden pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-35">
        <defs>
          <pattern id={patternId} width="12" height="12" patternUnits="userSpaceOnUse">
            <path
              d="M 12 0 L 0 0 0 12"
              fill="none"
              stroke={color}
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#${patternId})`} />
        <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="28" fill="none" stroke={color} strokeWidth="0.75" />
      </svg>
    </div>
  );
};
