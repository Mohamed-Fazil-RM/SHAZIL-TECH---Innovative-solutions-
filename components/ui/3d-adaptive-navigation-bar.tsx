
import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GlassSurface from './GlassSurface.tsx';
import { cn } from '../../lib/utils.ts';

interface NavItem {
  label: string;
  id: string;
}

export const PillBase: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [expanded, setExpanded] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const prevScrollY = useRef(0);
  
  const navItems: NavItem[] = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  const containerWidth = useSpring(180, { stiffness: 180, damping: 24, mass: 1 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const sections = ['hero', 'services', 'process', 'testimonials'];
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && currentScrollY >= element.offsetTop - 250) {
          setActiveSection(sectionId);
          break;
        }
      }

      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        if (!hovering) setExpanded(false);
      } else {
        setExpanded(true);
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hovering]);

  useEffect(() => {
    containerWidth.set(expanded ? 720 : 180);
  }, [expanded, containerWidth]);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <div 
      className="relative flex items-center justify-end"
      onMouseEnter={() => { setHovering(true); setExpanded(true); }}
      onMouseLeave={() => { setHovering(false); if (window.scrollY > 100) setExpanded(false); }}
    >
      <motion.div
        style={{ width: containerWidth }}
        className="h-16 relative"
      >
        <GlassSurface
          borderRadius={24}
          brightness={55}
          opacity={0.96}
          blur={10}
          displace={1}
          distortionScale={-110}
          redOffset={2}
          greenOffset={8}
          blueOffset={14}
          className="h-full w-full border border-white/20 shadow-md"
        >
          <div className="flex items-center justify-between w-full h-full p-1.5 overflow-hidden">
            {/* Navigation Links Area */}
            <div className={cn(
              "flex-1 flex items-center justify-start overflow-hidden transition-opacity duration-300",
              expanded ? "opacity-100 px-2" : "opacity-0 w-0 px-0"
            )}>
              <AnimatePresence>
                {expanded && (
                  <motion.div 
                    initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="flex items-center gap-1 w-full justify-start pl-2"
                  >
                    {navItems.map((item) => {
                      const isActive = item.id === activeSection;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSectionClick(item.id)}
                          className={cn(
                            "px-5 py-2.5 rounded-[12px] text-[14.5px] font-semibold transition-all duration-300 whitespace-nowrap",
                            isActive 
                              ? "bg-white/95 text-[#0F172A] shadow-sm scale-100" 
                              : "text-slate-500 hover:text-[#0F172A] hover:bg-white/30"
                          )}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Premium Gradient Schedule Button */}
            <motion.button 
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              onClick={() => handleSectionClick('contact')}
              className="relative flex items-center gap-3 h-full px-7 bg-[#000000] text-white rounded-[16px] transition-all overflow-hidden group shrink-0 ml-auto z-10"
              style={{
                boxShadow: btnHovered 
                  ? "0 -10px 40px -5px rgba(78, 99, 255, 0.3), 0 0 10px 0 rgba(0, 0, 0, 0.5)"
                  : "0 -5px 20px -5px rgba(78, 99, 255, 0.2)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Internal Realistic Glows based on GradientCard logic */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-full w-full z-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(ellipse at bottom right, rgba(172, 92, 255, 0.6) -20%, rgba(79, 70, 229, 0) 80%),
                    radial-gradient(ellipse at bottom left, rgba(56, 189, 248, 0.6) -20%, rgba(79, 70, 229, 0) 80%)
                  `,
                  filter: "blur(20px)",
                }}
                animate={{ opacity: btnHovered ? 1 : 0.7 }}
              />

              {/* Bottom Glowing Border Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1.5px] z-20"
                style={{
                  background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
                }}
                animate={{
                  boxShadow: btnHovered
                    ? "0 0 15px 2px rgba(172, 92, 255, 0.8), 0 0 25px 4px rgba(56, 189, 248, 0.5)"
                    : "0 0 10px 1px rgba(172, 92, 255, 0.6)",
                }}
              />

              <span className="relative z-10 text-[14.5px] font-bold tracking-tight">
                {expanded ? "Schedule a call" : "Schedule"}
              </span>

              <motion.div 
                className="relative z-10 w-7 h-7 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-inner group-hover:bg-blue-600 transition-colors"
                animate={{ y: btnHovered ? -2 : 0 }}
              >
                <ArrowUpRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </motion.div>

              {/* Glass reflection top highlight */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 z-20" />
            </motion.button>
          </div>
        </GlassSurface>
      </motion.div>
    </div>
  );
};
