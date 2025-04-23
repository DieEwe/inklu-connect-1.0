
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

    // Add animation class to make elements visible when they enter viewport
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
      element.classList.add('transition-all', 'duration-700', 'ease-in-out');
      observer.observe(element);
    });

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

      <style jsx global>{`
        .scroll-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .scroll-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Add transition delay for cascading effect */
        .animate-on-scroll:nth-child(1) { transition-delay: 0ms; }
        .animate-on-scroll:nth-child(2) { transition-delay: 100ms; }
        .animate-on-scroll:nth-child(3) { transition-delay: 200ms; }
        .animate-on-scroll:nth-child(4) { transition-delay: 300ms; }
        .animate-on-scroll:nth-child(5) { transition-delay: 400ms; }
      `}</style>
    </div>
  );
};

export default Home;
