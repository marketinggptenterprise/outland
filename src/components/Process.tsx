import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'We understand your business, audience, goals, competitors, and challenges.'
    },
    {
      num: '02',
      title: 'Strategize',
      desc: 'We create a clear marketing and creative direction.'
    },
    {
      num: '03',
      title: 'Create',
      desc: 'We design content, campaigns, websites, and advertisements.'
    },
    {
      num: '04',
      title: 'Grow',
      desc: 'We launch, track, optimize, and improve results.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-charcoal"
          >
            From Idea to Impact
          </motion.h2>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-charcoal/10" />
          
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative group cursor-default"
              >
                {/* Mobile connecting line */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-24 left-10 w-[2px] h-full bg-charcoal/10 -z-10" />
                )}
                
                <div className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-8">
                  <motion.div 
                    className="w-20 h-20 shrink-0 bg-white rounded-full flex items-center justify-center font-heading text-2xl font-bold text-copper shadow-sm border border-charcoal/5 group-hover:bg-copper group-hover:text-white group-hover:border-copper transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -6 }}
                  >
                    {step.num}
                  </motion.div>
                  <div className="lg:text-center pt-4 lg:pt-0">
                    <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 transition-colors duration-300 group-hover:text-copper">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
