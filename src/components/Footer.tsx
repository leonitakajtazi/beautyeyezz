import {Instagram} from 'lucide-react';
import {BrandEmblem} from './BrandEmblem';
import {STUDIO_CONTACT} from '../data/studioData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-marble-texture text-[#3B2B23] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C9B29E]/55 items-start">
          {/* Brand Signature */}
          <div className="md:col-span-5 flex flex-col sm:flex-row sm:items-center gap-5">
            <BrandEmblem size="md" variant="surface" />
            <div>
              <p className="font-display text-2xl tracking-[0.2em] uppercase text-[#3B2B23]">
                {STUDIO_CONTACT.brandName}
              </p>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#6E5649] mt-1">
                {STUDIO_CONTACT.studioDescriptor}
              </p>
              <p className="text-sm text-[#5C4438] mt-3">{STUDIO_CONTACT.city}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <span className="text-xs tracking-[0.2em] uppercase text-[#9B7B52] font-medium">
              Navigation
            </span>
            <ul className="mt-4 space-y-2.5 text-sm text-[#5C4438]">
              <li>
                <a href="#ueber-uns" className="hover:text-[#3B2B23] transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#leistungen" className="hover:text-[#3B2B23] transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-[#3B2B23] transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#ceo-convention" className="hover:text-[#3B2B23] transition-colors">
                  CEO Convention
                </a>
              </li>
              <li>
                <a href="#termin" className="hover:text-[#3B2B23] transition-colors">
                  Termin buchen
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Instagram */}
          <div className="md:col-span-4">
            <span className="text-xs tracking-[0.2em] uppercase text-[#9B7B52] font-medium">
              Kontakt &amp; Studio
            </span>
            <div className="mt-4 space-y-2.5 text-sm text-[#5C4438]">
              <p>{STUDIO_CONTACT.addressPlaceholder}</p>
              <p>{STUDIO_CONTACT.phonePlaceholder}</p>
              <p>{STUDIO_CONTACT.hoursPlaceholder}</p>
              <a
                href={STUDIO_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pt-2 text-[#3B2B23] font-medium hover:text-[#9B7B52] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#9B7B52]" aria-hidden="true" />
                <span>{STUDIO_CONTACT.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#6E5649]">
          <p>
            © {year} Beauty Eyez · Lash &amp; Brow Studio · {STUDIO_CONTACT.city}
          </p>
          <p>Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
}
