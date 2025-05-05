import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const JobPlacement = () => {
  const { language } = useLanguage();
  
  const translations = {
    title: language === "DE" ? "Jobs vermitteln" : "Job Placement",
    titleSuffix: language === "DE" ? "leicht gemacht" : "made easy",
    description: language === "DE" ? 
      "Wir verbinden Unternehmen mit den besten Talenten" : 
      "We connect companies with the best talents",
    cta: language === "DE" ? "Alle Jobs anzeigen" : "View all Jobs",
    benefits: language === "DE" ? [
      "Exklusive Stellenangebote",
      "Persönliche Vermittlung",
      "Unterstützung im Bewerbungsprozess",
      "Langfristige Karrierebegleitung"
    ] : [
      "Exclusive job offerings",
      "Personal placement",
      "Support throughout the application process",
      "Long-term career guidance"
    ],
    expertText: language === "DE" ? 
      "Unsere Experten kennen den Markt und finden die passende Position für dich." : 
      "Our experts know the market and will find the right position for you."
  };

  return (
    <div className="flex flex-col md:flex-row items-center relative z-10">
      <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12 animate-on-scroll opacity-0">
        <h2 className="headline-lg mb-6">
          <span className="text-gradient">{translations.title}</span> {translations.titleSuffix}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {translations.description}. {translations.expertText}
        </p>
        <ul className="space-y-4 mb-8">
          {translations.benefits.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link to="/jobs">
          <Button className="button-primary text-lg px-8 py-6 rounded-lg group">
            {translations.cta}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
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
  );
};

export default JobPlacement;
