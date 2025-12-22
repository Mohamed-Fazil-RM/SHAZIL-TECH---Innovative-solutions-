
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { 
  GlowingStarsBackgroundCard, 
  GlowingStarsDescription, 
  GlowingStarsTitle 
} from './ui/glowing-background-stars-card.tsx';
import { SERVICES } from '../constants.tsx';
import { ViewType } from '../App.tsx';

interface ServicesProps {
  setView: (view: ViewType) => void;
  onServiceClick: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setView, onServiceClick }) => {
  return (
    <section id="services" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.2]"
          >
            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 italic">Your Business.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto font-medium text-sm md:text-base"
          >
            We deploy high-fidelity technical solutions that scale with your vision.
          </motion.p>
        </div>

        {/* Updated Grid: 1 column on mobile, 2 columns (two in a row) on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div 
                className="w-full cursor-pointer relative group/card"
                onClick={() => onServiceClick(service.id)}
              >
                <GlowingStarsBackgroundCard className="relative">
                  <div className="flex justify-between items-start mb-2">
                    <GlowingStarsTitle>{service.title}</GlowingStarsTitle>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/card:bg-blue-600 group-hover/card:border-blue-400 group-hover/card:scale-110">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <GlowingStarsDescription>
                    {service.description}
                  </GlowingStarsDescription>
                </GlowingStarsBackgroundCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
