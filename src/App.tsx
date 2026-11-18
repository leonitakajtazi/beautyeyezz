/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect, useState} from 'react';
import {AnimatePresence, MotionConfig, motion} from 'motion/react';
import loaderLogo from './assets/images/about-beauty-eyez.png';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {AboutSection} from './components/AboutSection';
import {ServicesSection} from './components/ServicesSection';
import {GallerySection} from './components/GallerySection';
import {CeoConventionSection} from './components/CeoConventionSection';
import {WhyBeautyEyezSection} from './components/WhyBeautyEyezSection';
import {BookingSection} from './components/BookingSection';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';
import type {ServiceId} from './data/studioData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);
  const [selectedService, setSelectedService] = useState<ServiceId | 'kombi' | 'beratung'>(
    'lash-lifting',
  );

  const scrollToBooking = () => {
    const el = document.getElementById('termin');
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const handleSelectServiceAndBook = (serviceId: ServiceId) => {
    setSelectedService(serviceId);
    scrollToBooking();
  };

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            role="status"
            aria-label="Beauty Eyez wird geladen"
            initial={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FBF9F6]"
          >
            <motion.div
              initial={{opacity: 0, scale: 0.92}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.7}}
              className="relative w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-full shadow-[0_12px_40px_rgba(92,68,56,0.16)]"
            >
              <img src={loaderLogo} alt="Beauty Eyez Lash & Brow Studio" className="absolute max-w-none w-[108%] h-[108%] -left-[4%] -top-[4%]" />
            </motion.div>
            <div className="mt-8 h-px w-24 overflow-hidden bg-[#decbb8]" aria-hidden="true">
              <motion.div className="h-full w-1/2 bg-[#9b7b52]" animate={{x: ['-100%', '200%']}} transition={{duration: 1.1, repeat: Infinity, ease: 'easeInOut'}} />
            </div>
            <span className="sr-only">Bitte warten</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="min-h-screen flex flex-col bg-[#FBF9F6] text-[#3B2B23]">
        <Navbar onBookClick={scrollToBooking} />
        <main className="flex-1">
          <HeroSection onBookClick={scrollToBooking} />
          <AboutSection />
          <ServicesSection onSelectService={handleSelectServiceAndBook} />
          <GallerySection />
          <CeoConventionSection />
          <WhyBeautyEyezSection />
          <BookingSection
            selectedService={selectedService}
            onServiceChange={setSelectedService}
          />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

