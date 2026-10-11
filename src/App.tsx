import React, { useState, useEffect } from 'react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Stack } from './components/Stack';
import { Badges } from './components/Badges';
import { Contact } from './components/Contact';
import { OrbitLayer } from './components/OrbitLayer';
import { CHECKPOINTS } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSector, setActiveSector] = useState<string>('start');

  useEffect(() => {
    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = CHECKPOINTS.length - 1; i >= 0; i--) {
        const cp = CHECKPOINTS[i];
        const el = document.getElementById(cp.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSector(cp.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    handleScrollObserver();

    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const scrollToSector = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070913] text-slate-100 font-sans selection:bg-cyan-400 selection:text-black">
      {/* 60fps Starfield Parallax Canvas */}
      <StarfieldCanvas />

      {/* Interactive Orbital Flight Rail & Companion */}
      <OrbitLayer
        activeSector={activeSector}
        onNavigate={scrollToSector}
      />

      {/* Main Trajectory Content */}
      <main id="main" className="relative z-10 pb-16 md:pb-0">
        <Hero onScrollTo={scrollToSector} />
        <Experience />
        <Projects />
        <Stack />
        <Badges />
        <Contact />
      </main>
    </div>
  );
};

export default App;
