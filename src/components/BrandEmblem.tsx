import logo from '../assets/images/about-beauty-eyez.png';

interface BrandEmblemProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'hero' | 'surface';
}

export function BrandEmblem({size = 'md', variant = 'surface'}: BrandEmblemProps) {
  const dimensions = size === 'sm' ? 'w-14 h-14' : size === 'lg' ? 'w-36 h-36 sm:w-44 sm:h-44' : 'w-24 h-24 sm:w-28 sm:h-28';

  return (
    <span
      className={`relative inline-block rounded-full shrink-0 overflow-hidden ${dimensions} ${variant === 'hero' ? 'shadow-[0_14px_36px_rgba(32,22,16,0.28)]' : 'shadow-[0_8px_24px_rgba(92,68,56,0.10)]'}`}
    >
      <img src={logo} alt="Beauty Eyez Lash & Brow Studio" className="absolute max-w-none" style={{width: '107%', height: '110%', left: '-3%', top: '-3.3%'}} />
    </span>
  );
}

