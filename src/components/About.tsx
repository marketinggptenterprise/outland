import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { value: '100+', label: 'Creative Campaigns' },
    { value: '50+', label: 'Businesses Promoted' },
    { value: 'Multiple', label: 'Industries Served' },
    { value: 'Strategy', label: 'to Execution' },
  ];

  return (
    <section id="about" className="py-24 bg-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Creativity With Direction
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              Outland Studios is a digital marketing and creative agency built for brands that want to stand out. We combine strategy, design, content, technology, and advertising to create brand experiences that attract attention and generate real business results.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Local Market Understanding',
                'Creative Execution',
                'Result-Oriented Strategy'
              ].map((point) => (
                <motion.li 
                  key={point} 
                  className="flex items-center space-x-3 text-charcoal font-medium cursor-default"
                  whileHover={{ x: 6, color: "#C87535" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="w-2 h-2 rounded-full bg-copper" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-charcoal/5 flex flex-col justify-center cursor-default"
                whileHover={{ 
                  y: -6, 
                  scale: 1.03, 
                  boxShadow: "0 15px 30px -10px rgba(0,0,0,0.08)",
                  borderColor: "rgba(200, 117, 53, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-copper mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-charcoal/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
