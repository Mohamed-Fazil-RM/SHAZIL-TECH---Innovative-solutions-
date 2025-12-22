
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Globe, Layers, Activity } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard.tsx';

const EngineeringStandard: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden px-6">
      {/* Decorative subtle background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.2] text-white"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">Engineering Standard.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-slate-500 max-w-xl font-medium"
          >
            We don't just build features; we architect robust ecosystems designed for the next decade of digital evolution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1: Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <SpotlightCard className="h-full border-white/5 bg-[#080808]">
              <div className="flex flex-col h-full space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">Distributed Architecture</h4>
                  <p className="text-slate-400 leading-relaxed font-medium">
                    We specialize in high-availability systems that scale horizontally without friction. Our architectures are cloud-native, ensuring your platform grows alongside your user base.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-blue-400 font-black text-xs uppercase tracking-widest">Global Edge</span>
                    <span className="text-white font-bold">99.99% Uptime</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-blue-400 font-black text-xs uppercase tracking-widest">Latencies</span>
                    <span className="text-white font-bold">&lt;100ms P99</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Square */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SpotlightCard className="h-full border-white/5 bg-[#080808]">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Layers className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-2xl font-bold text-white">Pixel Precision</h4>
                <p className="text-slate-400 leading-relaxed font-medium text-sm">
                  Design systems built with the same rigor as our backend code. Atomic design principles applied to every interface.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Square */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SpotlightCard className="h-full border-white/5 bg-[#080808]">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Activity className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-2xl font-bold text-white">Autonomous Ops</h4>
                <p className="text-slate-400 leading-relaxed font-medium text-sm">
                  Self-healing CI/CD pipelines and automated monitoring that identifies bottlenecks before they become outages.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <SpotlightCard className="h-full border-white/5 bg-[#080808]" spotlightColor="rgba(34, 197, 94, 0.1)">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-16 h-16 shrink-0 rounded-[24px] bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                  <Shield className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-white">Security DNA</h4>
                  <p className="text-slate-400 leading-relaxed font-medium">
                    Enterprise-grade protection isn't an afterthought. We implement Zero-Trust principles, encrypted state management, and rigorous SOC2-compliant engineering workflows by default.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringStandard;
