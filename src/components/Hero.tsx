import { motion } from 'motion/react';
import { ArrowRight, Compass, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-offwhite pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-copper/30 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 border border-charcoal/10 rounded-full" />
        {/* Geometric lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-charcoal/5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-charcoal/5 rounded-full px-4 py-2 mb-8 border border-charcoal/10">
              <Compass className="w-4 h-4 text-copper" />
              <span className="text-sm font-medium tracking-wide uppercase">Creative Agency for Bold Brands</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-charcoal mb-6">
              We Build <span className="text-copper">Bold Brands</span> Beyond the Ordinary.
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-charcoal/80 mb-4">
              Strategy. Creativity. Measurable Growth.
            </p>
            
            <p className="text-charcoal/70 max-w-lg mb-10 text-lg">
              Outland Studios helps ambitious businesses grow through powerful branding, strategic digital marketing, creative campaigns, and performance-driven advertising.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-copper transition-colors group"
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <div className="mt-12 flex items-center space-x-6 text-sm font-medium text-charcoal/60">
              <motion.a 
                href="tel:+918918700120" 
                className="hover:text-copper transition-colors inline-block"
                whileHover={{ scale: 1.05, y: -1 }}
              >
                +91 8918700120
              </motion.a>
              <span>•</span>
              <motion.a 
                href="https://www.outlandstudios.in" 
                className="hover:text-copper transition-colors inline-block"
                whileHover={{ scale: 1.05, y: -1 }}
              >
                www.outlandstudios.in
              </motion.a>
            </div>
          </motion.div>

          {/* Right side graphic/cover photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.02 }}
          >
            {/* Display Cover Photo (user can upload to public/cover.png) */}
            <motion.img 
              src="/cover.png" 
              alt="Outland Studios Cover" 
              className="w-full h-auto rounded-3xl shadow-2xl object-cover" 
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Fallback abstract graphic */}
            <div className="hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-copper/20 to-transparent rounded-full blur-3xl" />
              <div className="relative w-[500px] h-[500px] bg-charcoal rounded-full overflow-hidden flex items-center justify-center shadow-2xl mx-auto">
                <div className="w-full h-full relative">
                  <div className="absolute bottom-0 w-full h-1/2 bg-copper/20 rounded-t-[100%]" />
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
                     <Star className="w-16 h-16 text-copper opacity-80" />
                  </div>
                  <svg className="absolute bottom-10 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="#C87535" strokeWidth="0.5" className="opacity-50" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-sm z-10">
                <div className="flex flex-col space-y-2 font-heading font-semibold text-charcoal">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-copper" />
                    <span>Creative Ideas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-copper" />
                    <span>Strategic Thinking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-copper" />
                    <span>Measurable Results</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
