import {motion} from 'motion/react';
import {ArrowUpRight, Sparkles} from 'lucide-react';
import ceoConventionImage from '../assets/images/ceo-convention-client.jpg';

export function CeoConventionSection() {
  return (
    <section id="ceo-convention" className="overflow-hidden bg-[#30221d] text-[#fbf7f1]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.7}} className="relative order-2 lg:order-1 max-w-md w-full mx-auto">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#c4a782]/60" aria-hidden="true" />
            <img src={ceoConventionImage} alt="Teilnehmerinnen der CEO Lash & Brow Convention 2026" loading="lazy" className="relative w-full h-auto" />
            <div className="absolute -bottom-5 -right-3 sm:-right-7 bg-[#e9d9c5] text-[#493328] px-5 py-4 shadow-lg">
              <span className="block text-[10px] uppercase tracking-[0.22em]">Lash &amp; Brow</span>
              <span className="font-display text-2xl">Convention 2026</span>
            </div>
          </motion.div>

          <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.7, delay: 0.1}} className="order-1 lg:order-2">
            <div className="flex items-center gap-3 text-[#d4b895] text-xs uppercase tracking-[0.24em]">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Inspiration &amp; Weiterentwicklung</span>
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-normal">
              CEO <span className="text-[#d4b895] italic">Convention</span>
            </h2>
            <p className="mt-6 font-display text-xl sm:text-2xl leading-snug text-[#eadbca]">
              Neue Perspektiven. Gemeinsame Leidenschaft.
            </p>
            <p className="mt-6 max-w-lg text-sm sm:text-base leading-[1.8] text-[#e0d1c2]">
              Bei der CEO Lash &amp; Brow Convention treffen Inspiration, Wissen und echte Begegnungen aufeinander. Der Austausch mit anderen Beauty-Expertinnen und neue Impulse für unsere Arbeit machen diesen Moment besonders.
            </p>
            <div className="mt-9 pt-6 border-t border-[#b89c7d]/40 flex items-center gap-4 text-[#e8d6c1]">
              <ArrowUpRight className="w-5 h-5 text-[#d4b895] shrink-0" aria-hidden="true" />
              <p className="text-sm leading-relaxed">Für uns bedeutet Weiterentwicklung: immer mit Liebe zum Detail für Sie da zu sein.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
