
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-400 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Inklu-Connect Logo" 
              className="h-8 w-8"
            />
            <Link to="/" className="text-xl font-bold text-gradient">
              Inklu-Connect
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Inklu-Connect. Alle Rechte vorbehalten.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
