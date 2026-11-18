import {motion} from 'motion/react';
import {ArrowDownRight} from 'lucide-react';
import {BrandEmblem} from './BrandEmblem';
import {STUDIO_IMAGES} from '../data/studioData';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({onBookClick}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative min-h-[94vh] flex items-end sm:items-center overflow-hidden bg-[#2A1E18]"
    >
      {/* Full-screen editorial lash & brow photography */}
      <img
        src={STUDIO_IMAGES.hero}
        alt="Beauty Eyez Lash & Brow Studio Nürnberg — Natürliches Lash und Brow Ergebnis"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Measured contrast scrim for WCAG AA legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#241914]/88 via-[#241914]/58 to-[#241914]/15"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#241914]/75 via-transparent to-[#241914]/30"
        aria-hidden="true"
      />

      {/* Hero Editorial Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-16 sm:py-28">
        <motion.div
          initial={{opacity: 0, y: 18}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.75, ease: [0.16, 1, 0.3, 1]}}
          className="max-w-2xl"
        >
          {/* Circular Beige Marble Brand Identity */}
          <div className="flex items-center gap-5 mb-8">
            <BrandEmblem size="md" variant="hero" />
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl tracking-[0.22em] text-[#FBF9F6] uppercase font-medium">
                BEAUTY EYEZ
              </span>
              <span className="text-[11px] sm:text-xs tracking-[0.28em] text-[#DECBB8] uppercase mt-1">
                LASH &amp; BROW STUDIO
              </span>
              <span className="text-xs text-[#DECBB8]/85 mt-1.5 tracking-wide">
                Nürnberg, Deutschland
              </span>
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.08] font-normal text-[#FBF9F6] tracking-tight [text-wrap:balance]">
            Deine Schönheit verdient besondere Aufmerksamkeit.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#EFE7DC]/90 leading-relaxed max-w-xl font-normal">
            Professionelle Lash &amp; Brow Behandlungen in Nürnberg.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FBF9F6] text-[#3B2B23] text-xs tracking-[0.18em] uppercase font-medium hover:bg-[#EFE7DC] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DECBB8]"
            >
              <span>Termin buchen</span>
              <ArrowDownRight className="w-4 h-4 text-[#9B7B52]" aria-hidden="true" />
            </button>

            <a
              href="#leistungen"
              className="inline-flex items-center py-3 px-2 text-xs tracking-[0.16em] uppercase text-[#EFE7DC] hover:text-white border-b border-[#DECBB8]/50 hover:border-[#DECBB8] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DECBB8]"
            >
              Leistungen entdecken
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
