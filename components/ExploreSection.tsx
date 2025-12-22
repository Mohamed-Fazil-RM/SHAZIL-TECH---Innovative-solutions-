
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils.ts';

const ExploreSection: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group cursor-default"
        >
          {/* Background Glow Aura */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[48px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Main Card */}
          <div className="relative flex flex-col items-center justify-center min-h-[400px] w-full bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#d946ef] rounded-[48px] p-8 md:p-16 text-center shadow-[0_0_50px_-12px_rgba(139,92,246,0.5)] border border-white/20 overflow-hidden">
            
            {/* Grain/Noise Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
              <svg width="100%" height="100%">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
                Start Exploring
              </h2>
              
              <p className="text-white/80 text-lg md:text-xl font-medium tracking-wide">
                Animations, Components, Backgrounds — One Click Away
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-10 py-4 bg-white text-[#8b5cf6] rounded-full font-bold text-lg shadow-xl shadow-black/10 hover:shadow-white/20 transition-all flex items-center gap-2"
              >
                Browse Components
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Decorative Inner Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_40%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.2),transparent_40%)]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreSection;
