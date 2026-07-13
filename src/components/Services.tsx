import { motion } from 'motion/react';
import { 
  Share2, 
  PenTool, 
  Fingerprint, 
  Target, 
  Layout, 
  Video, 
  FileText, 
  MapPin 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Complete social media planning, content creation, campaign execution, and audience growth.'
    },
    {
      icon: PenTool,
      title: 'Graphic Design',
      description: 'Professional posters, promotional creatives, advertisements, banners, and campaign designs.'
    },
    {
      icon: Fingerprint,
      title: 'Brand Identity',
      description: 'Logo design, color systems, typography, brand positioning, and visual identity.'
    },
    {
      icon: Target,
      title: 'Meta Ads and Lead Gen',
      description: 'Targeted advertising campaigns focused on leads, reach, sales, and measurable growth.'
    },
    {
      icon: Layout,
      title: 'Website Design',
      description: 'Modern, responsive, conversion-focused websites designed for your business.'
    },
    {
      icon: Video,
      title: 'Video Marketing',
      description: 'Promotional videos, reels, scripts, product videos, and cinematic advertisements.'
    },
    {
      icon: FileText,
      title: 'Content Creation',
      description: 'Captions, scripts, campaign concepts, storytelling, and branded content.'
    },
    {
      icon: MapPin,
      title: 'Local Business Marketing',
      description: 'Specialized marketing solutions for businesses in growing cities and emerging markets.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6"
          >
            Everything Your Brand Needs to Grow
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                borderColor: "#C87535",
                boxShadow: "0 20px 25px -5px rgba(200, 117, 53, 0.1)"
              }}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-charcoal/5 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-beige rounded-xl flex items-center justify-center mb-6 group-hover:bg-copper group-hover:text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                <service.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-3 transition-colors duration-300 group-hover:text-copper">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
