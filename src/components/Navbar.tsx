import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Puzzle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-300/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Inklu-Connect Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold text-gradient">Inklu-Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/coaching" className="nav-link">Coaching</Link>
            <Link to="/jobs" className="nav-link">Jobs vermitteln</Link>
            <Link to="/talent-pool" className="nav-link">Talentpool</Link>
            
            <div className="h-6 w-px bg-border/50 mx-2"></div>
            
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register">
              <Button 
                variant="outline" 
                className="ml-2 border-[#5cb43d] text-[#5cb43d] hover:bg-[#5cb43d]/10"
              >
                Registrieren
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              onClick={toggleLanguage} 
              className="ml-2 px-2 text-sm"
            >
              {language}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="p-1">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-300 border-t border-border/50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" className="py-2 text-foreground/80 hover:text-foreground" onClick={toggleMenu}>Home</Link>
            <Link to="/coaching" className="py-2 text-foreground/80 hover:text-foreground" onClick={toggleMenu}>Coaching</Link>
            <Link to="/jobs" className="py-2 text-foreground/80 hover:text-foreground" onClick={toggleMenu}>Jobs vermitteln</Link>
            <Link to="/talent-pool" className="py-2 text-foreground/80 hover:text-foreground" onClick={toggleMenu}>Talentpool</Link>
            <div className="h-px w-full bg-border/50 my-1"></div>
            <Link to="/login" className="py-2 text-foreground/80 hover:text-foreground" onClick={toggleMenu}>Login</Link>
            <Link to="/register" onClick={toggleMenu}>
              <Button className="w-full bg-highlight hover:bg-highlight-hover text-white">
                Registrieren
              </Button>
            </Link>
            
            <Button variant="outline" onClick={toggleLanguage} className="mt-4">
              {language === "DE" ? "Switch to English" : "Zu Deutsch wechseln"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
