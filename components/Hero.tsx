
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RealismButton from './ui/shiny-borders-button.tsx';

const Hero: React.FC = () => {
  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#000000]">
      {/* Background Glow removed as requested to keep it solid #000000 */}

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-5xl mx-auto">
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white max-w-4xl"
          >
            Innovative Tech Solutions & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 italic">Intelligent Automations.</span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium px-4"
          >
            We design, build, and automate the future of business.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center mt-4 w-full"
          >
            <RealismButton 
              text="Start a project" 
              onClick={handleStartProject}
            />
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator to help users realize there is more content below the fold */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
