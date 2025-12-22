
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import BigHighlightCard from './components/BigHighlightCard.tsx';
import Footer from './components/Footer.tsx';
import AboutPage from './components/AboutPage.tsx';
import ServicesPage from './components/ServicesPage.tsx';
import ContactPage from './components/ContactPage.tsx';

export type ViewType = 'home' | 'about' | 'services' | 'contact';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [targetServiceId, setTargetServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when changing views (unless navigating to a specific service)
  useEffect(() => {
    if (!targetServiceId) {
      window.scrollTo(0, 0);
    }
  }, [currentView, targetServiceId]);

  const handleNavigateToService = (id: string) => {
    setTargetServiceId(id);
    setCurrentView('services');
  };

  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <AboutPage setView={setCurrentView} />;
      case 'services':
        return <ServicesPage setView={setCurrentView} targetServiceId={targetServiceId} onScrolled={() => setTargetServiceId(null)} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <Services setView={setCurrentView} onServiceClick={handleNavigateToService} />
            <Testimonials />
            <FAQ />
            <Contact />
            <BigHighlightCard />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-black text-white">
      <Header isScrolled={isScrolled} currentView={currentView} setView={setCurrentView} />
      
      <main>
        {renderView()}
      </main>

      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;
