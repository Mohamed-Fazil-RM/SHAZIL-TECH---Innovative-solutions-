
// Fix: Added React import to resolve missing namespace error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  company: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}