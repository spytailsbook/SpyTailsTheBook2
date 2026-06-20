/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DeclassifiedDocs from './components/DeclassifiedDocs';
import MapSection from './components/MapSection';
import Authors from './components/Authors';
import Footer from './components/Footer';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      ReactGA.initialize(measurementId);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

  return (
    <div className="min-h-screen text-text-main selection:bg-accent-amber selection:text-black relative w-full">
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none z-0" 
        style={{ backgroundImage: 'radial-gradient(var(--color-accent-amber) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
      


      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <MapSection />
          <DeclassifiedDocs />
          <Authors />
        </main>
        <Footer />
      </div>
    </div>
  );
}
