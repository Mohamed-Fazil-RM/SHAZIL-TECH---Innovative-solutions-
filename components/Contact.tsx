
import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Video, Clock, CheckCircle2, ArrowRight, Calendar as CalendarIcon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils.ts';

type BookingStep = 'selection' | 'details' | 'success';

const Contact: React.FC = () => {
  const [step, setStep] = useState<BookingStep>('selection');
  const [viewDate, setViewDate] = useState(new Date()); 
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeFormat] = useState<'12h' | '24h'>('12h');
  const [formData, setFormData] = useState({ name: '', email: '', note: '' });

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getTimeSlots = (date: Date | null) => {
    if (!date) return [];
    const day = date.getDay();
    if (day === 0) return [];
    const baseSlots = [
      "09:00am", "09:30am", "10:00am", "10:30am", "11:00am", "11:30am", 
      "12:00pm", "12:30pm", "01:00pm", "01:30pm", "02:00pm", "02:30pm", 
      "03:00pm", "03:30pm", "04:00pm", "04:30pm", "05:00pm", "05:30pm"
    ];
    return baseSlots.map(slot => formatTime(slot, timeFormat));
  };

  const formatTime = (timeStr: string, format: '12h' | '24h') => {
    if (format === '12h') return timeStr;
    let [time, modifier] = [timeStr.slice(0, -2), timeStr.slice(-2)];
    let [hours, minutes] = time.split(':');
    let h = parseInt(hours, 10);
    if (modifier === 'pm' && h < 12) h += 12;
    if (modifier === 'am' && h === 12) h = 0;
    return `${h.toString().padStart(2, '0')}:${minutes}`;
  };

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  }, [viewDate]);

  const changeMonth = (offset: number) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
  };

  const handleDateSelect = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today || date.getDay() === 0) return;
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (slot: string) => {
    setSelectedTime(slot);
    setStep('details');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email parameters
    const recipient = "mohamedfazilrm@gmail.com";
    const subject = encodeURIComponent(`New Meeting Booking: 30 Min Strategy Call - ${formData.name}`);
    const dateStr = selectedDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    const body = encodeURIComponent(
      `Hello Fazil,\n\nA new strategy call has been requested through your website.\n\n` +
      `DETAILS:\n` +
      `--------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Date: ${dateStr}\n` +
      `Time: ${selectedTime}\n\n` +
      `CLIENT NOTE:\n` +
      `--------------------------------\n` +
      `${formData.note || 'No notes provided.'}\n\n` +
      `--------------------------------\n` +
      `Please confirm this appointment with the client.`
    );
    
    // Trigger the mailto link
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    setStep('success');
  };

  const resetBooking = () => {
    setStep('selection');
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', email: '', note: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Booking Container */}
          <div className="border border-white/10 rounded-[48px] overflow-hidden bg-card shadow-2xl backdrop-blur-xl flex flex-col md:flex-row min-h-[640px]">
            
            {/* Sidebar / Host Card */}
            <div className="md:w-[320px] p-6 md:p-8 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-center justify-center">
                  <h4 className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Booking Information</h4>
                </div>

                {/* Host Card */}
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none opacity-50" />
                  <div className="relative space-y-4">
                    <div className="flex items-center gap-2.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                       <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Active Host</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" className="w-14 h-14 rounded-2xl object-cover ring-1 ring-white/20 shadow-xl" alt="Host" />
                      <div>
                        <h4 className="text-white font-bold text-xl leading-none tracking-tight">Fazil</h4>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-2">Lead Architect</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 pt-2">
                  <div className="space-y-1">
                    <h5 className="text-white font-bold text-2xl leading-tight">30 Min Strategy Call</h5>
                    <p className="text-slate-400 text-sm font-medium">Define your project roadmap.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2.5">
                    <div className="flex items-center gap-4 text-slate-300 text-[13px] font-bold bg-white/5 p-4 rounded-2xl border border-white/5">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>30 Minutes Duration</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-300 text-[13px] font-bold bg-white/5 p-4 rounded-2xl border border-white/5">
                      <Video className="w-4 h-4 text-blue-500" />
                      <span>Google Meet</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-300 text-[13px] font-bold bg-white/5 p-4 rounded-2xl border border-white/5">
                      <Globe className="w-4 h-4 text-blue-500" />
                      <span>Asia/Kolkata</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedDate && selectedTime && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 bg-blue-600/10 border border-blue-500/30 p-5 rounded-[28px] flex items-center gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1.5">Selected Slot</p>
                    <p className="text-white font-bold text-base leading-none">
                      {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, {selectedTime}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Interaction Area */}
            <div className="flex-1 relative flex flex-col p-6 md:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                {step === 'selection' && (
                  <motion.div 
                    key="selection"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-10"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-8">
                        <h4 className="text-2xl font-bold text-white tracking-tight">
                          {months[viewDate.getMonth()]} <span className="text-slate-600 font-medium">{viewDate.getFullYear()}</span>
                        </h4>
                        <div className="flex gap-2">
                          <button onClick={() => changeMonth(-1)} className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                          <button onClick={() => changeMonth(1)} className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 transition-colors"><ChevronRight className="w-5 h-5" /></button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center">
                        {weekDays.map(day => <div key={day} className="text-[11px] font-black text-slate-600 uppercase tracking-widest pb-4">{day}</div>)}
                        {calendarDays.map((date, i) => {
                          if (!date) return <div key={`empty-${i}`} />;
                          const today = new Date(); today.setHours(0,0,0,0);
                          const isPast = date < today; const isSunday = date.getDay() === 0;
                          const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
                          const isSelectable = !isPast && !isSunday;
                          return (
                            <div key={date.toISOString()} className="aspect-square flex items-center justify-center p-0">
                              <button 
                                onClick={() => handleDateSelect(date)} 
                                disabled={!isSelectable} 
                                className={cn(
                                  "w-full h-full rounded-xl text-lg font-bold transition-all border", 
                                  isSelected ? "bg-blue-600 text-white border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]" : 
                                  isSelectable ? "bg-white/5 text-white border-white/5 hover:border-white/20 hover:bg-white/10" : 
                                  "text-slate-800 border-transparent cursor-not-allowed opacity-30"
                                )}
                              >
                                {date.getDate()}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="lg:w-[260px] shrink-0">
                      <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-6 h-full flex flex-col min-h-[420px]">
                        <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-6 text-center">Available Slots</p>
                        
                        <div className="flex-1 overflow-y-auto max-h-[460px] pr-1 custom-scrollbar">
                          {selectedDate ? (
                            <div className="space-y-2">
                              {getTimeSlots(selectedDate).map(slot => (
                                <button 
                                  key={slot} 
                                  onClick={() => handleTimeSelect(slot)} 
                                  className="w-full py-2.5 bg-white/5 border border-white/5 rounded-xl text-[13px] font-bold text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-400 transition-all text-center"
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center px-4 py-16 opacity-50">
                               <CalendarIcon className="w-8 h-8 text-slate-700 mb-4" />
                               <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider leading-relaxed">Choose a date to reveal times</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 'details' && (
                  <motion.div 
                    key="details"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 max-w-2xl mx-auto w-full space-y-10"
                  >
                    <div className="flex items-center gap-5">
                      <button onClick={() => setStep('selection')} className="p-2.5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <h3 className="text-3xl font-bold text-white tracking-tight">Project Details</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2.5">
                          <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest px-1">Contact Name</label>
                          <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" placeholder="Johnathan Doe" className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white text-base outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                        </div>
                        <div className="space-y-2.5">
                          <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest px-1">Work Email</label>
                          <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" placeholder="john@growth.co" className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white text-base outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                        </div>
                      </div>
                      
                      <div className="space-y-2.5">
                        <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest px-1">Additional Notes</label>
                        <textarea 
                          rows={4}
                          value={formData.note}
                          onChange={e => setFormData({...formData, note: e.target.value})}
                          placeholder="Describe your project, goals, or idea here..."
                          className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-white text-base outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none min-h-[140px]"
                        />
                      </div>

                      <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-[24px] font-black uppercase tracking-[0.2em] text-[13px] flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/20 active:scale-[0.98] transition-all hover:bg-blue-500 mt-4">
                        Initiate Sync <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-[40px] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.1)] animate-pulse">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-4xl font-bold text-white tracking-tight">Sync Configured!</h3>
                      <p className="text-slate-400 max-w-sm mx-auto text-base leading-relaxed font-medium">
                        Your technical assessment invitation has been dispatched. Please check your email client to send the final confirmation to <span className="text-blue-400 font-bold">mohamedfazilrm@gmail.com</span>.
                      </p>
                    </div>
                    <button onClick={resetBooking} className="mt-8 px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white font-bold text-xs transition-all tracking-[0.2em] uppercase">Return to Dashboard</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
