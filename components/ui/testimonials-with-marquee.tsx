
import React from "react"
import { cn } from "../../lib/utils.ts"
import { TestimonialCard, TestimonialAuthor } from "./testimonial-card.tsx"
import { motion } from "framer-motion"

interface TestimonialsSectionProps {
  id?: string
  title: React.ReactNode
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  id,
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "bg-black text-white",
        "py-24 sm:py-32 md:py-40 px-0 relative overflow-hidden",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 text-center relative z-10">
        <div className="flex flex-col items-center gap-4 px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] text-white max-w-3xl"
          >
            {title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-slate-500 max-w-xl mx-auto font-medium"
          >
            {description}
          </motion.p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Marquee Wrapper */}
          <div className="group flex overflow-hidden py-12 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:40s]">
            {/* The animation moves from 0 to -50%. By duplicating the content, we ensure that when it hits -50%, the view is identical to 0%. */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {/* First Set */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`set1-${i}`}
                  {...testimonial}
                  className="mx-0"
                />
              ))}
              {/* Second Set (Duplicate) */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`set2-${i}`}
                  {...testimonial}
                  className="mx-0"
                />
              ))}
            </div>
          </div>

          {/* Side Fades for depth */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/40 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/40 to-transparent z-20" />
        </div>
      </div>
    </section>
  )
}
