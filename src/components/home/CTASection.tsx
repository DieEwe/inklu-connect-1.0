
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { language } = useLanguage();
  
  const translations = {
    title: language === "DE" ? "Bereit für den nächsten Karriereschritt?" : "Ready for your next career step?",
    description: language === "DE" ? 
      "Registriere dich jetzt und starte deine Reise zu neuen beruflichen Möglichkeiten. Unser Team steht bereit, um dich zu unterstützen." : 
      "Register now and start your journey to new career opportunities. Our team is ready to support you.",
    register: language === "DE" ? "Jetzt registrieren" : "Register now",
    login: language === "DE" ? "Zum Login" : "Go to login"
  };

  return (
    <div className="relative z-10 rounded-2xl overflow-hidden animate-on-scroll opacity-0">
      <div className="relative p-10 md:p-16 text-center">
        <h2 className="headline-lg mb-6">
          {translations.title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          {translations.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="button-primary text-lg px-8 py-6 rounded-lg group">
            {translations.register} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Link to="/login">
            <Button variant="outline" className="border-border/50 text-foreground hover:bg-secondary/60 px-8 py-6 text-lg rounded-lg">
              {translations.login}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
