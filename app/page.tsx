import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Expertise from '@/components/sections/Expertise';
import Clients from '@/components/sections/Clients';
import Portfolio from '@/components/sections/Portfolio';
import VisionMission from '@/components/sections/VisionMission';
import Leadership from '@/components/sections/Leadership';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Clients />
        <Portfolio />
        <VisionMission />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

