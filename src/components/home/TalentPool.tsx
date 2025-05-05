import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/ui/GlowButton";

const TalentPool = () => {
  const { language } = useLanguage();
  
  const translations = {
    title: language === "DE" ? "Unser Talentpool" : "Our Talent Pool",
    description: language === "DE" ? 
      "Exklusive Karrieremöglichkeiten für Mitglieder" : 
      "Exclusive career opportunities for members",
    cta: language === "DE" ? "Zum Talentpool" : "Go to Talent Pool",
    benefits: [
      {
        title: language === "DE" ? "Exklusive Jobs" : "Exclusive Jobs",
        description: language === "DE" ? 
          "Zugang zu nicht öffentlich ausgeschriebenen Stellen" : 
          "Access to non-public job listings"
      },
      {
        title: language === "DE" ? "Schnellerer Bewerbungsprozess" : "Faster Application Process",
        description: language === "DE" ? 
          "Direkter Kontakt zu Entscheidern" : 
          "Direct contact with decision makers"
      },
      {
        title: language === "DE" ? "Karriere-Updates" : "Career Updates",
        description: language === "DE" ? 
          "Regelmäßige Updates zu passenden Stellenangeboten" : 
          "Regular updates on matching job opportunities"
      }
    ]
  };

  return (
    <div className="flex flex-col md:flex-row-reverse items-center">
      <div className="md:w-1/2 mb-12 md:mb-0 md:pl-12 animate-on-scroll opacity-0">
        <h2 className="headline-lg mb-6">
          Werde Teil unseres <span className="text-gradient">{translations.title}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {translations.description}
        </p>
        <div className="space-y-4 mb-8">
          {translations.benefits.map((benefit, index) => (
            <div key={index} className="glass-card p-4 rounded-lg">
              <h3 className="font-medium text-primary">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        <Link to="/talent-pool">
          <GlowButton 
            variant="highlight" 
            size="lg"
          >
            <div className="flex items-center whitespace-nowrap">
              {translations.cta}
      
            </div>
          </GlowButton>
        </Link>
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
  );
};

export default TalentPool;
