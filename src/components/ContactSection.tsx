import {Clock, Instagram, MapPin, MessageCircle, Phone} from 'lucide-react';
import {STUDIO_CONTACT} from '../data/studioData';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="py-20 sm:py-24 bg-[#FBF9F6] border-b border-[#DECBB8]/50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <span className="text-xs tracking-[0.24em] uppercase text-[#9B7B52] font-medium">
            Kontakt &amp; Standort
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-[#3B2B23] font-normal">
            Beauty Eyez in Nürnberg
          </h2>
          <p className="mt-3 text-[15px] text-[#5C4438] leading-relaxed">
            Besuchen Sie Beauty Eyez in Nürnberg oder kontaktieren Sie uns direkt über
            Instagram für persönliche Beratung und Ihre individuelle Terminvereinbarung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Standort */}
          <div className="p-6 bg-[#F5EFE6]/70 border border-[#DECBB8]/75">
            <div className="flex items-center gap-2.5 text-xs tracking-[0.18em] uppercase text-[#9B7B52]">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Standort</span>
            </div>
            <p className="mt-3 font-display text-2xl text-[#3B2B23]">{STUDIO_CONTACT.city}</p>
            <p className="mt-2 text-sm text-[#6E5649]">{STUDIO_CONTACT.addressPlaceholder}</p>
          </div>

          {/* Instagram */}
          <div className="p-6 bg-[#F5EFE6]/70 border border-[#DECBB8]/75">
            <div className="flex items-center gap-2.5 text-xs tracking-[0.18em] uppercase text-[#9B7B52]">
              <Instagram className="w-4 h-4" aria-hidden="true" />
              <span>Instagram</span>
            </div>
            <p className="mt-3 font-display text-2xl text-[#3B2B23]">
              {STUDIO_CONTACT.instagramHandle}
            </p>
            <a
              href={STUDIO_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-[#5C4438] underline underline-offset-4 hover:text-[#3B2B23] transition-colors"
            >
              Profil &amp; aktuelle Arbeiten ansehen
            </a>
          </div>

          {/* Öffnungszeiten */}
          <div className="p-6 bg-[#F5EFE6]/70 border border-[#DECBB8]/75">
            <div className="flex items-center gap-2.5 text-xs tracking-[0.18em] uppercase text-[#9B7B52]">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>Öffnungszeiten</span>
            </div>
            <p className="mt-3 font-display text-2xl text-[#3B2B23]">Nach Vereinbarung</p>
            <p className="mt-2 text-sm text-[#6E5649]">{STUDIO_CONTACT.hoursPlaceholder}</p>
          </div>

          {/* Telefon */}
          <div className="p-6 bg-[#F5EFE6]/70 border border-[#DECBB8]/75">
            <div className="flex items-center gap-2.5 text-xs tracking-[0.18em] uppercase text-[#9B7B52]">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Telefon</span>
            </div>
            <p className="mt-3 text-base font-medium text-[#3B2B23]">
              {STUDIO_CONTACT.phonePlaceholder}
            </p>
            <p className="mt-1.5 text-xs text-[#6E5649]">
              Gerne vereinbaren wir einen persönlichen Rückruf über Ihre Terminanfrage
            </p>
          </div>

          {/* WhatsApp */}
          <div className="p-6 bg-[#F5EFE6]/70 border border-[#DECBB8]/75 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 text-xs tracking-[0.18em] uppercase text-[#9B7B52]">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp</span>
            </div>
            <p className="mt-3 text-base font-medium text-[#3B2B23]">
              {STUDIO_CONTACT.whatsappPlaceholder}
            </p>
            <p className="mt-1.5 text-xs text-[#6E5649]">
              Unkomplizierte Terminabstimmung und Fragen zu Behandlungen im Vorfeld Ihres Besuchs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
