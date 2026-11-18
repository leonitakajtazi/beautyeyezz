import beforeImage from '../assets/images/comparison-before.jpg';
import afterImage from '../assets/images/comparison-after.jpg';
import {useState} from 'react';
import {motion} from 'motion/react';
import {Instagram, MoveHorizontal, X, ZoomIn} from 'lucide-react';
import {
  GALLERY_WORKS,
  STUDIO_CONTACT,
  type GalleryWorkItem,
  type ServiceId,
} from '../data/studioData';
import {StudioImage} from './StudioImage';

type FilterType = 'all' | ServiceId;

const FILTER_OPTIONS: {id: FilterType; label: string}[] = [
  {id: 'all', label: 'Alle Arbeiten'},
  {id: 'lash-lifting', label: 'Lash Lifting'},
  {id: 'brow-lifting', label: 'Brow Lifting'},
  {id: 'wimpernverlaengerung', label: 'Wimpernverlängerung'},
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(52);
  const [selectedWork, setSelectedWork] = useState<GalleryWorkItem | null>(null);

  const filteredWorks =
    activeFilter === 'all'
      ? GALLERY_WORKS
      : GALLERY_WORKS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="galerie"
      className="py-20 sm:py-28 bg-[#FBF9F6] border-b border-[#DECBB8]/45"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header & Filter Controls */}
        <motion.div initial={{opacity: 0, x: -40}} whileInView={{opacity: 1, x: 0}} viewport={{once: true, amount: 0.2}} transition={{duration: 0.7}} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.24em] uppercase text-[#9B7B52] font-medium">
              Unsere Arbeit &amp; Galerie
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#3B2B23] font-normal leading-[1.12] [text-wrap:balance]">
              Natürliche Ergebnisse mit feiner Handschrift
            </h2>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5EFE6] border border-[#DECBB8]/70 self-start"
            role="tablist"
            aria-label="Galerie Kategorien"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(option.id)}
                  className={`px-3.5 py-2 text-xs tracking-wide transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#B8976B] ${
                    isActive
                      ? 'bg-[#3B2B23] text-[#FBF9F6] font-medium'
                      : 'text-[#5C4438] hover:text-[#3B2B23]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Before & After Comparison Feature */}
        <motion.div initial={{opacity: 0, y: 35}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.15}} transition={{duration: 0.75}} className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-5 sm:p-8 bg-marble-texture border border-[#DECBB8]/80">
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.22em] uppercase text-[#9B7B52] font-medium">
              Vorher / Nachher Vergleich
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl text-[#3B2B23] font-normal">
              Der Unterschied liegt im Detail
            </h3>
            <p className="mt-4 text-sm sm:text-[15px] text-[#5C4438] leading-relaxed">
              Bewegen Sie den Regler, um den Effekt einer sanften Lash &amp; Brow Veredelung zu
              vergleichen: Mehr Ausdruck, definierte Kontur und ein wacher Blick – unter
              Bewahrung der natürlichen Struktur.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-[#6E5649]">
              <span>Links: Vorher · Naturzustand</span>
              <span aria-hidden="true">/</span>
              <span>Rechts: Nachher · Veredelt</span>
            </div>
            <div className="mt-6">
              <a
                href={STUDIO_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#3B2B23] border-b border-[#B8976B] pb-1 hover:text-[#9B7B52] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#9B7B52]" aria-hidden="true" />
                <span>Weitere Transformationen auf {STUDIO_CONTACT.instagramHandle}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[1454/640] w-full overflow-hidden border border-[#DECBB8] bg-[#EFE7DC] select-none">
              {/* After Layer (Full Luminous Result) */}
              <img
                src={afterImage}
                alt="Nachher: Veredelte Wimpern und definierte Augenbrauen"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-contain"
              />

              {/* Before Layer (Muted, Lower Contrast Natural Preview clipped by sliderPosition) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}
              >
                <img
                  src={beforeImage}
                  alt="Vorher: Ungeschminkter Naturzustand vor der Behandlung"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Subtle Labels */}
              <div className="pointer-events-none absolute top-3 left-3 px-2.5 py-1 bg-[#241914]/70 text-[#FBF9F6] text-[11px] tracking-[0.14em] uppercase">
                Vorher
              </div>
              <div className="pointer-events-none absolute top-3 right-3 px-2.5 py-1 bg-[#FBF9F6]/90 text-[#3B2B23] text-[11px] tracking-[0.14em] uppercase">
                Nachher
              </div>

              {/* Vertical Divider Handle */}
              <div
                className="pointer-events-none absolute top-0 bottom-0 w-[1.5px] bg-[#FBF9F6] shadow-[0_0_12px_rgba(0,0,0,0.35)]"
                style={{left: `${sliderPosition}%`}}
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FBF9F6] border border-[#B8976B] shadow-md flex items-center justify-center text-[#3B2B23]">
                  <MoveHorizontal className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>

              {/* Accessible Range Input Overlay */}
              <input
                type="range"
                min={8}
                max={92}
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                aria-label="Vorher-Nachher-Vergleichsregler"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>
          </div>
        </motion.div>

        {/* Portfolio Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredWorks.map((work, index) => (
            <motion.button
              key={work.id}
              type="button"
              layout
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.15}}
              transition={{duration: 0.5, delay: index * 0.12}}
              onClick={() => setSelectedWork(work)}
              className="group text-left flex flex-col bg-[#F5EFE6]/60 border border-[#DECBB8]/70 p-3 hover:border-[#B8976B] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8976B]"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <StudioImage
                  src={work.image}
                  alt={work.imageAlt}
                  className="w-full h-full"
                  imgClassName="group-hover:scale-[1.04]"
                  fallbackLabel={work.title}
                />
                <div className="absolute bottom-2.5 right-2.5 w-8 h-8 bg-[#FBF9F6]/90 text-[#3B2B23] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>

              <div className="pt-4 pb-1 px-1 flex-1 flex flex-col">
                <div className="text-[11px] tracking-[0.16em] uppercase text-[#9B7B52]">
                  {work.categoryLabel}
                </div>
                <h3 className="mt-1 font-display text-xl text-[#3B2B23] font-normal">
                  {work.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#6E5649] leading-relaxed">
                  {work.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Instagram Portfolio Placeholder Note */}
        <div className="mt-12 pt-8 border-t border-[#DECBB8]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#6E5649]">
            Echte Studio-Aufnahmen und tagesaktuelle Vorher-Nachher-Einblicke finden Sie
            jederzeit direkt auf Instagram.
          </p>
          <a
            href={STUDIO_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#DECBB8] bg-[#F5EFE6] text-xs tracking-[0.14em] uppercase text-[#3B2B23] hover:border-[#B8976B] hover:bg-[#EFE7DC] transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
          >
            <Instagram className="w-3.5 h-3.5 text-[#9B7B52]" aria-hidden="true" />
            <span>{STUDIO_CONTACT.instagramHandle} folgen</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 bg-[#241914]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedWork.title}
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FBF9F6] border border-[#DECBB8] p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedWork(null)}
              aria-label="Ansicht schließen"
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-[#FBF9F6] border border-[#DECBB8] text-[#3B2B23] flex items-center justify-center hover:bg-[#EFE7DC] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="aspect-[4/3] w-full overflow-hidden bg-marble-texture">
              <img
                src={selectedWork.image}
                alt={selectedWork.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-4">
              <span className="text-xs tracking-[0.18em] uppercase text-[#9B7B52]">
                {selectedWork.categoryLabel}
              </span>
              <h4 className="mt-1 font-display text-2xl text-[#3B2B23]">
                {selectedWork.title}
              </h4>
              <p className="mt-1.5 text-sm text-[#5C4438]">{selectedWork.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}




