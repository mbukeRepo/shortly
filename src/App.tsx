import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ShortenSection from './components/ShortenSection';
import AdvancedStatistics from './components/AdvancedStatistics';
import CTA from './components/CTA';
import Footer from './components/footer';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
      <HeroSection />
      <ShortenSection />
      <AdvancedStatistics />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
