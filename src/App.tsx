import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Process from "./components/Process";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import CTA from "./components/CTA";
import Community from "./components/Community";
import FAQ from "./components/FAQ";
import PacmanCodenyx from "./components/pacman/PacmanCodenyx";
import Footer from "./components/Footer";
import TestRedirect from "./components/TestRedirect";
import useSmoothScroll from "./hooks/useSmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  useSmoothScroll();

  if (window.location.pathname === '/cvr-p1') {
    return <TestRedirect />;
  }

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
        <Community />
        <FAQ />
        <PacmanCodenyx />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
