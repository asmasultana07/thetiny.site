import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroShortener from './components/HeroShortener';
import TrustMetric from './components/TrustMetric';
import PopularLinks from './components/PopularLinks';
import PremiumFeatures from './components/PremiumFeatures';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import AnalyticsPreview from './components/AnalyticsPreview';
import WhyChoose from './components/WhyChoose';
import FQA from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`app-container pt-[57px] ${isDark ? '' : 'light'}`}>
      <Navbar isDark={isDark} onToggle={() => setIsDark((value) => !value)} />
      <main>
        <HeroShortener />
        <TrustMetric />
        <PopularLinks />
        <PremiumFeatures />
        <Pricing />
        <Testimonials />
        <AnalyticsPreview />
        <WhyChoose />
        <FQA />
      </main>
      <Footer />
    </div>
  );
}
