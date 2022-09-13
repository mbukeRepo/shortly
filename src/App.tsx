import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ShortenSection from './components/ShortenSection';
import AdvancedStatistics from './components/AdvancedStatistics';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
      <HeroSection />
      <ShortenSection />
      <AdvancedStatistics />
    </div>
  );
}

export default App;
