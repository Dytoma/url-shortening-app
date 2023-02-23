import React from 'react';
import './App.css';

import { Navbar, HeroSection, Advanced, Cta, Footer } from './components';

function App() {
  return (
    <div className="App font-poppins">
      <Navbar />
      <HeroSection />
      <Advanced />
      <Cta />
      <Footer />
      <div>
        <h4 style={{ color: 'black', position: 'absolute', top: '12px', left: 0 }}>Coded by <a href="https://www.frontendmentor.io/profile/Dytoma" style={{ color: 'hsl(180, 66%, 49%)' }}>Dytoma</a></h4>
      </div>
    </div>
  );
}


export default App;
