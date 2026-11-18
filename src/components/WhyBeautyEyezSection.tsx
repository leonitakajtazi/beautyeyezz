import {motion} from 'motion/react';
import {Heart, Sparkles, Eye} from 'lucide-react';
import {WHY_BEAUTY_EYEZ_PILLARS} from '../data/studioData';

const icons = [Heart, Sparkles, Eye];

export function WhyBeautyEyezSection() {
  return (
    <section id="warum-beauty-eyez" className="relative overflow-hidden bg-[#f5efe6] py-20 sm:py-28 border-b border-[#decbb8]/50">
      <div aria-hidden="true" className="absolute -top-32 -right-24 h-80 w-80 rounded-full border border-[#c9b29e]/30" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs tracking-[0.24em] uppercase text-[#9b7b52] font-medium">Warum Beauty Eyez</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[#3b2b23] leading-[1.12] font-normal">
            Schönheit liegt im <span className="italic text-[#9b7b52]">Detail.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[#6e5649] leading-relaxed">Zeit für Sie, ein Blick für das Besondere und Ergebnisse, die sich nach Ihnen anfühlen.</p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {WHY_BEAUTY_EYEZ_PILLARS.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <motion.article key={pillar.index} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, margin: '-40px'}} transition={{duration: 0.5, delay: index * 0.1}} className="group relative overflow-hidden bg-[#fbf9f6] border border-[#decbb8]/70 p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(92,68,56,0.1)]">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#eee3d5] flex items-center justify-center text-[#9b7b52]"><Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" /></div>
                  <span className="font-display text-3xl text-[#d7c3ac]">{pillar.index}</span>
                </div>
                <h3 className="mt-7 font-display text-2xl text-[#3b2b23] leading-snug">{pillar.title}</h3>
                <div className="mt-4 h-px w-12 bg-[#b8976b] transition-all duration-300 group-hover:w-20" />
                <p className="mt-4 text-sm text-[#6e5649] leading-relaxed">{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
