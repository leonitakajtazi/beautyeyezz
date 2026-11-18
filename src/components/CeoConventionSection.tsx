import {motion} from 'motion/react';
import ceoConventionImage from '../assets/images/ceo-convention-client.jpg';
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
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs tracking-[0.24em] uppercase text-[#9B7B52] font-medium">
              Branche &amp; Weiterentwicklung
            </span>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#3B2B23] font-normal leading-[1.1]">
              CEO Convention
            </h2>

            <p className="mt-5 text-[15px] sm:text-base text-[#5C4438] leading-[1.75]">
              Auf der CEO Convention sammeln wir neue Inspiration und tauschen uns mit Beauty-Expertinnen aus – für Ihre Behandlung bei Beauty Eyez.
            </p>

          </motion.div>

          {/* Editorial Photo Frame */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-5 flex flex-col w-full max-w-sm mx-auto"
          >
            <div className="flex-1 p-3 sm:p-4 bg-[#FBF9F6] border border-[#DECBB8]/80">
              <StudioImage
                src={ceoConventionImage}
                alt="CEO Convention — Stilvolle Beauty-Branchenveranstaltung"
                className="w-full"
                imgClassName="!h-auto"
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



