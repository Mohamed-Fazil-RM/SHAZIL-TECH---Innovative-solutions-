
import React from "react"
import { cn } from "../../lib/utils.ts"
import { Avatar, AvatarImage } from "./avatar.tsx"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
  key?: React.Key
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  author,
  text,
  href,
  className
}) => {
  // Fix: Cast Card to React.ElementType to resolve JSX construct/call signature errors
  const Card = (href ? 'a' : 'div') as React.ElementType;
  
  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-3xl border border-white/5",
        "bg-gradient-to-b from-white/[0.08] to-transparent",
        "p-6 text-start sm:p-7",
        "hover:from-white/[0.12] hover:to-white/[0.02]",
        "w-[280px] sm:w-[340px] shrink-0",
        "transition-all duration-500 backdrop-blur-sm group",
        "shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Avatar className="h-10 w-10 border border-white/10 relative z-10">
            <AvatarImage src={author.avatar} alt={author.name} className="object-cover" />
          </Avatar>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-bold text-white leading-none tracking-tight">
            {author.name}
          </h3>
          <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-1 opacity-70">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="text-sm sm:text-[15px] mt-5 text-slate-300 leading-relaxed font-medium">
        "{text}"
      </p>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-3xl" />
    </Card>
  )
}
