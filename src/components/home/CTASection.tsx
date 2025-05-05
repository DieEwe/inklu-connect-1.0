import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/ui/GlowButton";

const CTA = () => {
  const { language } = useLanguage();
  
  const translations = {
    title: language === "DE" ? 
      "Bereit für den <span class='text-gradient'>nächsten Schritt</span>?" : 
      "Ready for the <span class='text-gradient'>next step</span>?",
    description: language === "DE" ? 
      "Registriere dich noch heute und werde Teil unserer Community" : 
      "Register today and become part of our community",
    button: language === "DE" ? "Jetzt registrieren" : "Register now",
  };

  return (
    <div className="text-center animate-on-scroll opacity-0">
      <h2 
        className="headline-lg mb-6"
        dangerouslySetInnerHTML={{ __html: translations.title }}
      ></h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
        {translations.description}
      </p>
      <Link to="/register">
        <GlowButton
          variant="highlight"
          size="lg"
        >
          {translations.button}
        </GlowButton>
      </Link>
    </div>
  );
};

export default CTA;
