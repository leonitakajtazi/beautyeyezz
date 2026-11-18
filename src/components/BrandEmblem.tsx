interface BrandEmblemProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'hero' | 'surface';
}

export function BrandEmblem({size = 'md', variant = 'surface'}: BrandEmblemProps) {
  const dimensions =
    size === 'sm'
      ? 'w-14 h-14'
      : size === 'lg'
        ? 'w-36 h-36 sm:w-44 sm:h-44'
        : 'w-24 h-24 sm:w-28 sm:h-28';

  const titleSize =
    size === 'sm'
      ? 'text-[9px] tracking-[0.18em]'
      : size === 'lg'
        ? 'text-lg sm:text-xl tracking-[0.22em]'
        : 'text-sm sm:text-base tracking-[0.2em]';

  const subSize =
    size === 'sm'
      ? 'text-[5.5px] tracking-[0.14em]'
      : size === 'lg'
        ? 'text-[9px] sm:text-[10px] tracking-[0.22em]'
        : 'text-[7px] sm:text-[8px] tracking-[0.2em]';

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full select-none shrink-0 overflow-hidden ${dimensions} ${
        variant === 'hero'
          ? 'shadow-[0_14px_36px_rgba(32,22,16,0.28)] ring-1 ring-[#DECBB8]/70'
          : 'shadow-[0_8px_24px_rgba(92,68,56,0.10)] ring-1 ring-[#C9B29E]/60'
      }`}
      aria-label="Beauty Eyez Lash & Brow Studio Emblem"
    >
      {/* Circular beige marble backdrop */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="marbleBase" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#FAF6F0" />
            <stop offset="48%" stopColor="#EFE5D8" />
            <stop offset="85%" stopColor="#E3D4C2" />
            <stop offset="100%" stopColor="#D7C4AE" />
          </radialGradient>
          <linearGradient id="champagneRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4BA98" />
            <stop offset="50%" stopColor="#B8976B" />
            <stop offset="100%" stopColor="#D9C2A3" />
          </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="100" fill="url(#marbleBase)" />

        {/* Delicate organic beige marble veining */}
        <path
          d="M-10,68 C25,52 55,78 96,56 C135,35 162,55 210,38"
          fill="none"
          stroke="#C7B198"
          strokeWidth="1.2"
          strokeOpacity="0.45"
        />
        <path
          d="M-5,128 C38,142 74,112 118,136 C154,155 182,124 212,140"
          fill="none"
          stroke="#BCA387"
          strokeWidth="1.4"
          strokeOpacity="0.38"
        />
        <path
          d="M28,18 C52,48 42,88 76,120 C106,148 142,162 172,190"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeOpacity="0.55"
        />
        <path
          d="M148,8 C132,42 152,72 126,105 C106,130 62,154 44,192"
          fill="none"
          stroke="#C2AA8E"
          strokeWidth="0.9"
          strokeOpacity="0.35"
        />

        {/* Fine double champagne ring */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="url(#champagneRing)"
          strokeWidth="1.2"
          strokeOpacity="0.85"
        />
        <circle
          cx="100"
          cy="100"
          r="87"
          fill="none"
          stroke="#B8976B"
          strokeWidth="0.6"
          strokeOpacity="0.45"
        />
      </svg>

      {/* Delicate warm brown serif lettering */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-2">
        <span
          className={`font-display font-medium text-[#5A4235] leading-none uppercase ${titleSize}`}
        >
          BEAUTY EYEZ
        </span>
        <span
          className="my-1.5 h-[1px] w-7 sm:w-9 bg-[#B8976B]/75"
          aria-hidden="true"
        />
        <span
          className={`font-sans font-medium text-[#7A6050] leading-tight uppercase ${subSize}`}
        >
          LASH &amp; BROW STUDIO
        </span>
      </div>
    </div>
  );
}
