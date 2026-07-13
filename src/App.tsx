/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite selection:bg-copper selection:text-white">
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Industries />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

