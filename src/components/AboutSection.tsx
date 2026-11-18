import {motion} from 'motion/react';
import {BrandEmblem} from './BrandEmblem';
import {StudioImage} from './StudioImage';
import {STUDIO_IMAGES} from '../data/studioData';

export function AboutSection() {
  return (
    <section
      id="ueber-uns"
      className="py-20 sm:py-28 bg-[#FBF9F6] border-b border-[#DECBB8]/45"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Portrait Frame */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.7, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative flex-1 min-h-[420px] lg:min-h-[540px] p-3 sm:p-4 bg-marble-texture border border-[#DECBB8]/70">
              <StudioImage
                src={STUDIO_IMAGES.portrait}
                alt="Beauty Eyez Studio Ästhetik — Natürliche feminine Ausstrahlung"
                className="w-full h-full min-h-[390px] lg:min-h-full"
                fallbackLabel="Beauty Eyez Atelier"
              />
            </div>
            <p className="mt-3 text-xs text-[#6E5649] tracking-wide">
              Beauty Eyez Studio · Nürnberg
            </p>
          </motion.div>

          {/* Right Editorial Narrative */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <BrandEmblem size="sm" variant="surface" />
              <span className="text-xs tracking-[0.24em] uppercase text-[#9B7B52] font-medium">
                Über Beauty Eyez
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.14] text-[#3B2B23] font-normal [text-wrap:balance]">
              Ein Ort der Ruhe für feine Präzision und natürliche feminine Ausstrahlung.
            </h2>

            <div className="mt-7 space-y-5 text-[15px] sm:text-base leading-[1.75] text-[#5C4438] max-w-2xl">
              <p>
                Bei Beauty Eyez in Nürnberg steht Ihre natürliche Schönheit im Mittelpunkt jeder
                Behandlung. Unser Studio wurde mit dem Anspruch geschaffen, einen ruhigen,
                stilvollen Rückzugsort zu bieten, an dem ästhetische Feinarbeit auf persönliche
                Wertschätzung trifft.
              </p>
              <p>
                Jeder Blick und jede Gesichtskontur ist einzigartig. Deshalb verzichten wir auf
                standardisierte Abläufe und nehmen uns Zeit für eine ruhige, individuelle
                Beratung – damit Ihre Wimpern und Augenbrauen harmonisch, gepflegt und
                authentisch wirken.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#DECBB8]/60 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="font-display text-lg text-[#3B2B23]">Spezialisierung</p>
                <p className="mt-1 text-sm text-[#6E5649] leading-relaxed">
                  Fokussiert auf professionelle Lash &amp; Brow Behandlungen
                </p>
              </div>
              <div>
                <p className="font-display text-lg text-[#3B2B23]">Atmosphäre</p>
                <p className="mt-1 text-sm text-[#6E5649] leading-relaxed">
                  Helles, ruhiges Studio-Ambiente im Herzen von Nürnberg
                </p>
              </div>
              <div>
                <p className="font-display text-lg text-[#3B2B23]">Handschrift</p>
                <p className="mt-1 text-sm text-[#6E5649] leading-relaxed">
                  Feine, detailverliebte Ausführung ohne Überladung
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
