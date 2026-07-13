import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    'Strong Creative Direction',
    'Local Audience Understanding',
    'Complete Marketing Support',
    'Fast and Professional Delivery',
    'Strategy Before Design',
    'Focus on Business Results'
  ];

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-copper/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
              Why Brands Choose <span className="text-copper">Outland Studios</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-lg">
              We don't just create pretty designs. We build strategic marketing assets that help your business stand out, connect with your local audience, and drive real growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                className="group flex items-start space-x-4 bg-white/5 p-6 rounded-2xl border border-white/10 transition-all cursor-default"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.08)", 
                  borderColor: "#C87535",
                  boxShadow: "0 10px 25px -5px rgba(200, 117, 53, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <CheckCircle2 className="w-6 h-6 text-copper shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-medium group-hover:text-copper transition-colors duration-300">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
