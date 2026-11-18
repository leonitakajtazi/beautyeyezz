/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import {MotionConfig} from 'motion/react';
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
