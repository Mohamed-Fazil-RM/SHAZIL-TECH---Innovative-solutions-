
import React from 'react';
import { motion } from 'framer-motion';
import LiquidEther from './LiquidEther.tsx';
import GradientText from './GradientText.tsx';

const BigHighlightCard: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-black px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="relative group min-h-[500px] md:min-h-[600px] w-full rounded-[48px] md:rounded-[64px] border border-white/10 bg-[#050505] overflow-hidden flex items-center justify-center"
        >
          {/* Liquid Ether effect background layer */}
          <div className="absolute inset-0 z-0">
            <LiquidEther
              colors={[ '#3b82f6', '#0ea5e9', '#60a5fa' ]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          {/* Radial Gradient Overlay for depth and atmosphere */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.8)_100%)] z-1 pointer-events-none" />
          
          {/* Glassy Border Inner Glow */}
          <div className="absolute inset-0 rounded-[48px] md:rounded-[64px] shadow-[inset_0_0_100px_rgba(59,130,246,0.05)] pointer-events-none z-2" />

          {/* Content Layer */}
          <div className="relative z-20 px-6 max-w-4xl text-center pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] mb-2">
                We build the digital infrastructure
              </h2>
              <GradientText
                colors={["#60a5fa", "#0ea5e9", "#22d3ee", "#0ea5e9", "#60a5fa"]}
                animationSpeed={4}
                showBorder={false}
                className="text-3xl md:text-5xl lg:text-6xl italic font-medium tracking-tight bg-transparent p-0"
              >
                for the next generation of businesses.
              </GradientText>
            </motion.div>
          </div>

          {/* Bottom subtle edge highlight */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-10" />
          
          {/* Top subtle edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default BigHighlightCard;
