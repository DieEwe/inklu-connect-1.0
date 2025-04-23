
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Users, Calendar, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CoachingServices = () => {
  const { language } = useLanguage();
  
  const translations = {
    coachingTitle: language === "DE" ? "Unser <span class='text-gradient'>Coaching</span> Angebot" : "Our <span class='text-gradient'>Coaching</span> Services",
    coachingSubtitle: language === "DE" ? "Professionelle Begleitung auf deinem Karriereweg" : "Professional guidance on your career path",
    moreInfo: language === "DE" ? "Mehr erfahren" : "Learn more",
    cta: language === "DE" ? "Zum Coaching" : "Go to Coaching",
    services: [
      {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: language === "DE" ? "Karriereberatung" : "Career Consulting",
        description: language === "DE" ? 
          "Individuelle Beratung für deine berufliche Weiterentwicklung mit persönlichen Zukunftsperspektiven." : 
          "Individual consulting for your professional development with personal future perspectives."
      },
      {
        icon: <Calendar className="h-8 w-8 text-primary" />,
        title: language === "DE" ? "Bewerbungscoaching" : "Application Coaching",
        description: language === "DE" ? 
          "Optimiere deine Bewerbungsunterlagen und bereite dich optimal auf Vorstellungsgespräche vor." : 
          "Optimize your application documents and prepare optimally for job interviews."
      },
      {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: language === "DE" ? "Führungskräfteentwicklung" : "Leadership Development",
        description: language === "DE" ? 
          "Entwickle deine Führungsqualitäten und baue deine Stärken für das nächste Karrierelevel aus." : 
          "Develop your leadership qualities and build your strengths for the next career level."
      }
    ]
  };

  return (
    <>
      <div className="text-center mb-16 animate-on-scroll opacity-0">
        <h2 className="headline-lg mb-4" dangerouslySetInnerHTML={{ __html: translations.coachingTitle }}></h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {translations.coachingSubtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {translations.services.map((service, index) => (
          <div 
            key={index} 
            className="service-card animate-on-scroll opacity-0"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="mb-4 p-3 rounded-lg w-fit bg-primary/10 border border-primary/20">
              {service.icon}
            </div>
            <h3 className="headline-sm mb-3 text-foreground">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <a href="#" className="inline-flex items-center text-primary hover:underline group">
              {translations.moreInfo} <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/coaching">
          <Button className="button-primary text-lg px-8 py-6 rounded-lg group">
            {translations.cta}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CoachingServices;
