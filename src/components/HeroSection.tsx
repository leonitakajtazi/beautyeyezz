import {motion} from 'motion/react';
import {ArrowDownRight, Sparkles} from 'lucide-react';
import {STUDIO_IMAGES} from '../data/studioData';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({onBookClick}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] sm:min-h-[94vh] flex items-center overflow-hidden bg-[#2A1E18]"
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-10 sm:py-28">
        <motion.div
          initial={{opacity: 0, x: -70}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1, delay: 1.65, ease: [0.16, 1, 0.3, 1]}}
          className="max-w-2xl"
        >
          <div className="mb-7 flex items-center gap-3 text-[#ead1b1]">
            <Sparkles className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em]">Lash &amp; Brow Studio · Nürnberg</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.75rem] leading-[1.04] font-normal text-[#FBF9F6] tracking-tight [text-wrap:balance]">
            Dein Blick.<br />
            <span className="italic text-[#e6c9a8]">Dein Moment.</span>
          </h1>

          <div className="mt-6 flex items-start gap-4 max-w-lg">
            <p className="text-base sm:text-lg text-[#f4e9dc] leading-relaxed font-normal">
              Entdecke Lash &amp; Brow Behandlungen, die deine natürliche Schönheit zum Strahlen bringen.
            </p>
          </div>
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




