
import React from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Layout, 
  Gauge, 
  RefreshCw 
} from 'lucide-react';
import { Service, ProcessStep, Testimonial, FAQItem } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile',
    description: 'We build high-performance web and mobile apps using Next.js and React Native for a cross-platform experience.',
    icon: <Code2 className="w-10 h-10 text-blue-500" />
  },
  {
    id: 'performance',
    title: 'Core Web Vitals Optimization',
    description: 'We guarantee 95+ Lighthouse scores, fine-tuning your build for peak speed, accessibility, and SEO.',
    icon: <Gauge className="w-10 h-10 text-blue-500" />
  },
  {
    id: 'design',
    title: 'UI/UX & design system',
    description: 'We craft pixel-perfect interfaces and scalable systems that align your branding with high conversion.',
    icon: <Palette className="w-10 h-10 text-blue-500" />
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Streamline operations with custom APIs and automated pipelines to eliminate manual bottlenecks.',
    icon: <Zap className="w-10 h-10 text-blue-500" />
  }
];

export const PROCESS = [
  {
    number: 1,
    title: 'Discovery',
    subtitle: 'Ideation',
    description: 'Understanding unique business bottlenecks and market opportunities.'
  },
  {
    number: 2,
    title: 'Strategy',
    subtitle: 'Architect',
    description: 'Architecting a custom tech & design roadmap for maximum impact.'
  },
  {
    number: 3,
    title: 'Execution',
    subtitle: 'Development',
    description: 'Rapid, agile development and seamless integration.'
  },
  {
    number: 4,
    title: 'Submission',
    subtitle: 'Review',
    description: 'Continuous monitoring and automated scaling strategies.'
  },
  {
    number: 5,
    title: 'Deploy',
    subtitle: 'Launch',
    description: 'Seamless deployment and final project delivery.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'FinFlow Systems',
    content: 'The automation workflows SHAZIL TECH implemented saved our team over 40 hours a week. Their design sense is also world-class.',
    avatar: 'https://picsum.photos/seed/sarah/200'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'Arcade Digital',
    content: 'They didn\'t just build an app; they built a scalable infrastructure. The integration with our existing CRM was flawless.',
    avatar: 'https://picsum.photos/seed/marcus/200'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    company: 'Veloce AI',
    content: 'Professional, proactive, and technically superior. The custom dashboard they designed has become our most valuable internal tool.',
    avatar: 'https://picsum.photos/seed/elena/200'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How long does a typical automation setup take?',
    answer: 'Basic workflow automations take 1-2 weeks. Complex AI integrations or custom CRM setups typically span 4-6 weeks depending on the existing infrastructure.'
  },
  {
    question: 'Can you rebuild my existing site into a high-performance static site?',
    answer: 'Yes, we specialize in migrating legacy CMS sites to modern architectures. We extract your content and redesign the front-end to ensure lightning-fast speeds and top-tier security without losing your SEO rankings.'
  },
  {
    question: 'Do you provide ongoing support after the project is done?',
    answer: 'Absolutely. We offer various maintenance tiers ensuring your systems stay secure, updated, and optimized as technologies evolve.'
  },
  {
    question: 'How does your UI/UX design process integrate with development?',
    answer: 'Our designers work directly alongside our engineers in a unified workflow. This ensures that every design choice is technically feasible and optimized for performance, resulting in a pixel-perfect final product that behaves exactly as intended.'
  },
  {
    question: 'Can you integrate with my existing software stack?',
    answer: 'Yes, we specialize in "seamless glueing." We have deep experience with APIs for Salesforce, HubSpot, Slack, and virtually any modern SaaS platform.'
  }
];
