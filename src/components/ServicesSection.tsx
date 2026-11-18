import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';
import {STUDIO_SERVICES, type ServiceId} from '../data/studioData';
import {StudioImage} from './StudioImage';

interface ServicesSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export function ServicesSection({onSelectService}: ServicesSectionProps) {
  return (
    <section
      id="leistungen"
      className="py-20 sm:py-28 bg-[#F5EFE6] border-b border-[#DECBB8]/50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-xs tracking-[0.24em] uppercase text-[#9B7B52] font-medium">
            Unsere Leistungen
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#3B2B23] font-normal leading-[1.12] [text-wrap:balance]">
            Abgestimmte Behandlungen für Wimpern &amp; Augenbrauen
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-[#5C4438] leading-relaxed">
            Individuell abgestimmt auf Ihren Look. Preise auf Anfrage.
          </p>
        </div>

        {/* Individual Treatment Sections */}
        <div className="space-y-16 sm:space-y-24">
          {STUDIO_SERVICES.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.article
                key={service.id}
                initial={{opacity: 0, y: 24}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-80px'}}
                transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch pt-12 border-t border-[#DECBB8]/70 first:pt-0 first:border-t-0"
              >
                {/* Treatment Photography */}
                <div
                  className={`lg:col-span-5 w-full max-w-md mx-auto ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="h-full  p-2.5 sm:p-3 bg-[#FBF9F6] border border-[#DECBB8]/70">
                    <StudioImage
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full aspect-[4/3]"
                      imgClassName="hover:scale-[1.02]"
                      fallbackLabel={service.title}
                    />
                  </div>
                </div>

                {/* Treatment Editorial Details & Price Placeholder */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xl text-[#B8976B] tabular-nums">
                      {service.index}
                    </span>
                    <span className="text-xs tracking-[0.2em] uppercase text-[#6E5649]">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-3xl sm:text-4xl text-[#3B2B23] font-normal">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] sm:text-base text-[#5C4438] leading-[1.72]">
                    {service.description}
                  </p>



                  {/* Transparent Editable Price & Duration Block (no invented prices) */}
                  <div className="mt-7 p-4 sm:p-5 bg-[#FBF9F6] border border-[#DECBB8]/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[11px] tracking-[0.18em] uppercase text-[#9B7B52]">
                        Preisinformation
                      </span>
                      <span className="mt-1 block text-sm font-medium text-[#3B2B23]">
                        {service.pricePlaceholder}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[11px] tracking-[0.18em] uppercase text-[#9B7B52]">
                        Zeitrahmen
                      </span>
                      <span className="mt-1 block text-sm text-[#5C4438]">
                        {service.durationPlaceholder}
                      </span>
                    </div>
                  </div>

                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.id)}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#3B2B23] text-[#FBF9F6] text-xs tracking-[0.16em] uppercase font-medium hover:bg-[#5C4438] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8976B]"
                    >
                      <span>{service.title} anfragen</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


