import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

const NAV_ITEMS = [
  {label: 'Über uns', href: '#ueber-uns'},
  {label: 'Leistungen', href: '#leistungen'},
  {label: 'Galerie', href: '#galerie'},
  {label: 'CEO Convention', href: '#ceo-convention'},
  {label: 'Kontakt', href: '#kontakt'},
];

export function Navbar({onBookClick}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled || mobileOpen
          ? 'bg-[#FBF9F6]/95 backdrop-blur-md border-b border-[#DECBB8]/60 text-[#3B2B23]'
          : 'bg-gradient-to-b from-[#231813]/55 to-transparent text-[#FBF9F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className={`font-display text-xl sm:text-2xl tracking-[0.2em] uppercase font-medium whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8976B] ${
            isScrolled || mobileOpen ? 'text-[#3B2B23]' : 'text-[#FBF9F6]'
          }`}
        >
          BEAUTY EYEZ
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Hauptnavigation"
          className="hidden lg:flex items-center gap-7 text-sm font-normal tracking-wide"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8976B] ${
                isScrolled
                  ? 'text-[#5C4438] hover:text-[#3B2B23] after:bg-[#B8976B]'
                  : 'text-[#F7F2EB]/90 hover:text-white after:bg-[#DECBB8]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile drawer toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onBookClick();
            }}
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-[0.14em] uppercase font-medium transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8976B] ${
              isScrolled
                ? 'bg-[#3B2B23] text-[#FBF9F6] hover:bg-[#5C4438]'
                : 'bg-[#FBF9F6] text-[#3B2B23] hover:bg-[#EFE7DC]'
            }`}
          >
            Termin buchen
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8976B] ${
              isScrolled || mobileOpen ? 'text-[#3B2B23]' : 'text-[#FBF9F6]'
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FBF9F6] border-t border-[#DECBB8]/50 px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="text-base font-display tracking-wide text-[#3B2B23] py-1.5 border-b border-[#EFE7DC] hover:text-[#9B7B52] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              className="mt-2 w-full py-3.5 px-6 bg-[#3B2B23] text-[#FBF9F6] text-xs tracking-[0.16em] uppercase font-medium hover:bg-[#5C4438] transition-colors cursor-pointer"
            >
              Termin buchen
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
