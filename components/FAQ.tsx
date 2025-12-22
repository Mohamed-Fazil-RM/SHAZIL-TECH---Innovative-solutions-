
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { FAQS } from '../constants.tsx';
import RealismButton from './ui/shiny-borders-button.tsx';

const FAQItemComp: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative cursor-pointer group py-5 first:pt-0 last:pb-0 border-b border-white/5 last:border-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center justify-between gap-4">
        <h4 className={cn(
          "text-base md:text-lg font-medium tracking-tight transition-colors duration-300",
          isOpen ? "text-white" : "text-slate-400 group-hover:text-slate-200"
        )}>
          {question}
        </h4>
        <div className={cn(
          "shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-blue-600 border-blue-500 text-white rotate-90" : "bg-transparent border-white/10 text-slate-500"
        )}>
          {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed font-medium pr-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const handleBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-5 space-y-6 pt-4">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] text-white">
                Got questions? <br />
                Book a <span className="inline-block pr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">free discovery call</span>
              </h3>
              <p className="text-slate-500 text-base font-medium leading-relaxed max-w-md">
                Common questions from our clients to help you understand how Shazil Tech works.
              </p>
            </div>

            <div className="pt-2 flex flex-col items-start gap-5">
              <RealismButton 
                text="Book a discovery call" 
                onClick={handleBooking}
              />
              <div className="flex flex-col gap-1">
                <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest">Reach out directly</span>
                <a href="mailto:mohamedfazilrm@gmail.com" className="text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-1 group text-sm">
                  mohamedfazilrm@gmail.com
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/5 rounded-[32px] p-6 md:p-10 backdrop-blur-3xl">
              <div className="flex flex-col">
                {FAQS.map((faq, idx) => (
                  <FAQItemComp key={idx} {...faq} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default FAQ;
