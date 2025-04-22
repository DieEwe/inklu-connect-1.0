import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-300/90 backdrop-blur-lg z-50 border-b border-border/50 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="Inklu-Connect Logo" 
              className="h-12 w-12 rounded-xl shadow-md ring-2 ring-[#73bde9]"
              style={{ objectFit: "contain", background: "#181a20" }}
            />
            <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-gradient drop-shadow">
              Inklu-Connect
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link to="/" className="nav-link nav-link-lg">Home</Link>
            <Link to="/coaching" className="nav-link nav-link-lg">Coaching</Link>
            <Link to="/jobs" className="nav-link nav-link-lg">Jobs vermitteln</Link>
            <Link to="/talent-pool" className="nav-link nav-link-lg">Talentpool</Link>
            <div className="h-8 w-px bg-border/50 mx-3"></div>
            <Link to="/login" className="nav-link nav-link-lg font-semibold">
              Login
            </Link>
            <Link to="/register">
              <Button 
                variant="outline"
                className="ml-3 border-[#73bde9] text-[#73bde9] font-bold transition-all duration-200 hover:bg-[#73bde9]/10 text-lg py-3 px-6 rounded-xl shadow"
              >
                Registrieren
              </Button>
            </Link>
            <Button 
              variant="ghost"
              onClick={toggleLanguage}
              className="ml-3 flex items-center gap-2 px-4 py-2 text-lg"
              aria-label="Sprache wechseln"
            >
              <Languages className="w-6 h-6 mr-1" />
              {language === "DE" ? "DE" : "EN"}
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="p-2" aria-label="Menü öffnen/schließen">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark-400/95 border-t border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4 text-xl">
            <Link to="/" className="py-2 text-foreground/90 hover:text-[#73bde9] font-medium transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/coaching" className="py-2 text-foreground/90 hover:text-[#73bde9]" onClick={toggleMenu}>Coaching</Link>
            <Link to="/jobs" className="py-2 text-foreground/90 hover:text-[#73bde9]" onClick={toggleMenu}>Jobs vermitteln</Link>
            <Link to="/talent-pool" className="py-2 text-foreground/90 hover:text-[#73bde9]" onClick={toggleMenu}>Talentpool</Link>
            <div className="h-px w-full bg-border/50 my-2"></div>
            <Link to="/login" className="py-2 text-foreground/90 hover:text-[#73bde9]" onClick={toggleMenu}>Login</Link>
            <Link to="/register" onClick={toggleMenu}>
              <Button className="w-full bg-[#73bde9] hover:bg-[#45709e] text-white font-bold text-xl py-3 rounded-lg">
                Registrieren
              </Button>
            </Link>
            <Button 
              variant="outline"
              onClick={toggleLanguage}
              className="mt-4 flex items-center gap-2 text-lg border-[#73bde9] text-[#73bde9] hover:bg-[#73bde9]/10"
            >
              <Languages className="w-6 h-6 mr-2" />
              {language === "DE" ? "Switch to English" : "Zu Deutsch wechseln"}
            </Button>
          </div>
        </div>
      )}
      <style>{`
        .nav-link-lg {
          font-size: 1.35rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          padding: 0.75rem 1.5rem;
        }
        .nav-link {
          color: #e6edf3;
          border-radius: 0.6em;
          transition: background 0.2s, color 0.2s;
        }
        .nav-link:hover {
          color: #73bde9;
          background: rgba(115,189,233,0.10);
        }
        .text-gradient {
          background: linear-gradient(90deg,#73bde9 20%,#8ae1f4 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
               background-clip: text;
               text-fill-color: transparent;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
