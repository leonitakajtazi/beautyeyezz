import {motion} from 'motion/react';
import {STUDIO_IMAGES} from '../data/studioData';
import {StudioImage} from './StudioImage';

export function CeoConventionSection() {
  return (
    <section
      id="ceo-convention"
      className="py-20 sm:py-28 bg-marble-texture border-b border-[#DECBB8]/55"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Editorial Feature Text */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.7, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs tracking-[0.24em] uppercase text-[#9B7B52] font-medium">
              Branche &amp; Weiterentwicklung
            </span>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#3B2B23] font-normal leading-[1.1]">
              CEO Convention
            </h2>

            <p className="mt-5 text-[15px] sm:text-base text-[#5C4438] leading-[1.75]">
              Stillstand ist für uns keine Option. Bei Beauty Eyez legen wir großen Wert auf
              Qualität, Präzision und kontinuierliche Weiterentwicklung. Die Teilnahme an der CEO
              Convention bietet uns die Möglichkeit, neue Inspirationen zu sammeln, aktuelle
              Trends kennenzulernen und wertvolle Kontakte innerhalb der Beauty-Branche zu
              knüpfen.
            </p>

            {/* Structured Editorial Details */}
            <div className="mt-8 border-t border-[#C9B29E]/60 divide-y divide-[#C9B29E]/60">
              <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs tracking-[0.16em] uppercase text-[#9B7B52] pt-0.5">
                  Die Veranstaltung
                </span>
                <p className="sm:col-span-2 text-sm text-[#3B2B23] leading-relaxed">
                  Ein besonderes Event für Inspiration, Austausch und neue Perspektiven in der
                  Beauty-Branche.
                </p>
              </div>

              <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs tracking-[0.16em] uppercase text-[#9B7B52] pt-0.5">
                  Unsere Teilnahme
                </span>
                <p className="sm:col-span-2 text-sm text-[#3B2B23] leading-relaxed">
                  Austausch mit anderen Beauty-Expertinnen und spannende Einblicke in aktuelle
                  Entwicklungen rund um Lash &amp; Brow.
                </p>
              </div>

              <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs tracking-[0.16em] uppercase text-[#9B7B52] pt-0.5">
                  Neue Inspiration
                </span>
                <p className="sm:col-span-2 text-sm text-[#3B2B23] leading-relaxed">
                  Neue Ideen und Eindrücke, die unsere Leidenschaft für präzise Behandlungen,
                  hochwertige Ergebnisse und ein besonderes Studioerlebnis weiter stärken.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Photo Frame */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="flex-1 p-3 sm:p-4 bg-[#FBF9F6] border border-[#DECBB8]/80">
              <StudioImage
                src={STUDIO_IMAGES.ceoConvention}
                alt="CEO Convention — Stilvolle Beauty-Branchenveranstaltung"
                className="w-full h-full aspect-[4/3] lg:min-h-[420px]"
                fallbackLabel="CEO Convention"
              />
            </div>
            <p className="mt-3 text-xs text-[#6E5649] tracking-wide">
              CEO Convention · Fachlicher Austausch &amp; Weiterentwicklung
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
