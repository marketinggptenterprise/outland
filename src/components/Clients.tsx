import { motion } from 'motion/react';

export default function Clients() {
  const clients = [
    'EV Showrooms',
    'Electronics Stores',
    'Construction Companies',
    'Restaurants',
    'Salons',
    'Healthcare Brands',
    'Retail Businesses',
    'Real Estate Brands',
  ];

  return (
    <section className="py-24 bg-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold"
          >
            Helping Local Businesses Become Powerful Brands
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { delay: index * 0.05, duration: 0.4 },
                scale: { delay: index * 0.05, duration: 0.4 },
                y: { type: "spring", stiffness: 400, damping: 15 },
                backgroundColor: { duration: 0.15 },
                borderColor: { duration: 0.15 }
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -4, 
                backgroundColor: "rgba(255, 255, 255, 0.08)", 
                borderColor: "#C87535",
                boxShadow: "0 10px 25px -5px rgba(200, 117, 53, 0.15)"
              }}
              className="group relative px-6 py-4 bg-white/5 rounded-xl border border-white/10 cursor-default"
            >
              <span className="font-medium text-white/60 group-hover:text-copper transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
