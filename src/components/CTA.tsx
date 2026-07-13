import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-copper/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl font-bold mb-6"
        >
          Ready to Build a Brand That Stands Out?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-white/80 mb-12"
        >
          Let's create something bold, strategic, and built for growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-copper text-white rounded-full font-medium hover:bg-copper-hover transition-colors group"
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px -5px rgba(200, 117, 53, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="https://wa.me/918918700120"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-charcoal rounded-full font-medium hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/60 font-medium"
        >
          <motion.a 
            href="tel:+918918700120" 
            className="hover:text-copper transition-colors inline-block"
            whileHover={{ scale: 1.05, y: -1 }}
          >
            +91 8918700120
          </motion.a>
          <span className="hidden sm:inline">•</span>
          <motion.a 
            href="https://www.outlandstudios.in" 
            className="hover:text-copper transition-colors inline-block"
            whileHover={{ scale: 1.05, y: -1 }}
          >
            www.outlandstudios.in
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
