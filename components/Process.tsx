
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS } from '../constants.tsx';
import { cn } from '../lib/utils.ts';

const Process: React.FC = () => {
  const nodePositions = [
    { x: 150, y: 100 }, // Step 1: Discovery (Peak)
    { x: 350, y: 300 }, // Step 2: Strategy (Trough)
    { x: 550, y: 100 }, // Step 3: Execution (Peak)
    { x: 750, y: 300 }, // Step 4: Submission (Trough)
    { x: 920, y: 200 }, // Step 5: Deploy (Middle-End)
  ];

  const pathD = "M 50 100 H 150 C 250 100, 250 300, 350 300 S 450 100, 550 100 S 650 300, 750 300 S 850 200, 920 200";

  return (
    <section id="process" className="py-24 md:py-32 bg-[#000000] relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03)_0%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16 md:mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.2] text-white"
          >
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 italic">Figma to Deployment.</span>
          </motion.h3>
        </div>

        <div className="relative w-full max-w-6xl mx-auto aspect-[10/7] sm:aspect-[10/5] md:aspect-[10/4] min-h-[350px] md:min-h-[400px]">
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1000 400" 
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path 
              d={pathD}
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 3, 
                ease: "easeInOut",
              }}
              style={{ 
                filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 5px rgba(59, 130, 246, 1))' 
              }}
            />
            
            <path 
              d={pathD}
              fill="none" 
              stroke="rgba(59, 130, 246, 0.1)" 
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {PROCESS.map((step, idx) => {
            const pos = nodePositions[idx];
            const hasOuterGlow = idx % 2 === 0 || idx === 4; 
            
            return (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="absolute flex flex-col items-center text-center w-[120px] sm:w-[160px] md:w-[220px] z-10"
                style={{ 
                  left: `${(pos.x / 1000) * 100}%`, 
                  top: `${(pos.y / 400) * 100}%`,
                  transform: 'translate(-50%, -50%)' 
                }}
              >
                <div className={cn(
                  "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-xs sm:text-base md:text-xl mb-4 sm:mb-6 transition-all duration-500",
                  "border-2 bg-[#000000] relative z-20",
                  hasOuterGlow 
                    ? "border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
                    : "border-white/20 text-white/50"
                )}>
                  {step.number}
                </div>
                
                <div className="absolute top-[105%] w-full pointer-events-none space-y-0.5 md:space-y-1">
                  <h4 className="text-white font-bold text-[10px] sm:text-sm md:text-lg tracking-tight whitespace-nowrap">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 font-black text-[7px] sm:text-[9px] md:text-[11px] uppercase tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap">
                    {step.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
