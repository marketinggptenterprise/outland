import { motion } from 'motion/react';

export default function Industries() {
  const industries = [
    'Electric Vehicle',
    'Electronics and Mobile',
    'Construction',
    'Restaurants',
    'Beauty and Salon',
    'Healthcare',
    'Retail',
    'Real Estate',
    'Education',
    'Travel',
    'Furniture',
    'Local Service Businesses'
  ];

  return (
    <section className="py-24 bg-white border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-charcoal"
          >
            Industries We Work With
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { delay: index * 0.03, duration: 0.3 },
                scale: { delay: index * 0.03, duration: 0.3 },
                y: { type: "spring", stiffness: 400, damping: 15 },
                rotate: { type: "spring", stiffness: 400, damping: 15 },
                backgroundColor: { duration: 0.15 },
                borderColor: { duration: 0.15 },
                color: { duration: 0.15 }
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -3,
                rotate: index % 2 === 0 ? 1.5 : -1.5,
                backgroundColor: "#E8DED2",
                borderColor: "#C87535",
                color: "#C87535",
                boxShadow: "0 8px 16px -4px rgba(200, 117, 53, 0.15)"
              }}
              className="px-6 py-3 bg-offwhite text-charcoal font-medium rounded-full border border-charcoal/5 cursor-default"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
