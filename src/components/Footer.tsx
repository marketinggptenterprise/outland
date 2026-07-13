import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Although prompt asks for 2026, let's just make it dynamic but default to showing 2026 if needed, or simply dynamic.

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6 group">
              <motion.img 
                src="/logo.png" 
                alt="Outland Studios" 
                className="h-32 sm:h-36 w-auto object-contain origin-left -my-8 -ml-6" 
                style={{ filter: 'brightness(0) invert(1)' }} 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A modern digital marketing and creative agency helping local and growing businesses build powerful brands through strategic design, content, advertising, and websites.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-copper hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-copper hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-copper hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-copper hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Process', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-copper transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Social Media Marketing',
                'Graphic & Poster Design',
                'Branding & Logo Design',
                'Meta Ads & Lead Gen',
                'Website Development',
                'Video & Reels'
              ].map(service => (
                <li key={service}>
                  <a href="#services" className="text-white/70 hover:text-copper transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a href="tel:+918918700120" className="hover:text-copper transition-colors">+91 8918700120</a>
              </li>
              <li>
                <a href="https://wa.me/918918700120" className="hover:text-copper transition-colors">WhatsApp: +91 8918700120</a>
              </li>
              <li>
                <a href="mailto:hello@outlandstudios.in" className="hover:text-copper transition-colors">hello@outlandstudios.in</a>
              </li>
              <li>
                <a href="https://www.outlandstudios.in" className="hover:text-copper transition-colors">www.outlandstudios.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            &copy; 2026 Outland Studios. All Rights Reserved.
          </p>
          <p className="text-copper font-medium text-sm">
            Designed for Bold Brands.
          </p>
        </div>
      </div>
    </footer>
  );
}
