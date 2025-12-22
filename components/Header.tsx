
import React, { useState, useEffect, useRef } from 'react';
import { Atom, ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { cn } from '../lib/utils.ts';
import { ViewType } from '../App.tsx';

interface HeaderProps {
  isScrolled: boolean;
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, currentView, setView }) => {
  const [expanded, setExpanded] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  const navItems = [
    { id: 'home' as ViewType, label: 'Home' },
    { id: 'about' as ViewType, label: 'About' },
    { id: 'services' as ViewType, label: 'Services' },
    { id: 'contact' as ViewType, label: 'Contact us' },
  ];

  const containerWidth = useSpring(700, { stiffness: 200, damping: 28, mass: 1 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isHovering && !mobileMenuOpen) {
        if (currentScrollY > prevScrollY.current && currentScrollY > 150) {
          setExpanded(false);
        } else if (currentScrollY < prevScrollY.current) {
          setExpanded(true);
        }
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovering, mobileMenuOpen]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    containerWidth.set(expanded ? (isMobile ? 320 : 700) : (isMobile ? 60 : 360));
  }, [expanded, containerWidth]);

  const handleNavClick = (view: ViewType) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-[100] px-4">
      {/* Desktop Navigation Pill */}
      <div className="hidden md:flex justify-center">
        <motion.div 
          style={{ width: containerWidth }}
          onMouseEnter={() => { setIsHovering(true); setExpanded(true); }}
          onMouseLeave={() => { setIsHovering(false); if(window.scrollY > 150) setExpanded(false); }}
          className={cn(
            "relative flex items-center justify-between h-[54px] px-1.5 rounded-full border border-white/10 transition-colors duration-500 overflow-hidden",
            "bg-black/30 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]",
            isScrolled ? "bg-black/60 border-white/20" : "bg-black/30"
          )}
        >
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 pl-3 group shrink-0"
          >
            <div className="relative">
               <Atom className="w-5 h-5 text-blue-400" />
               <div className="absolute inset-0 bg-blue-400/20 blur-md rounded-full scale-150"></div>
            </div>
            <span className="text-[12px] font-bold tracking-tight text-white uppercase">
              SHAZIL <span className="text-blue-500 font-black">TECH</span>
            </span>
          </button>

          <div className="flex-1 flex justify-center overflow-hidden">
            <AnimatePresence>
              {expanded && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="flex items-center gap-0.5"
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-tight transition-all duration-300 whitespace-nowrap",
                        currentView === item.id 
                          ? "text-white bg-white/10" 
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="shrink-0 pr-0.5">
            <motion.button 
              onClick={() => handleNavClick('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center gap-2.5 h-[42px] px-5 bg-white text-black rounded-full font-bold transition-all overflow-hidden group shadow-lg"
            >
              <span className="relative z-10 text-[11px] tracking-tight">
                Schedule a call
              </span>
              <div className="relative z-10 w-5 h-5 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:rotate-12" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden relative max-w-lg mx-auto">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 p-2 px-4 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-lg"
          >
            <div className="relative">
               <Atom className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-[11px] font-bold text-white tracking-tight">SHAZIL TECH</span>
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-xl transition-all active:scale-90 z-[110] border-4 border-black/20"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile "Tab" Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute top-[calc(100%+12px)] right-0 w-64 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[32px] z-[105] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 blur-3xl pointer-events-none" />
              
              <div className="flex flex-col gap-2 relative z-10">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "w-full text-left px-5 py-3 rounded-2xl text-sm font-bold tracking-tight transition-all",
                      currentView === item.id 
                        ? "text-white bg-white/10" 
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <div className="h-px bg-white/5 my-2 mx-2" />
                
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center justify-between w-full h-12 px-5 bg-blue-600 text-white rounded-2xl font-bold text-xs tracking-tight shadow-lg shadow-blue-900/20 active:scale-95 transition-all"
                >
                  Schedule a call
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
