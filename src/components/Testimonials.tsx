import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Outland Studios gave our brand a professional identity and helped us reach more customers through strong social media campaigns.",
    name: "Hairjunction By Flora",
    business: "Beauty & Salon",
    rating: 5
  },
  {
    id: 2,
    quote: "Their designs, strategies, and advertising support made a visible difference to our business.",
    name: "Sri Gopal Enterprise",
    business: "E-Rickshaw Showroom",
    rating: 5
  },
  {
    id: 3,
    quote: "They understand local businesses and know how to create content that connects with the audience.",
    name: "Guddu Travels",
    business: "Travel & Tour Agency",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setCurrentIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));

  return (
    <section id="testimonials" className="py-24 bg-offwhite">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-charcoal"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-charcoal/5">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-copper/20" />
          
          <div className="overflow-hidden relative min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center z-10 px-4 md:px-12"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-copper fill-copper mx-1" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium text-charcoal leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <div className="font-bold text-charcoal">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-charcoal/60">{testimonials[currentIndex].business}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <motion.button 
              onClick={prev}
              className="p-3 rounded-full bg-offwhite text-charcoal hover:bg-copper hover:text-white transition-all shadow-sm border border-charcoal/5"
              whileHover={{ scale: 1.15, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button 
              onClick={next}
              className="p-3 rounded-full bg-offwhite text-charcoal hover:bg-copper hover:text-white transition-all shadow-sm border border-charcoal/5"
              whileHover={{ scale: 1.15, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
