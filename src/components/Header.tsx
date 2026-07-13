import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-charcoal/95 backdrop-blur-md shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="relative flex items-center justify-start z-50 group w-48 sm:w-56 h-12 md:h-14">
            <motion.img 
              src="/logo.png" 
              alt="Outland Studios" 
              className={`${
                isScrolled ? 'h-20 sm:h-24' : 'h-28 sm:h-32'
              } w-auto object-contain origin-left transition-[height] duration-300 -my-6 -ml-3 sm:-ml-5`} 
              style={{ filter: isScrolled ? 'brightness(0) invert(1)' : 'none' }}
              whileHover={{ scale: 1.06, rotate: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-300 hover:text-copper' : 'text-charcoal hover:text-copper'
                }`}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="https://wa.me/918918700120"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'bg-white/10 text-white hover:bg-copper hover:text-white' : 'bg-charcoal/10 text-charcoal hover:bg-copper hover:text-white'
              }`}
              whileHover={{ scale: 1.15, rotate: 12 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-copper hover:bg-copper-hover text-white px-6 py-2.5 rounded-full font-medium transition-colors block"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(200, 117, 53, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden z-50 p-2 ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-charcoal'}`}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-screen bg-charcoal flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-heading text-white hover:text-copper transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 bg-copper text-white px-8 py-3 rounded-full font-medium"
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
