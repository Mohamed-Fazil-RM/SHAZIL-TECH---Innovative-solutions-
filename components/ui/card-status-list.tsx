
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, Plus } from "lucide-react";

export interface Card {
  id: string;
  title: string;
  status: "completed" | "updates-found" | "syncing";
}

interface AnimatedCardStatusListProps {
  title?: string;
  cards?: Card[];
  onSynchronize?: (cardId: string) => void;
  onAddCard?: () => void;
  onBack?: () => void;
  className?: string;
}

const defaultCards: Card[] = [
  { id: "1", title: "Import products from your store", status: "completed" },
  { id: "2", title: "Unique selling points", status: "completed" },
  { id: "3", title: "Primary customers", status: "completed" },
  { id: "4", title: "Common words & phrases", status: "updates-found" },
  { id: "5", title: "Company overview and offer details", status: "syncing" },
];

export function AnimatedCardStatusList({
  title = "Fundamentals",
  cards: initialCards = defaultCards,
  onSynchronize,
  onAddCard,
  onBack,
  className = ""
}: AnimatedCardStatusListProps) {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeDashIndex, setActiveDashIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    const interval = setInterval(() => {
      setActiveDashIndex(prev => (prev + 1) % 8);
    }, 100);
    
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const handleSynchronize = (cardId: string) => {
    if (onSynchronize) onSynchronize(cardId);

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, status: "syncing" as const } : card
    ));

    setTimeout(() => {
      setCards(prev => prev.map(card => 
        card.id === cardId ? { ...card, status: "completed" as const } : card
      ));
    }, 2500);
  };

  const getStatusIcon = (status: Card["status"]) => {
    switch (status) {
      case "completed":
        return (
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" fill="#22c55e" />
            <path 
              d="M5 8l2.5 2.5 3.5-4" 
              stroke="white" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        );
      case "updates-found":
        return (
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path 
              d="M8 1.5L14.5 13H1.5L8 1.5Z" 
              fill="#eab308" 
              stroke="#eab308" 
              strokeWidth="1"
              strokeLinejoin="round"
            />
            <path 
              d="M8 6v3M8 11h0" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
        );
      case "syncing":
        return (
          <svg width="16" height="16" viewBox="0 0 16 16">
            {Array.from({ length: 8 }).map((_, index) => {
              const angle = (index * 45) - 90;
              const radian = (angle * Math.PI) / 180;
              const radius = 6;
              const dashLength = 1.8;
              const startX = 8 + (radius - dashLength/2) * Math.cos(radian);
              const startY = 8 + (radius - dashLength/2) * Math.sin(radian);
              const endX = 8 + (radius + dashLength/2) * Math.cos(radian);
              const endY = 8 + (radius + dashLength/2) * Math.sin(radian);
              const isActive = index === activeDashIndex;
              return (
                <line
                  key={index}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke={isActive ? "#ffffff" : "#6b7280"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        );
    }
  };

  const getStatusText = (status: Card["status"]) => {
    switch (status) {
      case "updates-found":
        return "UPDATES FOUND";
      case "syncing":
        return "SYNCING";
      default:
        return null;
    }
  };

  const getGradientClass = (status: Card["status"]) => {
    switch (status) {
      case "updates-found":
        return "from-yellow-500/10 to-transparent";
      case "syncing":
        return "from-blue-500/10 to-transparent";
      default:
        return "";
    }
  };

  const sortedCards = [...cards].sort((a, b) => {
    if (a.status === "completed" && b.status !== "completed") return -1;
    if (a.status !== "completed" && b.status === "completed") return 1;
    return 0;
  });

  return (
    <div className={`w-full mx-auto p-4 ${className}`}>
      <div className="border border-white/10 rounded-2xl p-6 bg-card shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between mb-8">
          <motion.button
            onClick={onBack}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </motion.button>
          
          <h1 className="text-xl font-bold tracking-tight text-white">{title}</h1>
          
          <motion.button
            onClick={onAddCard}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-4 h-4 text-white" />
          </motion.button>
        </div>

        <motion.div 
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <AnimatePresence>
            {sortedCards.map((card) => (
              <motion.div
                key={card.id}
                layout
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div 
                  className="relative bg-white/5 border border-white/10 rounded-xl p-4 overflow-hidden transition-colors hover:border-white/20"
                  whileHover={{ y: -2 }}
                >
                  {(card.status === "updates-found" || card.status === "syncing") && (
                    <div className={`absolute inset-0 bg-gradient-to-l ${getGradientClass(card.status)} pointer-events-none opacity-50`} 
                         style={{ backgroundSize: "40% 100%", backgroundPosition: "right", backgroundRepeat: "no-repeat" }} 
                    />
                  )}
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={card.status}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            {getStatusIcon(card.status)}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      
                      <span className="text-sm font-semibold text-white truncate max-w-[180px] sm:max-w-xs">{card.title}</span>
                    </div>

                    <div className="flex items-center h-8">
                      <AnimatePresence mode="wait">
                        {card.status === "updates-found" && hoveredCard === card.id ? (
                          <motion.button
                            key="sync-button"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={() => handleSynchronize(card.id)}
                            className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-md hover:bg-blue-500 transition-colors"
                          >
                            Sync
                          </motion.button>
                        ) : getStatusText(card.status) ? (
                          <motion.span
                            key="status-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-[10px] font-black text-slate-500 uppercase tracking-widest"
                          >
                            {getStatusText(card.status)}
                          </motion.span>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
