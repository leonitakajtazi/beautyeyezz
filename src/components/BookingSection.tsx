import {useEffect, useState, type FormEvent} from 'react';
import {Calendar, CheckCircle2, Copy, Check, Instagram} from 'lucide-react';
import {STUDIO_CONTACT, STUDIO_SERVICES, type ServiceId} from '../data/studioData';

interface BookingSectionProps {
  selectedService: ServiceId | 'kombi' | 'beratung';
  onServiceChange: (value: ServiceId | 'kombi' | 'beratung') => void;
}

const SERVICE_OPTIONS: {value: ServiceId | 'kombi' | 'beratung'; label: string}[] = [
  ...STUDIO_SERVICES.map((s) => ({value: s.id, label: s.title})),
  {value: 'kombi', label: 'Lash & Brow Lifting Kombi'},
  {value: 'beratung', label: 'Persönliche Erstberatung'},
];

const TIME_WINDOWS = [
  'Vormittag (flexibel)',
  'Nachmittag (flexibel)',
  'Spätnachmittag / Abend',
  'Nach Vereinbarung',
];

export function BookingSection({selectedService, onServiceChange}: BookingSectionProps) {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeWindow, setTimeWindow] = useState(TIME_WINDOWS[0]);
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, [selectedService]);

  const selectedLabel =
    SERVICE_OPTIONS.find((opt) => opt.value === selectedService)?.label ?? 'Lash Lifting';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Bitte geben Sie Ihren Namen an.');
      return;
    }
    if (!contactInfo.trim() || contactInfo.trim().length < 4) {
      setErrorMsg('Bitte hinterlassen Sie eine E-Mail-Adresse, Telefonnummer oder Ihren Instagram-Namen.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const summaryText = `Terminanfrage Beauty Eyez Nürnberg\nName: ${name}\nBehandlung: ${selectedLabel}\nWunschdatum: ${preferredDate || 'Flexibel'}\nZeitfenster: ${timeWindow}\nKontakt: ${contactInfo}${notes ? `\nHinweise: ${notes}` : ''}`;

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored if clipboard permissions are restricted
    }
  };

  return (
    <section
      id="termin"
      className="py-20 sm:py-28 bg-[#F5EFE6] border-b border-[#DECBB8]/55"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Invitation + Instagram Booking Option */}
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.24em] uppercase text-[#9B7B52] font-medium">
              Terminbuchung
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#3B2B23] font-normal leading-[1.1] [text-wrap:balance]">
              Ihren Wunschtermin persönlich anfragen
            </h2>
            <p className="mt-5 text-[15px] sm:text-base text-[#5C4438] leading-relaxed">
              Wählen Sie Ihre gewünschte Behandlung und Ihr bevorzugtes Zeitfenster aus. Wir
              stimmen den Termin individuell und persönlich mit Ihnen ab.
            </p>

            {/* Instagram Booking Card */}
            <div className="mt-8 p-6 sm:p-7 bg-[#FBF9F6] border border-[#DECBB8]/80">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#9B7B52] font-medium">
                Direkte Buchungsoption
              </span>
              <h3 className="mt-2 font-display text-2xl text-[#3B2B23]">
                Terminvereinbarung via Instagram
              </h3>
              <p className="mt-2.5 text-sm text-[#5C4438] leading-relaxed">
                Für eine schnelle und unkomplizierte Terminabstimmung schreiben Sie uns gerne
                direkt eine Nachricht über Instagram an{' '}
                <span className="font-medium text-[#3B2B23]">
                  {STUDIO_CONTACT.instagramHandle}
                </span>
                .
              </p>
              <a
                href={STUDIO_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#3B2B23] text-[#FBF9F6] text-xs tracking-[0.16em] uppercase font-medium hover:bg-[#5C4438] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8976B]"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                <span>Über Instagram buchen</span>
              </a>
            </div>
          </div>

          {/* Right Appointment Request Form */}
          <div className="lg:col-span-7 bg-[#FBF9F6] border border-[#DECBB8]/85 p-6 sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="flex items-center justify-between gap-4 border-b border-[#EFE7DC] pb-4">
                  <h3 className="font-display text-2xl text-[#3B2B23]">
                    Terminanfrage senden
                  </h3>
                  <Calendar className="w-5 h-5 text-[#B8976B]" aria-hidden="true" />
                </div>

                {/* Treatment Choice */}
                <div>
                  <label className="block text-xs tracking-[0.16em] uppercase text-[#6E5649] mb-2.5">
                    Gewünschte Behandlung
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICE_OPTIONS.map((option) => {
                      const active = selectedService === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => onServiceChange(option.value)}
                          className={`px-4 py-3 text-left text-sm border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#B8976B] ${
                            active
                              ? 'bg-[#3B2B23] text-[#FBF9F6] border-[#3B2B23]'
                              : 'bg-[#FBF9F6] text-[#3B2B23] border-[#DECBB8] hover:border-[#B8976B]'
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs tracking-[0.16em] uppercase text-[#6E5649] mb-2"
                    >
                      Ihr Name *
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Vor- und Nachname"
                      className="w-full px-4 py-3 bg-[#FBF9F6] border border-[#DECBB8] text-sm text-[#3B2B23] placeholder:text-[#9B8578] focus:outline-none focus:border-[#3B2B23]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-contact"
                      className="block text-xs tracking-[0.16em] uppercase text-[#6E5649] mb-2"
                    >
                      Kontakt (Instagram / E-Mail / Telefon) *
                    </label>
                    <input
                      id="booking-contact"
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="z. B. @ihrname oder E-Mail"
                      className="w-full px-4 py-3 bg-[#FBF9F6] border border-[#DECBB8] text-sm text-[#3B2B23] placeholder:text-[#9B8578] focus:outline-none focus:border-[#3B2B23]"
                    />
                  </div>
                </div>

                {/* Date & Time Window */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs tracking-[0.16em] uppercase text-[#6E5649] mb-2"
                    >
                      Wunschdatum (optional)
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF9F6] border border-[#DECBB8] text-sm text-[#3B2B23] focus:outline-none focus:border-[#3B2B23]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-window"
                      className="block text-xs tracking-[0.16em] uppercase text-[#6E5649] mb-2"
                    >
                      Bevorzugtes Zeitfenster
                    </label>
                    <select
                      id="booking-window"
                      value={timeWindow}
                      onChange={(e) => setTimeWindow(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FBF9F6] border border-[#DECBB8] text-sm text-[#3B2B23] focus:outline-none focus:border-[#3B2B23]"
                    >
                      {TIME_WINDOWS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Notes */}
                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs tracking-[0.16em] uppercase text-[#6E5649] mb-2"
                  >
                    Hinweise oder Fragen (optional)
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Haben Sie besondere Wünsche oder Fragen zur Behandlung?"
                    className="w-full px-4 py-3 bg-[#FBF9F6] border border-[#DECBB8] text-sm text-[#3B2B23] placeholder:text-[#9B8578] focus:outline-none focus:border-[#3B2B23]"
                  />
                </div>

                {errorMsg && (
                  <p role="alert" className="text-sm text-[#8A3B2B] font-medium">
                    {errorMsg}
                  </p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#3B2B23] text-[#FBF9F6] text-xs tracking-[0.18em] uppercase font-medium hover:bg-[#5C4438] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8976B]"
                  >
                    Termin anfragen
                  </button>
                  <span className="text-xs text-[#6E5649]">
                    Unverbindliche Anfrage · Persönliche Rückmeldung
                  </span>
                </div>
              </form>
            ) : (
              <div className="py-6 space-y-5">
                <div className="flex items-center gap-3 text-[#3B2B23]">
                  <CheckCircle2 className="w-6 h-6 text-[#9B7B52]" aria-hidden="true" />
                  <h3 className="font-display text-2xl sm:text-3xl">
                    Vielen Dank für Ihre Anfrage, {name}
                  </h3>
                </div>
                <p className="text-sm sm:text-[15px] text-[#5C4438] leading-relaxed">
                  Ihre Terminwünsche wurden vorbereitet. Für eine besonders schnelle Bestätigung
                  können Sie die Übersicht kopieren und direkt per Instagram DM an{' '}
                  <span className="font-medium text-[#3B2B23]">
                    {STUDIO_CONTACT.instagramHandle}
                  </span>{' '}
                  senden.
                </p>

                <div className="p-4 bg-[#F5EFE6] border border-[#DECBB8] text-sm text-[#3B2B23] space-y-1.5">
                  <div>
                    <span className="text-[#6E5649]">Behandlung:</span> {selectedLabel}
                  </div>
                  <div>
                    <span className="text-[#6E5649]">Wunschdatum:</span>{' '}
                    {preferredDate || 'Flexibel'} · {timeWindow}
                  </div>
                  <div>
                    <span className="text-[#6E5649]">Kontakt:</span> {contactInfo}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={STUDIO_CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#3B2B23] text-[#FBF9F6] text-xs tracking-[0.16em] uppercase font-medium hover:bg-[#5C4438] transition-colors whitespace-nowrap shrink-0"
                  >
                    <Instagram className="w-4 h-4" aria-hidden="true" />
                    <span>Instagram DM öffnen</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#DECBB8] bg-[#FBF9F6] text-xs tracking-[0.14em] uppercase text-[#3B2B23] hover:border-[#B8976B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#9B7B52]" aria-hidden="true" />
                        <span>Kopiert</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#9B7B52]" aria-hidden="true" />
                        <span>Anfrage kopieren</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-3 py-2 text-xs text-[#6E5649] underline underline-offset-4 hover:text-[#3B2B23] cursor-pointer"
                  >
                    Angaben ändern
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
