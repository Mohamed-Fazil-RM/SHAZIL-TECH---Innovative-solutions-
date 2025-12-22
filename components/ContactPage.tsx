
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import Contact from './Contact.tsx';
import { cn } from '../lib/utils.ts';

const ContactPage: React.FC = () => {
  const [interest, setInterest] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const promises = [
    {
      number: 1,
      title: "Rapid Response",
      description: "We provide a technical consultation within 24 hours—because high-velocity development and agile deployments demand immediate action."
    },
    {
      number: 2,
      title: "Bespoke Digital Engineering",
      description: "We reject generic templates for custom-coded architectures and bespoke technical strategies tailored to your scalable business goals."
    },
    {
      number: 3,
      title: "Performance-Driven Growth",
      description: "We engineer optimized digital infrastructure and intelligent automations designed to convert your digital reach into measurable revenue."
    }
  ];

  const interests = [
    "Automation Workflow",
    "Static Website & SEO",
    "Cross & Native Mobile Apps",
    "Full Stack Web Development",
    "UI/UX Design",
    "All Services"
  ];

  const budgets = [
    "Under ₹50,000",
    "₹50,000 - ₹2L",
    "₹2L - ₹5L",
    "₹5L - ₹10L+"
  ];

  const isFormValid = name.trim() !== '' && 
                      email.trim() !== '' && 
                      interest !== '' && 
                      budget !== '' && 
                      message.trim() !== '';

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    // In a real app, you'd send this to an API
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      setInterest('');
      setBudget('');
    }, 5000);
  };

  return (
    <div className="pt-52 pb-24 bg-black min-h-screen selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center text-center">
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
            className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1] max-w-5xl"
          >
            Let’s engineer your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 italic">digital infrastructure together.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-4xl font-medium leading-relaxed mb-10"
          >
            Whether you’re architecting a new web application, launching a native mobile experience, or automating your business operations, our team is ready to plan, design, and deploy a solution that scales.
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

        {/* Promises Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 max-w-7xl mx-auto mb-32 pt-12 px-4">
          {promises.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white font-bold text-lg mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-blue-500/50 transition-colors duration-500">
                {item.number}
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[340px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Booking Card */}
        <div className="relative z-10">
          <Contact />
        </div>

        {/* Inquiry Form Section */}
        <div className="max-w-4xl mx-auto mt-20 pt-10">
          <form onSubmit={handleInquirySubmit} className="space-y-16">
            
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-white text-lg font-medium">Name*</label>
                <input 
                  required 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:border-blue-500 outline-none transition-colors placeholder:text-zinc-700"
                />
              </div>
              <div className="space-y-4">
                <label className="text-white text-lg font-medium">Email*</label>
                <input 
                  required 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:border-blue-500 outline-none transition-colors placeholder:text-zinc-700"
                />
              </div>
            </div>

            {/* Interest Selection - Updated Categories with "Static Website & SEO" and "Full Stack" */}
            <div className="space-y-8">
              <label className="text-white text-lg font-medium">What are you interested in?</label>
              <div className="flex flex-wrap gap-3">
                {interests.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setInterest(item)}
                    className={cn(
                      "flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300",
                      interest === item 
                        ? "bg-blue-600/10 border-blue-500 text-white" 
                        : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
                    )}
                  >
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      interest === item ? "bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-zinc-700"
                    )} />
                    <span className="text-sm font-bold">{item}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Selection - Rupees (₹) */}
            <div className="space-y-8">
              <label className="text-white text-lg font-medium">Let us know your estimated budget</label>
              <div className="flex flex-wrap gap-3">
                {budgets.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setBudget(item)}
                    className={cn(
                      "flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300",
                      budget === item 
                        ? "bg-blue-600/10 border-blue-500 text-white" 
                        : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
                    )}
                  >
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      budget === item ? "bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-zinc-700"
                    )} />
                    <span className="text-sm font-bold">{item}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-6">
              <label className="text-white text-lg font-medium">Tell us about your project, goals, or any ideas</label>
              <textarea 
                placeholder="Enter your message" 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl focus:border-blue-500 outline-none transition-colors placeholder:text-zinc-700 resize-none"
              />
            </div>

            {/* Submit Button - Gradient UI, Only enabled when form is full */}
            <div className="pt-8 flex justify-start">
              <motion.button
                whileHover={isFormValid ? { scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)" } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                disabled={!isFormValid || formSubmitted}
                className={cn(
                  "relative group px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[13px] transition-all duration-500 overflow-hidden",
                  formSubmitted 
                    ? "bg-emerald-600 text-white" 
                    : !isFormValid 
                      ? "bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed" 
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border border-blue-400/30"
                )}
              >
                <div className="relative z-10 flex items-center gap-3">
                  {formSubmitted ? (
                    <>Sent Successfully <CheckCircle2 className="w-5 h-5" /></>
                  ) : (
                    <>Send message <Send className={cn("w-4 h-4", isFormValid ? "text-white" : "text-zinc-700")} /></>
                  )}
                </div>
                {isFormValid && !formSubmitted && (
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </motion.button>
              
              {!isFormValid && !formSubmitted && (
                <p className="ml-6 flex items-center text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                  * Fill all fields to activate
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
