import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-6 h-6', size = 28 }) => {
  const normalized = name.toLowerCase();

  // 1. HTML5
  if (normalized.includes('html')) {
    return (
      <svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M71 460L32 24h448l-39 436-185 52-185-52z" fill="#E44D26" />
        <path d="M256 472l153-43 33-373H256v416z" fill="#F16529" />
        <path d="M256 176h78l-7 84H256v64h73l-13 147-60 17v68l119-33 1-9 20-226 2-24H256v-88zm0-88v64h152l6-64H256z" fill="#EBEBEB" />
        <path d="M256 176v64h-78l-7-84h85v-64h-152l6 64 2 24 20 226 1 9 119 33v-68l-60-17-13-147h73v-64h-85z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 2. CSS3
  if (normalized.includes('css')) {
    return (
      <svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M71 460L32 24h448l-39 436-185 52-185-52z" fill="#1572B6" />
        <path d="M256 472l153-43 33-373H256v416z" fill="#33A9DC" />
        <path d="M256 208h74l-7 74H256v64h66l-13 133-53 15v66l113-31 2-20 23-237 2-24H256v-64zm0-120v64h152l6-64H256z" fill="#EBEBEB" />
        <path d="M256 208v64h-74l-6-74h80v-64H110l6 64 2 24 19 205 119 32v-66l-53-15-13-133h74v-64h-80z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 3. JavaScript
  if (normalized.includes('javascript') || normalized.includes('esnext') || normalized === 'js') {
    return (
      <svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="512" height="512" rx="64" fill="#F7DF1E" />
        <path
          d="M292.4 378.8c4.9 8.2 11.7 15.1 22.4 15.1 11.2 0 18.3-5.6 18.3-26.9V217h47.8v150.3c0 42.6-24.9 61.9-63.5 61.9-34.5 0-54.3-17.8-64.5-39.3l39.5-21.1zm-136.5-1.9c7.9 13.9 19.3 22.4 36.9 22.4 16.3 0 26.6-8.2 26.6-19.4 0-13.4-10.7-18.4-28.7-26.2l-9.8-4.2c-28.3-12.1-47-27.4-47-60 0-29.8 23.3-52.6 59.9-52.6 25.8 0 44.3 9 56.6 30.5l-37 23.8c-6.1-10.9-13.6-15.1-22.1-15.1-9.9 0-16.3 6.2-16.3 14.3 0 10.3 6.9 14.8 22.7 21.6l9.8 4.2c33.3 14.3 53.6 29 53.6 62.7 0 35.7-28 55.4-69.8 55.4-38.9 0-63.8-18.4-74.9-42.5l39.7-25.3z"
          fill="#000000"
        />
      </svg>
    );
  }

  // 4. React & TypeScript
  if (normalized.includes('react')) {
    return (
      <svg
        viewBox="-11.5 -10.23174 23 20.46348"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // 5. Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg
        viewBox="0 0 54 33"
        width={size}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // 6. Node.js
  if (normalized.includes('node')) {
    return (
      <svg
        viewBox="0 0 256 289"
        width={size}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M128 0L249 70v140L128 280 7 210V70L128 0z"
          fill="#539E43"
        />
        <path
          d="M128 280V140l121-70v140L128 280z"
          fill="#417E38"
        />
        <path
          d="M128 140L7 70l121-70 121 70-121 70z"
          fill="#5FA04E"
        />
        <path
          d="M145 92c-15-5-29 3-31 16-2 15 8 26 21 31 15 5 19 11 18 19-2 11-13 15-26 12-10-3-15-10-16-17l-19 6c3 13 12 24 28 28 20 5 39-4 42-20 2-16-9-27-23-32-13-5-17-10-16-17 1-10 12-13 22-10 9 2 13 8 14 14l18-7c-2-12-11-20-28-23z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 7. Express.js
  if (normalized.includes('express')) {
    return (
      <svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="256" height="256" rx="48" fill="#1A1A1A" />
        <text
          x="128"
          y="158"
          fill="#FFFFFF"
          fontSize="110"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          textAnchor="middle"
          letterSpacing="-4"
        >
          ex
        </text>
      </svg>
    );
  }

  // 8. PHP
  if (normalized.includes('php')) {
    return (
      <svg
        viewBox="0 0 256 136"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M128 0C57.3 0 0 30.4 0 68s57.3 68 128 68 128-30.4 128-68-57.3-68-128-68z"
          fill="#777BB4"
        />
        <path
          d="M62 42h22c13.2 0 22 5.5 22 17 0 16-14 26-29 26H64l-6 25H42l16-68h4zm14 28h8c7 0 12-3 12-9 0-5-3-8-8-8h-8l-4 17zm77-28h16l-16 68h-16l6-25h-15c-15 0-24-10-24-26 0-11.5 8.8-17 22-17h27zm-11 28h-9c-5 0-8 3-8 8 0 6 5 9 12 9h8l-3-17zm75-28h22c13.2 0 22 5.5 22 17 0 16-14 26-29 26h-13l-6 25h-16l16-68h4zm14 28h8c7 0 12-3 12-9 0-5-3-8-8-8h-8l-4 17z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 9. Laravel
  if (normalized.includes('laravel')) {
    return (
      <svg
        viewBox="0 0 256 261"
        width={size}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M239.5 53.6L143.2.7c-9.8-5.4-21.7-5.4-31.5 0L15.3 53.6c-9.4 5.2-15.3 15-15.3 25.8v103.3c0 10.7 5.8 20.6 15.3 25.8l96.4 52.9c9.8 5.4 21.7 5.4 31.5 0l96.4-52.9c9.4-5.2 15.3-15 15.3-25.8V79.4c-.1-10.8-5.9-20.6-15.4-25.8z"
          fill="#FF2D20"
        />
        <path
          d="M205.8 82.5l-65.7-36.1c-6.8-3.7-15.1-3.7-21.9 0L52.5 82.5c-6.5 3.6-10.6 10.4-10.6 17.9v71.7c0 7.4 4.1 14.3 10.6 17.9l65.7 36.1c6.8 3.7 15.1 3.7 21.9 0l65.7-36.1c6.5-3.6 10.6-10.4 10.6-17.9v-71.7c0-7.5-4.1-14.3-10.6-17.9z"
          fill="#FFFFFF"
        />
        <path
          d="M174.5 106.8l-37.4-20.5c-3.9-2.1-8.6-2.1-12.5 0l-37.4 20.5c-3.7 2.1-6 6-6 10.2v40.8c0 4.2 2.3 8.1 6 10.2l37.4 20.5c3.9 2.1 8.6 2.1 12.5 0l37.4-20.5c3.7-2.1 6-6 6-10.2V117c0-4.2-2.3-8.1-6-10.2z"
          fill="#FF2D20"
        />
      </svg>
    );
  }

  // 10. Git
  if (normalized === 'git') {
    return (
      <svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M249.2 113.8L142.2 6.8c-9.1-9.1-23.8-9.1-32.9 0L87.4 28.7l39.5 39.5c9.8-3.3 21.3-.9 28.9 6.7 7.7 7.7 10 19.4 6.6 29.3l38 38c9.9-3.4 21.6-1.1 29.3 6.6 10.8 10.8 10.8 28.4 0 39.2-10.8 10.8-28.4 10.8-39.2 0-8-8-10.1-20.1-6.2-30.2L148 119.9v69.2c2.6 1.3 5 3.1 7 5.1 10.8 10.8 10.8 28.4 0 39.2-10.8 10.8-28.4 10.8-39.2 0-10.8-10.8-10.8-28.4 0-39.2 2.7-2.7 6-4.7 9.6-5.8v-70.3c-3.6-1.1-6.9-3.1-9.6-5.8-8-8-10-19.9-6.3-30L69.8 42.6 6.8 105.6c-9.1 9.1-9.1 23.8 0 32.9l107 107c9.1 9.1 23.8 9.1 32.9 0l102.5-102.5c9.1-9.1 9.1-23.8 0-32.9z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // 11. GitHub
  if (normalized.includes('github')) {
    return (
      <svg
        viewBox="0 0 98 96"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // 12. Figma
  if (normalized.includes('figma')) {
    return (
      <svg
        viewBox="0 0 200 300"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0ACF83" />
        <path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#A259FF" />
        <path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#F24E1E" />
        <path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" fill="#FF7262" />
        <circle cx="150" cy="150" r="50" fill="#1ABCFE" />
      </svg>
    );
  }

  // 13. VS Code
  if (normalized.includes('code') || normalized.includes('vs')) {
    return (
      <svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M176.4 252.8l68.7-33.3c7.3-3.5 11.9-10.9 11.9-19V55.5c0-8.1-4.6-15.5-11.9-19L176.4 3.2c-5.8-2.8-12.7-1.7-17.3 2.7l-85.3 80.2L32.2 54.4c-4.4-3.5-10.7-3.7-15.3-.7L2.4 63.6C.8 64.7 0 66.5 0 68.4c0 1.2.4 2.3 1.2 3.1l62.1 56.5L1.2 184.5c-.8.8-1.2 1.9-1.2 3.1 0 1.9.8 3.7 2.4 4.8l14.5 9.9c4.6 3.1 10.9 2.8 15.3-.7l41.6-31.7 85.3 80.2c4.6 4.4 11.5 5.5 17.3 2.7z"
          fill="#007ACC"
        />
        <path
          d="M176.4 3.2l-102.6 96.6 102.6 96.6V3.2z"
          fill="#0065A9"
        />
      </svg>
    );
  }

  // 14. Linux
  if (normalized.includes('linux')) {
    return (
      <svg
        viewBox="0 0 340 340"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tux Penguin Minimal / Modern */}
        <ellipse cx="170" cy="180" rx="90" ry="120" fill="#222226" />
        <ellipse cx="170" cy="195" rx="65" ry="90" fill="#FFFFFF" />
        <circle cx="140" cy="110" r="12" fill="#FFFFFF" />
        <circle cx="200" cy="110" r="12" fill="#FFFFFF" />
        <circle cx="143" cy="110" r="6" fill="#000000" />
        <circle cx="197" cy="110" r="6" fill="#000000" />
        {/* Beak */}
        <polygon points="170,120 150,145 190,145" fill="#FFA500" />
        {/* Feet */}
        <ellipse cx="125" cy="300" rx="35" ry="16" fill="#FFA500" />
        <ellipse cx="215" cy="300" rx="35" ry="16" fill="#FFA500" />
      </svg>
    );
  }

  // 15. Wireshark
  if (normalized.includes('wireshark')) {
    return (
      <svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="256" height="256" rx="56" fill="#0E2A47" />
        {/* Shark Fin Wave */}
        <path
          d="M48 184c36 0 72-18 96-64 16-30 32-68 48-68 4 0 8 3 8 9 0 28-20 84-60 111-28 19-64 12-92 12z"
          fill="#1679A7"
        />
        <path
          d="M192 61c-16 0-32 38-48 68-24 46-60 64-96 64h156c-4-40-7-94-12-132z"
          fill="#37A8E0"
          opacity="0.4"
        />
      </svg>
    );
  }

  // 16. Burp Suite
  if (normalized.includes('burp')) {
    return (
      <svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="256" height="256" rx="56" fill="#FF6633" />
        <path
          d="M60 52h64c36 0 60 22 60 52 0 18-9 32-23 40 20 8 31 24 31 46 0 34-26 54-68 54H60V52zm44 72h18c14 0 22-8 22-19s-8-19-22-19h-18v38zm0 84h22c16 0 26-9 26-22s-10-22-26-22h-22v44z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 17. Nmap
  if (normalized.includes('nmap')) {
    return (
      <svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="256" height="256" rx="56" fill="#182238" />
        <circle cx="128" cy="128" r="80" stroke="#087F5B" strokeWidth="6" opacity="0.4" />
        <circle cx="128" cy="128" r="50" stroke="#087F5B" strokeWidth="6" opacity="0.7" />
        <circle cx="128" cy="128" r="20" fill="#087F5B" />
        <path d="M128 48v160M48 128h160" stroke="#087F5B" strokeWidth="4" opacity="0.5" />
        <path d="M128 128L184 72" stroke="#20C997" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // 18. Networking & TCP-IP
  if (normalized.includes('network') || normalized.includes('tcp')) {
    return (
      <svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="256" height="256" rx="56" fill="#087F5B" />
        {/* Router / Network Topology */}
        <circle cx="128" cy="68" r="24" fill="#FFFFFF" />
        <circle cx="68" cy="188" r="24" fill="#FFFFFF" />
        <circle cx="188" cy="188" r="24" fill="#FFFFFF" />
        <path
          d="M128 92v44m0 0L68 164m60-28l60 28"
          stroke="#FFFFFF"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Default fallback icon
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-xl bg-[#087F5B]/10 text-[#087F5B] flex items-center justify-center font-mono font-bold text-xs uppercase ${className}`}
    >
      {name.substring(0, 2)}
    </div>
  );
};
