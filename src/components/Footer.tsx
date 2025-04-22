
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Inklu-Connect Logo" 
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">
                Inklu-Connect
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Wir begleiten dich auf deinem Weg zum Traumjob mit persönlichem Coaching und exklusiven Karrieremöglichkeiten.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/coaching" className="text-muted-foreground hover:text-primary transition-colors">Karriereberatung</Link></li>
              <li><Link to="/coaching" className="text-muted-foreground hover:text-primary transition-colors">Bewerbungscoaching</Link></li>
              <li><Link to="/coaching" className="text-muted-foreground hover:text-primary transition-colors">Führungskräfteentwicklung</Link></li>
              <li><Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">Job Vermittlung</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Über uns</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">Partner</Link></li>
              <li><Link to="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-muted-foreground hover:text-primary transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Inklu-Connect. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-secondary/30 border border-border/30 rounded text-sm text-muted-foreground px-3 py-1">
              <option value="de">Deutsch</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
