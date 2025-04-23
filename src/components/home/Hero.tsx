
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();
  
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
  };

  return (
    <div className="hero-element relative z-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-12 md:mb-0 animate-on-scroll opacity-0">
        <h1 className="headline-xl mb-6" dangerouslySetInnerHTML={{ __html: translations.heroTitle }}></h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
          {translations.heroText}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="button-glow button-primary text-lg px-6 py-6 rounded-lg group">
            {translations.coachingBtn}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
  );
};

export default Hero;
