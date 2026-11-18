import {useState} from 'react';
import {Sparkles} from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function StudioImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallbackLabel = 'Beauty Eyez Atelier',
  priority = false,
}: StudioImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-marble-texture ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-marble-texture text-[#5C4438]">
          <Sparkles className="w-6 h-6 text-[#B8976B] mb-2" aria-hidden="true" />
          <span className="font-display text-lg tracking-wide">{fallbackLabel}</span>
          <span className="text-xs text-[#6E5649] mt-1">Lash &amp; Brow Studio · Nürnberg</span>
        </div>
      )}
    </div>
  );
}
