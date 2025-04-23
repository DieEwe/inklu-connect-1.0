import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Briefcase, CheckCircle, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { language } = useLanguage();
  
  // Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Translations for all sections
  const translations = {
    heroTitle: language === "DE" ? 
      "Karriere<span class='text-primary'>coaching</span> für deine <span class='text-gradient'>berufliche Zukunft</span>" : 
      "Career<span class='text-primary'>coaching</span> for your <span class='text-gradient'>professional future</span>",
    heroText: language === "DE" ? 
      "Wir begleiten dich auf deinem Weg zum Traumjob mit persönlichem Coaching und exklusiven Karrieremöglichkeiten." : 
      "We accompany you on your path to your dream job with personal coaching and exclusive career opportunities.",
    coachingBtn: language === "DE" ? "Coaching entdecken" : "Discover coaching",
    talentpoolBtn: language === "DE" ? "Talentpool beitreten" : "Join talent pool",
    trustedBy: language === "DE" ? "Vertrauen von führenden Unternehmen" : "Trusted by leading companies",
    
    // Coaching section
    coachingTitle: language === "DE" ? "Unser <span class='text-gradient'>Coaching</span> Angebot" : "Our <span class='text-gradient'>Coaching</span> Services",
    coachingSubtitle: language === "DE" ? "Professionelle Begleitung auf deinem Karriereweg" : "Professional guidance on your career path",
    
    // Coaching types
    coachingType1Title: language === "DE" ? "Karriereberatung" : "Career Consulting",
    coachingType1Desc: language === "DE" ? "Individuelle Beratung für deine berufliche Weiterentwicklung mit persönlichen Zukunftsperspektiven." : "Individual consulting for your professional development with personal future perspectives.",
    coachingType2Title: language === "DE" ? "Bewerbungscoaching" : "Application Coaching",
    coachingType2Desc: language === "DE" ? "Optimiere deine Bewerbungsunterlagen und bereite dich optimal auf Vorstellungsgespräche vor." : "Optimize your application documents and prepare optimally for job interviews.",
    coachingType3Title: language === "DE" ? "Führungskräfteentwicklung" : "Leadership Development",
    coachingType3Desc: language === "DE" ? "Entwickle deine Führungsqualitäten und baue deine Stärken für das nächste Karrierelevel aus." : "Develop your leadership qualities and build your strengths for the next career level.",
    moreInfo: language === "DE" ? "Mehr erfahren" : "Learn more",
    coaching: {
      title: language === "DE" ? "Unser Coaching Angebot" : "Our Coaching Services",
      description: language === "DE" ? "Maßgeschneiderte Beratung für jeden Karriereschritt" : "Tailored consulting for every career step",
      cta: language === "DE" ? "Zum Coaching" : "Go to Coaching"
    },
    jobs: {
      title: language === "DE" ? "Jobs vermitteln" : "Job Placement",
      description: language === "DE" ? "Wir verbinden Unternehmen mit den besten Talenten" : "We connect companies with the best talents",
      cta: language === "DE" ? "Alle Jobs anzeigen" : "View all Jobs"
    },
    talentpool: {
      title: language === "DE" ? "Unser Talentpool" : "Our Talent Pool",
      description: language === "DE" ? "Exklusive Karrieremöglichkeiten für Mitglieder" : "Exclusive career opportunities for members",
      cta: language === "DE" ? "Zum Talentpool" : "Go to Talent Pool"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <Section bgColor="bg-transparent" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
          <div className="circle-glow w-[800px] h-[800px] top-[-300px] right-[-300px]"></div>
          <div className="circle-glow w-[600px] h-[600px] bottom-[-200px] left-[-200px]"></div>
          
          <div className="hero-element relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 animate-on-scroll opacity-0">
              <h1 className="headline-xl mb-6" dangerouslySetInnerHTML={{ __html: translations.heroTitle }}></h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                {translations.heroText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-[#f49357] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f49357] to-[#f4935780] opacity-0 group-hover:opacity-100 blur-lg transition-opacity"></div>
                  <span className="relative px-6 py-4 text-lg text-white flex items-center">
                    {translations.coachingBtn}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="outline" className="border-border/50 text-foreground hover:bg-secondary/60 px-6 py-6 text-lg rounded-lg">
                  {translations.talentpoolBtn}
                </Button>
              </div>
              
              <div className="mt-10">
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">{translations.trustedBy}</p>
                <div className="flex flex-wrap gap-8 items-center">
                  <img src="/placeholder.svg" alt="Partner 1" className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="/placeholder.svg" alt="Partner 2" className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                  <img src="/placeholder.svg" alt="Partner 3" className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-3xl opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden border border-border/30 bg-secondary/30 backdrop-blur-sm">
                  <img
                    src="/placeholder.svg"
                    alt="Karrierecoaching"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Coaching Section - Replaced the Services Section */}
        <Section bgColor="bg-background" className="py-24 relative">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="headline-lg mb-4" dangerouslySetInnerHTML={{ __html: translations.coaching.title }}></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {translations.coaching.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: translations.coachingType1Title,
                description: translations.coachingType1Desc
              },
              {
                icon: <Calendar className="h-8 w-8 text-primary" />,
                title: translations.coachingType2Title,
                description: translations.coachingType2Desc
              },
              {
                icon: <Briefcase className="h-8 w-8 text-primary" />,
                title: translations.coachingType3Title,
                description: translations.coachingType3Desc
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="service-card animate-on-scroll opacity-0"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4 p-3 rounded-lg w-fit bg-primary/10 border border-primary/20">
                  {item.icon}
                </div>
                <h3 className="headline-sm mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <a href="#" className="inline-flex items-center text-primary hover:underline group">
                  {translations.moreInfo} <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/coaching">
              <Button className="button-primary text-lg px-8 py-6 rounded-lg group">
                {translations.coaching.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Job Placement */}
        <Section bgColor="bg-secondary/20" className="py-24 relative">
          <div className="circle-glow w-[600px] h-[600px] bottom-[-200px] right-[-300px]"></div>
          
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12 animate-on-scroll opacity-0">
              <h2 className="headline-lg mb-6">
                <span className="text-gradient">{translations.jobs.title}</span> leicht gemacht
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {translations.jobs.description}. Unsere Experten kennen den Markt und finden die passende Position für dich.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Exklusive Stellenangebote",
                  "Persönliche Vermittlung",
                  "Unterstützung im Bewerbungsprozess",
                  "Langfristige Karrierebegleitung"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
            </div>
            
            <div className="md:w-1/2 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-3xl opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden border border-border/30 bg-secondary/30 backdrop-blur-sm">
                  <img 
                    src="/placeholder.svg" 
                    alt="Jobs vermitteln" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/jobs">
              <Button className="button-primary text-lg px-8 py-6 rounded-lg group">
                {translations.jobs.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Talentpool */}
        <Section bgColor="bg-background" className="py-24 relative">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pl-12 animate-on-scroll opacity-0">
              <h2 className="headline-lg mb-6">
                Werde Teil unseres <span className="text-gradient">{translations.talentpool.title}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {translations.talentpool.description}.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Exklusive Jobs",
                    description: "Zugang zu nicht öffentlich ausgeschriebenen Stellen"
                  },
                  {
                    title: "Schnellerer Bewerbungsprozess",
                    description: "Direkter Kontakt zu Entscheidern"
                  },
                  {
                    title: "Karriere-Updates",
                    description: "Regelmäßige Updates zu passenden Stellenangeboten"
                  }
                ].map((item, index) => (
                  <div key={index} className="glass-card p-4 rounded-lg">
                    <h3 className="font-medium text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              
            </div>
            
            <div className="md:w-1/2 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-3xl opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden border border-border/30 bg-secondary/30 backdrop-blur-sm">
                  <img 
                    src="/placeholder.svg" 
                    alt="Talentpool" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/talent-pool">
              <Button className="button-primary text-lg px-8 py-6 rounded-lg group">
                {translations.talentpool.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* CTA Section */}
        <Section bgColor="bg-secondary/20" className="py-20 relative">
          <div className="circle-glow w-[800px] h-[800px] top-[10%] left-[50%] translate-x-[-50%]"></div>
          
          <div className="relative z-10 rounded-2xl overflow-hidden animate-on-scroll opacity-0">
            <div className="relative p-10 md:p-16 text-center">
              <h2 className="headline-lg mb-6">
                Bereit für den nächsten Karriereschritt?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Registriere dich jetzt und starte deine Reise zu neuen beruflichen Möglichkeiten. Unser Team steht bereit, um dich zu unterstützen.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="button-primary text-lg px-8 py-6 rounded-lg group">
                  Jetzt registrieren <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/login">
                  <Button variant="outline" className="border-border/50 text-foreground hover:bg-secondary/60 px-8 py-6 text-lg rounded-lg">
                    Zum Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
