import {motion} from 'motion/react';
import {WHY_BEAUTY_EYEZ_PILLARS} from '../data/studioData';

export function WhyBeautyEyezSection() {
  return (
    <section
      id="warum-beauty-eyez"
      className="py-20 sm:py-28 bg-[#FBF9F6] border-b border-[#DECBB8]/45"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Sticky Editorial Intro */}
          <div className="lg:col-span-4">
            <span className="text-xs tracking-[0.24em] uppercase text-[#9B7B52] font-medium">
              Warum Beauty Eyez
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#3B2B23] font-normal [text-wrap:balance]">
              Anspruch bis in jede einzelne Wimper.
            </h2>
            <p className="mt-4 text-[15px] text-[#5C4438] leading-relaxed">
              Qualität zeigt sich dort, wo man sich Zeit nimmt. Fünf Grundsätze prägen jede
              Behandlung in unserem Nürnberger Studio.
            </p>
          </div>

          {/* Right Architectural Hairline List */}
          <div className="lg:col-span-8 border-t border-[#DECBB8]/70">
            {WHY_BEAUTY_EYEZ_PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.index}
                initial={{opacity: 0, y: 14}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-40px'}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-7 sm:py-8 border-b border-[#DECBB8]/70 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
              >
                <div className="sm:col-span-2">
                  <span className="font-display text-2xl text-[#B8976B] tabular-nums">
                    {pillar.index}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-2xl text-[#3B2B23] font-normal leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-sm sm:text-[15px] text-[#5C4438] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
