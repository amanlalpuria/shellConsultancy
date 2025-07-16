'use client';

import { useScroll, useTransform } from 'framer-motion';
import { NavBar } from '@/app/components/NavBar';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ServiceSection } from '@/app/components/ServiceSection';
import { TrainingSection } from '@/app/components/TrainingSection';
import { IndustriesSection } from '@/app/components/IndustriesSection';
import { ValuedClientsSection } from '@/app/components/ValuedClientsSection';
import { FAQSection } from '@/app/components/FAQSection';
import { TeamSection } from '@/app/components/TeamSection';
import { ContactSection } from '@/app/components/ContactSection';
import { FooterSection } from '@/app/components/FooterSection';

export default function ShellConsultancyWebsite() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      <NavBar />
      <HeroSection y={y} />
      <AboutSection />
      <ServiceSection />
      <TrainingSection />
      <IndustriesSection />
      <ValuedClientsSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
