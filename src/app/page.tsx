import Hero from "@/components/sections/Hero/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Timeline from "@/components/sections/Timeline";
import Prizes from "@/components/sections/Prizes";
import Announcements from "@/components/sections/Announcements";
import CTA from "@/components/sections/CTA";
import Community from "@/components/sections/Community";
import FAQ from "@/components/sections/FAQ";
import PacmanCodenyx from "@/components/animations/pacman/PacmanCodenyx";
import Sponsors from "@/components/sections/Sponsors";

function App() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Announcements />
      <About />
      <Process />
      <Timeline />
      <Prizes />
      <CTA />
      <Community />
      <Sponsors />
      <FAQ />
      <PacmanCodenyx />
    </main>
  );
}

export default App;
