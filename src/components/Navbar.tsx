import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Languages, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const translations = {
    home: language === "DE" ? "Home" : "Home",
    coaching: language === "DE" ? "Coaching" : "Coaching",
    jobs: language === "DE" ? "Jobs" : "Jobs",
    talentpool: language === "DE" ? "Talentpool" : "Talent Pool",
    login: language === "DE" ? "Login" : "Login",
    register: language === "DE" ? "Registrieren" : "Register"
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Inklu-Connect Logo" 
              className="h-9 w-9 rounded-lg"
            />
            <span className="text-2xl font-bold tracking-tight text-foreground">
              Inklu-Connect
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link font-medium text-lg">{translations.home}</Link>
            <Link to="/coaching" className="nav-link font-medium text-lg">{translations.coaching}</Link>
            <Link to="/jobs" className="nav-link font-medium text-lg">{translations.jobs}</Link>
            <Link to="/talent-pool" className="nav-link font-medium text-lg">{translations.talentpool}</Link>
            
            <div className="ml-4 flex items-center gap-3">
              <Button 
                variant="ghost"
                onClick={toggleTheme}
                className="flex items-center gap-2 text-foreground/80 hover:text-primary"
                size="sm"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              
              <Button 
                variant="ghost"
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-foreground/80 hover:text-primary"
                size="sm"
              >
                <Languages className="w-5 h-5" />
                <span className="font-medium">{language === "DE" ? "DE" : "EN"}</span>
              </Button>
              
              <div className="h-5 w-px bg-border mx-1"></div>
              
              <Link to="/login" className="font-medium text-foreground/80 hover:text-primary transition-colors">
                {translations.login}
              </Link>
              
              <Link to="/register">
                <Button 
                  className="ml-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-medium"
                >
                  {translations.register}
                </Button>
              </Link>
            </div>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="p-2 -mr-2" aria-label="Menü öffnen/schließen">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" className="py-2 text-foreground/90 hover:text-primary transition-colors" onClick={toggleMenu}>{translations.home}</Link>
            <Link to="/coaching" className="py-2 text-foreground/90 hover:text-primary transition-colors" onClick={toggleMenu}>{translations.coaching}</Link>
            <Link to="/jobs" className="py-2 text-foreground/90 hover:text-primary transition-colors" onClick={toggleMenu}>{translations.jobs}</Link>
            <Link to="/talent-pool" className="py-2 text-foreground/90 hover:text-primary transition-colors" onClick={toggleMenu}>{translations.talentpool}</Link>
            <div className="h-px w-full bg-border/20 my-2"></div>
            <Link to="/login" className="py-2 text-foreground/90 hover:text-primary transition-colors" onClick={toggleMenu}>{translations.login}</Link>
            <Link to="/register" onClick={toggleMenu}>
              <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-medium">
                {translations.register}
              </Button>
            </Link>
            <Button 
              variant="outline"
              onClick={toggleLanguage}
              className="mt-2 flex items-center justify-center gap-2 text-foreground/80 border-border/50"
            >
              <Languages className="w-5 h-5" />
              {language === "DE" ? "Switch to English" : "Zu Deutsch wechseln"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
