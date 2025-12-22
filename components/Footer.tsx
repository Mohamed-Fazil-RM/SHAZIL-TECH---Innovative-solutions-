
"use client";
import React from "react";
import { Icons } from "./ui/icons.tsx";
import { ViewType } from "../App.tsx";

interface FooterProps {
  setView?: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const handleNavClick = (view: ViewType) => {
    if (setView) {
      setView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/__fazil_rm__/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamedfazil2005",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
    }
  ];

  const navItems: { label: string; id: ViewType }[] = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact us", id: "contact" }
  ];

  return (
    <footer className="pt-20 md:pt-24 pb-10 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-32">
          
          {/* Brand Column - Stays on Left */}
          <div className="flex flex-col items-start text-left max-w-sm space-y-8">
            <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
              <div className="p-2 bg-blue-600 rounded-lg">
                <Icons.logo className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold tracking-tighter text-white uppercase">SHAZIL TECH</h2>
            </a>

            <h1 className="text-slate-400 text-sm leading-relaxed font-medium">
              We design, build, and automate the future of business. Join the next evolution of digital products and high-performance engineering.
            </h1>
            
            <div className="flex items-center gap-6 pt-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Connect</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-2 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <img 
                      src={social.logo} 
                      alt={social.name} 
                      className="w-7 h-7 object-contain relative z-10 filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Column - Moved to Right Corner */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">Company</h3>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-bold tracking-tight text-left md:text-right"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Giant Name Text Highlight - Optimized to fit precisely edge-to-edge without clipping */}
      <div className="w-full flex mt-16 md:mt-24 items-center justify-center overflow-hidden pointer-events-none">
        <h1 className="text-center text-[15.2vw] font-black bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-900 select-none tracking-tighter leading-none whitespace-nowrap px-2 md:px-4">
          SHAZIL TECH
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Final Bottom Bar - Positioned closely to the giant text as requested */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <p className="text-[11px] text-slate-500 uppercase font-bold tracking-widest opacity-60">
            © {new Date().getFullYear()} SHAZIL TECH. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <button className="text-slate-500 hover:text-white transition-colors text-[11px] uppercase font-bold tracking-widest opacity-60">
              Privacy Policy
            </button>
            <button className="text-slate-500 hover:text-white transition-colors text-[11px] uppercase font-bold tracking-widest opacity-60">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
