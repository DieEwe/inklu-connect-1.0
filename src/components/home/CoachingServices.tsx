import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Users, Calendar, Briefcase, BarChart, Globe, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/ui/GlowButton";
import { useState } from "react";

const CoachingServices = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("coaching");
  
  const translations = {
    mainTitle: language === "DE" ? "Unsere <span class='text-gradient'>Services</span>" : "Our <span class='text-gradient'>Services</span>",
    mainSubtitle: language === "DE" ? "Professionelle Unterstützung für deinen beruflichen Erfolg" : "Professional support for your career success",
    moreInfo: language === "DE" ? "Mehr erfahren" : "Learn more",
    cta: language === "DE" ? "Alle Services entdecken" : "Discover all services",
    
    tabs: {
      coaching: language === "DE" ? "Coaching" : "Coaching",
      jobs: language === "DE" ? "Job Vermittlung" : "Job Placement",
      workshops: language === "DE" ? "Workshops" : "Workshops",
      tools: language === "DE" ? "Tools" : "Tools",
    },
    
    coaching: {
      title: language === "DE" ? "Coaching Angebote" : "Coaching Offers",
      description: language === "DE" ? "Individuelle Begleitung für deine berufliche Entwicklung" : "Individual guidance for your professional development",
      services: [
        {
          icon: <Users className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Karriereberatung" : "Career Consulting",
          description: language === "DE" ? 
            "Individuelle Beratung für deine berufliche Weiterentwicklung mit persönlichen Zukunftsperspektiven." : 
            "Individual consulting for your professional development with personal future perspectives.",
          price: language === "DE" ? "Ab 120€ / Stunde" : "From 120€ / hour"
        },
        {
          icon: <Calendar className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Bewerbungscoaching" : "Application Coaching",
          description: language === "DE" ? 
            "Optimiere deine Bewerbungsunterlagen und bereite dich optimal auf Vorstellungsgespräche vor." : 
            "Optimize your application documents and prepare optimally for job interviews.",
          price: language === "DE" ? "Ab 95€ / Stunde" : "From 95€ / hour"
        },
        {
          icon: <Briefcase className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Führungskräfteentwicklung" : "Leadership Development",
          description: language === "DE" ? 
            "Entwickle deine Führungsqualitäten und baue deine Stärken für das nächste Karrierelevel aus." : 
            "Develop your leadership qualities and build your strengths for the next career level.",
          price: language === "DE" ? "Ab 150€ / Stunde" : "From 150€ / hour"
        }
      ]
    },
    
    jobs: {
      title: language === "DE" ? "Job Vermittlung" : "Job Placement",
      description: language === "DE" ? "Wir verbinden Unternehmen mit den besten Talenten" : "We connect companies with the best talents",
      services: [
        {
          icon: <Briefcase className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Exklusive Stellenangebote" : "Exclusive Job Offers",
          description: language === "DE" ? 
            "Zugang zu nicht öffentlich ausgeschriebenen Stellen in führenden inklusiven Unternehmen." : 
            "Access to non-public job listings in leading inclusive companies.",
        },
        {
          icon: <Users className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Persönliche Vermittlung" : "Personal Placement",
          description: language === "DE" ? 
            "Unsere Experten kennen den Markt und finden die passende Position für dich." : 
            "Our experts know the market and will find the right position for you.",
        },
        {
          icon: <Calendar className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Bewerbungsprozessbegleitung" : "Application Process Support",
          description: language === "DE" ? 
            "Unterstützung im gesamten Bewerbungsprozess von der Kontaktaufnahme bis zum Vertragsabschluss." : 
            "Support throughout the entire application process from initial contact to contract conclusion.",
        }
      ]
    },
    
    workshops: {
      title: language === "DE" ? "Workshops & Training" : "Workshops & Training",
      description: language === "DE" ? "Interaktive Gruppenformate für den Kompetenzerwerb" : "Interactive group formats for skill acquisition",
      services: [
        {
          icon: <Users className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Diversity & Inclusion" : "Diversity & Inclusion",
          description: language === "DE" ? 
            "Fördere eine inklusive Unternehmenskultur und lerne, wie Vielfalt zum Unternehmenserfolg beiträgt." : 
            "Foster an inclusive corporate culture and learn how diversity contributes to company success.",
          date: language === "DE" ? "Nächster Termin: 15.05.2025" : "Next date: May 15, 2025"
        },
        {
          icon: <BarChart className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Karriereplanung" : "Career Planning",
          description: language === "DE" ? 
            "Definiere deine beruflichen Ziele und entwickle eine Strategie, um diese zu erreichen." : 
            "Define your professional goals and develop a strategy to achieve them.",
          date: language === "DE" ? "Nächster Termin: 22.05.2025" : "Next date: May 22, 2025"
        },
        {
          icon: <Globe className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Interkulturelle Kommunikation" : "Intercultural Communication",
          description: language === "DE" ? 
            "Verbessere deine interkulturelle Kompetenz für eine erfolgreiche Zusammenarbeit in diversen Teams." : 
            "Improve your intercultural competence for successful collaboration in diverse teams.",
          date: language === "DE" ? "Nächster Termin: 29.05.2025" : "Next date: May 29, 2025"
        }
      ]
    },
    
    tools: {
      title: language === "DE" ? "Digitale Tools" : "Digital Tools",
      description: language === "DE" ? "Moderne Lösungen für deine Karriereentwicklung" : "Modern solutions for your career development",
      services: [
        {
          icon: <BookOpen className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "CV-Builder" : "CV Builder",
          description: language === "DE" ? 
            "Erstelle professionelle Lebensläufe mit unserer KI-gestützten Anwendung." : 
            "Create professional resumes with our AI-powered application.",
          button: language === "DE" ? "Tool testen" : "Try tool"
        },
        {
          icon: <Calendar className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Interview-Simulator" : "Interview Simulator",
          description: language === "DE" ? 
            "Übe Vorstellungsgespräche mit unserer interaktiven Plattform und erhalte direktes Feedback." : 
            "Practice interviews with our interactive platform and receive direct feedback.",
          button: language === "DE" ? "Tool testen" : "Try tool"
        },
        {
          icon: <BarChart className="h-8 w-8 text-primary" />,
          title: language === "DE" ? "Skill-Analyzer" : "Skill Analyzer",
          description: language === "DE" ? 
            "Identifiziere deine Stärken und Entwicklungsfelder mit unserem analytischen Assessment." : 
            "Identify your strengths and development areas with our analytical assessment.",
          button: language === "DE" ? "Tool testen" : "Try tool"
        }
      ]
    }
  };

  // Add these translations from Hero component
  const heroTranslations = {
    heroText: language === "DE" ? 
      "Gestalten Sie inklusive Unternehmenskultur durch leistungsstarke Technologie und strategische Einblicke." : 
      "Shaping inclusive culture through powerful technology and strategic insights.",
    registerBtn: language === "DE" ? "Registrieren" : "Sign Up",
    trustedBy: language === "DE" ? "Vertrauen von führenden Unternehmen" : "Trusted by leading companies",
  };

  return (
    <div className="coaching-services relative z-10">
      {/* Add the content moved from Hero component */}
      <div className="text-center w-full max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          {heroTranslations.heroText}
        </p>
        <div className="flex justify-center mb-12">
          <Link to="/register">
            <GlowButton
              variant="highlight"
              size="lg"
            >
              {heroTranslations.registerBtn}
            </GlowButton>
          </Link>
        </div>
        
        {/* Trusted by section */}
        <div className="mt-10">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">{heroTranslations.trustedBy}</p>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <img src="/logos/logoipsum-274.svg" alt="Partner 1" className="h-11 transition-all" />
            <img src="/logos/logoipsum-300.svg" alt="Partner 2" className="h-11 transition-all" />
            <img src="/logos/logoipsum-344.svg" alt="Partner 3" className="h-11 transition-all" />
          </div>
        </div>
      </div>
      
      {/* Main section title */}
      <div className="text-center mb-16 animate-on-scroll opacity-0">
        <h2 className="headline-lg mb-4" dangerouslySetInnerHTML={{ __html: translations.mainTitle }}></h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {translations.mainSubtitle}
        </p>
      </div>
      
      {/* Tabs for different service categories */}
      <div className="mb-12 animate-on-scroll opacity-0" style={{animationDelay: "0.1s"}}>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {Object.entries(translations.tabs).map(([key, value]) => (
            <button 
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-3 rounded-lg transition-all ${
                activeTab === key 
                ? "bg-primary text-primary-foreground shadow-lg" 
                : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      
      {/* Dynamic content based on active tab */}
      <div className="mb-16">
        {activeTab === "coaching" && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h3 className="headline-md mb-2">{translations.coaching.title}</h3>
              <p className="text-muted-foreground">{translations.coaching.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translations.coaching.services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card glass-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="mb-4 p-3 rounded-lg w-fit bg-primary/10 border border-primary/20">
                    {service.icon}
                  </div>
                  <h3 className="headline-sm mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium">{service.price}</span>
                    <a href="#" className="inline-flex items-center text-primary hover:underline group">
                      {translations.moreInfo} <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === "jobs" && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h3 className="headline-md mb-2">{translations.jobs.title}</h3>
              <p className="text-muted-foreground">{translations.jobs.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translations.jobs.services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card glass-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="mb-4 p-3 rounded-lg w-fit bg-primary/10 border border-primary/20">
                    {service.icon}
                  </div>
                  <h3 className="headline-sm mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-end">
                    <a href="#" className="inline-flex items-center text-primary hover:underline group">
                      {translations.moreInfo} <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === "workshops" && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h3 className="headline-md mb-2">{translations.workshops.title}</h3>
              <p className="text-muted-foreground">{translations.workshops.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translations.workshops.services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card glass-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="mb-4 p-3 rounded-lg w-fit bg-primary/10 border border-primary/20">
                    {service.icon}
                  </div>
                  <h3 className="headline-sm mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">{service.date}</span>
                    <a href="#" className="inline-flex items-center text-primary hover:underline group">
                      {translations.moreInfo} <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === "tools" && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h3 className="headline-md mb-2">{translations.tools.title}</h3>
              <p className="text-muted-foreground">{translations.tools.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translations.tools.services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card glass-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all"
                >
                  <div className="mb-4 p-3 rounded-lg w-fit bg-primary/10 border border-primary/20">
                    {service.icon}
                  </div>
                  <h3 className="headline-sm mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-center">
                    <Button className="px-6 bg-primary hover:bg-primary/80 text-primary-foreground">
                      {service.button}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Call to action */}
      <div className="text-center mt-12 animate-on-scroll opacity-0" style={{animationDelay: "0.3s"}}>
        <Link to="/services">
          <GlowButton
            variant="highlight"
            size="lg"
          >
            <div className="flex items-center">
              {translations.cta}
          
            </div>
          </GlowButton>
        </Link>
      </div>
    </div>
  );
};

export default CoachingServices;
