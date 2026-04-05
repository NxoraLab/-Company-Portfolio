import React from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { ParticleNetwork } from '@/components/sections/ParticleNetwork';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { TechEcosystem } from '@/components/sections/TechEcosystem';
import { Projects } from '@/components/sections/Projects';
import { Process } from '@/components/sections/Process';
import { Trust } from '@/components/sections/Trust';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <ParticleNetwork />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <TechEcosystem />
        <Projects />
        <Process />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
