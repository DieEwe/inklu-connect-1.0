import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Hero from "@/components/home/Hero";
import CoachingServices from "@/components/home/CoachingServices";
import TalentPool from "@/components/home/TalentPool";
import CTASection from "@/components/home/CTASection";
import "@/styles/animations.css";

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
        <Section bgColor="section-accent" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden scroll-section">
          <Hero />
        </Section>

        {/* Coaching Section */}
        <Section bgColor="section-secondary" className="py-24 relative scroll-section">
          <CoachingServices />
        </Section>

        {/* JobPlacement section removed */}

        {/* Talentpool */}
        <Section bgColor="section-accent" className="py-24 relative scroll-section">
          <TalentPool />
        </Section>

        {/* CTA Section */}
        <Section bgColor="section-primary" className="py-20 relative scroll-section">
          <CTASection />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
