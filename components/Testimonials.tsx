
import React from 'react';
import { TESTIMONIALS } from '../constants.tsx';
import { TestimonialsSection } from './ui/testimonials-with-marquee.tsx';

const Testimonials: React.FC = () => {
  const testimonials = TESTIMONIALS.map(t => ({
    author: {
      name: t.name,
      handle: `${t.role} @ ${t.company}`,
      avatar: t.avatar
    },
    text: t.content,
    href: undefined
  }));

  return (
    <TestimonialsSection
      id="testimonials"
      title={
        <>
          Trusted by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 italic">Fastest Movers.</span>
        </>
      }
      description="We don't just ship code; we deliver competitive advantages that our clients talk about. Join thousands of innovators building the future."
      testimonials={testimonials}
      className="bg-black"
    />
  );
};

export default Testimonials;
