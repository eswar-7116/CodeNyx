import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Process from './components/Process';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Process />
        <Timeline />
        <Prizes />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
