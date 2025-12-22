
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar.tsx';
import RealismButton from './ui/shiny-borders-button.tsx';
import { ViewType } from '../App.tsx';

interface AboutPageProps {
  setView: (view: ViewType) => void;
}

const WHY_US_CARDS = [
  {
    title: "Technical Superiority",
    description: "We don't just build sites; we engineer high-fidelity digital infrastructure using the latest Next.js and Vite stacks for unmatched performance."
  },
  {
    title: "Velocity at Scale",
    description: "Our rapid engineering cycle allows us to launch complex, production-ready systems in 14–30 days without compromising on quality."
  },
  {
    title: "95+ Performance Scores",
    description: "We are obsessed with Core Web Vitals. Every project is optimized for peak speed, accessibility, and SEO to ensure maximum visibility."
  },
  {
    title: "AI-Driven Automation",
    description: "We integrate intelligent agents and automated workflows that eliminate manual friction, allowing your business to operate with 24/7 efficiency."
  },
  {
    title: "Secure by Design",
    description: "By leveraging serverless architectures and edge deployment, we provide global scalability and hardened security that protects your data at every layer."
  },
  {
    title: "Long-term Partnership",
    description: "We act as your CTO-on-demand, providing ongoing performance monitoring and strategic updates so your tech never falls behind the competition."
  }
];

const AboutPage = ({ setView }: AboutPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1, 1.1]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.5]
  );

  const handleBookCall = () => {
    setView('contact');
  };

  return (
    <div className="pt-52 pb-24 bg-black min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
              <span className="text-emerald-500 text-[9px] font-black uppercase tracking-widest">Accepting new projects</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.15] max-w-4xl"
          >
            We Engineer the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 italic">Digital Infrastructure.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-2xl font-medium leading-relaxed mb-10"
          >
            Shazil Tech architects high-performance digital infrastructure, from mobile apps to intelligent automations. 
            We empower brands with technical foundations that eliminate manual friction and drive global growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              ].map((url, i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                  <img src={url} alt="client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-[13px] font-medium tracking-tight text-left leading-[1.4]">
              Trusted by over <span className="text-white font-bold">100+</span><br />
              satisfied clients worldwide.
            </p>
          </motion.div>
        </div>

        <div ref={imageRef} className="relative max-w-5xl mx-auto mb-32 px-4">
          <motion.div 
            style={{ 
              scale: imageScale,
              opacity: imageOpacity
            }}
            className="relative group overflow-hidden rounded-[32px] md:rounded-[48px] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)] bg-zinc-900"
          >
            <div className="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Engineering Workstation" 
              className="w-full h-auto object-cover grayscale-[0.2] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.05] pointer-events-none" />
          </motion.div>
        </div>

        <div className="py-24 flex flex-col items-center">
          <div className="text-center mb-20 space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium tracking-tight text-white"
            >
              Numbers that <span className="text-blue-500">tell our</span> story
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-2xl mx-auto font-medium"
            >
              From custom architectures to intelligent automations — our results speak louder than words.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-6xl mb-32">
            <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
              <StatCard value="100+" label="Satisfied Clients" />
              <StatCard value="250+" label="Cloud Deployments" />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="h-full bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
                
                <div className="relative space-y-8">
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                    Shazil Tech exists to architect the foundations of tomorrow's digital leaders. 
                    We guide visionary founders through complex technical landscapes, building 
                    partnerships that transform ambitious ideas into high-performance 
                    infrastructure designed for lasting global impact.
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-4 relative">
                  <Avatar className="w-14 h-14 border border-white/10 ring-4 ring-blue-500/10">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" />
                    <AvatarFallback>FZ</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-lg leading-tight">Fazil</span>
                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">Lead Architect & Founder</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-3 flex flex-col gap-6 order-3">
              <StatCard value="50+" label="Projects Delivered" />
              <StatCard value="10k+" label="Hours of Development" />
            </div>
          </div>

          <div className="w-full max-w-6xl mt-12 py-16 border-t border-white/5 flex flex-col items-center">
            <div className="text-center max-w-4xl mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
                  Who we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">are</span>
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto"
              >
                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                  We’re a team of designers and engineers who believe the web should be fast, simple, and built to last. 
                  Our work blends creative design with technical precision delivering websites that look great and perform even better.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 group relative overflow-hidden rounded-[40px] border border-white/10 bg-zinc-900 shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1639506060558-39d4c91c9576?q=80&w=1170&auto=format&fit=crop" 
                  alt="Tech Workspace" 
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 aspect-[16/9] md:aspect-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 group relative overflow-hidden rounded-[40px] border border-white/10 bg-zinc-900 shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?q=80&w=735&auto=format&fit=crop" 
                  alt="Innovation" 
                  className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 min-h-[350px] md:min-h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </div>

          <div className="w-full max-w-6xl mt-40 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="lg:sticky lg:top-40 text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-start gap-4"
                >
                  <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                    Why <span className="text-blue-500 italic">Us?</span>
                  </h3>
                  <p className="text-slate-400 font-medium text-base md:text-lg leading-relaxed max-w-lg mb-8">
                    Because speed is not just technical—it’s a business advantage. 
                    We build websites that load instantly, scale effortlessly, and drive measurable results for our clients. 
                    Our approach ensures your tech stack becomes your greatest competitive asset.
                  </p>
                  
                  <RealismButton 
                    text="Book a 30 min call" 
                    onClick={handleBookCall}
                    className="mb-10"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col gap-6 md:gap-8">
                {WHY_US_CARDS.map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-12 flex flex-col items-start gap-6 hover:border-white/20 transition-all group backdrop-blur-sm"
                  >
                    <div className="text-4xl md:text-5xl font-black text-blue-500/10 group-hover:text-blue-500/30 transition-colors tracking-tighter leading-none">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tighter group-hover:text-blue-400 transition-colors leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 flex flex-col justify-center min-h-[180px] hover:border-white/20 transition-all group"
  >
    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-blue-400 transition-colors">
      {value}
    </h3>
    <p className="text-slate-500 text-sm font-black uppercase tracking-widest">
      {label}
    </p>
  </motion.div>
);

export default AboutPage;
