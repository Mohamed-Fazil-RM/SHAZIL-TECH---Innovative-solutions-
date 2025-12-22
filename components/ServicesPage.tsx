
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MonitorSmartphone,
  Cpu,
  Gauge,
  Palette,
  LifeBuoy
} from 'lucide-react';
import RealismButton from './ui/shiny-borders-button.tsx';
import { cn } from '../lib/utils.ts';
import { ViewType } from '../App.tsx';

interface ServicesPageProps {
  setView: (view: ViewType) => void;
  targetServiceId?: string | null;
  onScrolled?: () => void;
}

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  imageUrl: string;
}

const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile Development',
    description: 'Because your digital presence should be as fast as your vision. We build high-performance applications using Next.js, Vite, and React Native.',
    icon: <MonitorSmartphone className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1634715841611-67741dc71459?q=80&w=831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Lightning-fast load times and 95+ Lighthouse scores.',
      'SEO-optimized architecture for maximum global visibility.',
      'Cross-platform native mobile experiences for iOS and Android.',
      'Headless CMS integration for effortless content management.'
    ]
  },
  {
    id: 'automation',
    title: 'Workflow & Business Automation',
    description: 'Because manual friction is the enemy of sustainable growth. We integrate custom AI agents and intelligent logic to automate your core business operations.',
    icon: <Cpu className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1690556139605-27d11bffdfd9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Custom API integrations and intelligent data synchronization.',
      'AI-powered agents for 24/7 customer and lead management.',
      'Elimination of repetitive manual tasks to reduce operational overhead.',
      'Seamless cloud-based automation flows built for scale.'
    ]
  },
  {
    id: 'performance',
    title: 'Performance Optimization & Cloud Solutions',
    description: 'Because speed is not just technical—it’s a business advantage. We migrate and fine-tune legacy systems into secure, edge-deployed architectures.',
    icon: <Gauge className="w-6 h-6" />,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1686600889814-1c9494b45e8b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      '10× faster load times and reduced server latency.',
      'Lowered hosting costs through efficient serverless infrastructure.',
      'Hardened security protocols to protect your data at every layer.',
      'Improved stability and 99.9% uptime via global edge networks.'
    ]
  },
  {
    id: 'design',
    title: 'UI/UX & High-Fidelity Design',
    description: 'Because beautiful design must meet flawless performance. We craft pixel-perfect interfaces and scalable design systems that resonate with users.',
    icon: <Palette className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1762278804951-43ec485de332?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Custom, high-fidelity design systems for consistent branding.',
      'Accessible, responsive layouts that work perfectly on every screen.',
      'Conversion-driven UX research and strategic user journeys.',
      'Figma-based collaborative workflows for rapid design iteration.'
    ]
  },
  {
    id: 'support',
    title: 'Support & Strategic Maintenance',
    description: 'Because your technology should evolve as fast as the market. We act as your engineering partner, providing continuous oversight and rapid updates.',
    icon: <LifeBuoy className="w-6 h-6" />,
    imageUrl: 'https://images.unsplash.com/photo-1762278805015-f573ed240170?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Monthly performance audits and Core Web Vital monitoring.',
      'Proactive security updates and hardened infrastructure patches.',
      'Rapid feature enhancements to keep you ahead of the competition.',
      '24/7 technical support and continuous cloud optimization.'
    ]
  }
];

const ServicesPage: React.FC<ServicesPageProps> = ({ setView, targetServiceId, onScrolled }) => {
  useEffect(() => {
    if (targetServiceId) {
      setTimeout(() => {
        const element = document.getElementById(targetServiceId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if (onScrolled) onScrolled();
        }
      }, 100);
    }
  }, [targetServiceId, onScrolled]);

  return (
    <div className="pt-52 pb-24 bg-black min-h-screen selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
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
            className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.15] max-w-5xl"
          >
            We build fast, reliable, and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 italic">future-ready digital infrastructure.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-4xl font-medium leading-relaxed mb-10"
          >
            Shazil Tech is a next-generation engineering partner architecting high-performance web applications, 
            native mobile experiences, and intelligent business automations. We empower forward-thinking brands 
            with robust technical foundations that eliminate friction and drive global scalability.
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

        {/* Section Title Section */}
        <div className="text-center mt-32 mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6"
          >
            Our <span className="text-blue-500 italic">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed"
          >
            Trusted by the fastest movers to deliver competitive advantages.
          </motion.p>
        </div>

        {/* Alternating Services Layout */}
        <div className="flex flex-col gap-32 md:gap-40">
          {SERVICE_DETAILS.map((service, idx) => {
            // First card: Info Left, Image Right (isEven = true)
            // Second card: Image Left, Info Right (isEven = false)
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={service.id}
                id={service.id}
                className={cn(
                  "flex flex-col gap-12 items-center scroll-mt-32",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Info Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="flex-1"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-8 space-y-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">What you get:</p>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-4 group/item">
                          <div className="mt-1 w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover/item:bg-blue-500 transition-colors">
                            <CheckCircle2 className="w-2.5 h-2.5 text-blue-400 group-hover/item:text-white transition-colors" />
                          </div>
                          <span className="text-slate-300 text-[13px] md:text-sm font-medium leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="flex-1 w-full"
                >
                  <div className="relative group overflow-hidden rounded-[32px] md:rounded-[48px] border border-white/10 bg-[#080808] aspect-square md:aspect-[4/3]">
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
                    <img 
                      src={service.imageUrl} 
                      alt={service.title}
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-52 py-24 border-t border-white/5 flex flex-col items-center text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-10"
          >
            Ready to <span className="text-blue-500 italic">evolve</span> your stack?
          </motion.h3>
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <RealismButton 
              text="Schedule a Technical Audit" 
              onClick={() => setView('contact')}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
