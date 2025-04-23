
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Hero from "@/components/home/Hero";
import CoachingServices from "@/components/home/CoachingServices";
import JobPlacement from "@/components/home/JobPlacement";
import TalentPool from "@/components/home/TalentPool";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  // Add scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <Section bgColor="section-primary" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden scroll-section">
          <div className="circle-glow w-[800px] h-[800px] top-[-300px] right-[-300px]"></div>
          <div className="circle-glow w-[600px] h-[600px] bottom-[-200px] left-[-200px]"></div>
          <Hero />
        </Section>

        {/* Coaching Section */}
        <Section bgColor="section-secondary" className="py-24 relative scroll-section">
          <CoachingServices />
        </Section>

        {/* Job Placement */}
        <Section bgColor="section-accent" className="py-24 relative scroll-section">
          <div className="circle-glow w-[600px] h-[600px] bottom-[-200px] right-[-300px]"></div>
          <JobPlacement />
        </Section>

        {/* Talentpool */}
        <Section bgColor="section-secondary" className="py-24 relative scroll-section">
          <TalentPool />
        </Section>

        {/* CTA Section */}
        <Section bgColor="section-primary" className="py-20 relative scroll-section">
          <div className="circle-glow w-[800px] h-[800px] top-[10%] left-[50%] translate-x-[-50%]"></div>
          <CTASection />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
