import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { PuzzleSquare } from "./PuzzleSquare";
import { GlowButton } from "@/components/ui/GlowButton"; 

const Hero = () => {
  const { language } = useLanguage();
  
  const translations = {
    heroTitle: language === "DE" ? 
      "<span class='text-gradient'>Talent Knows No Labels.</span>" : 
      "<span class='text-gradient'>Talent Knows No Labels.</span>",
    heroText: language === "DE" ? 
      "Gestalten Sie inklusive Unternehmenskultur durch leistungsstarke Technologie und strategische Einblicke." : 
      "Shaping inclusive culture through powerful technology and strategic insights.",
    registerBtn: language === "DE" ? "Registrieren" : "Sign Up",
    trustedBy: language === "DE" ? "Vertrauen von führenden Unternehmen" : "Trusted by leading companies",
  };

  return (
    <div className="hero-element relative z-10 flex flex-col items-center py-10">
      {/* Main title at the very top */}
      <div className="text-center w-full max-w-4xl mx-auto mb-16 animate-on-scroll opacity-0">
        <h1 className="headline-xl" dangerouslySetInnerHTML={{ __html: translations.heroTitle }}></h1>
      </div>
      
      {/* Top content - Above animation */}
      <div className="text-center w-full max-w-md mx-auto mb-14 animate-on-scroll opacity-0" style={{animationDelay: "0.1s"}}>
        <p className="text-lg mb-4">Curious about inclusion and digital tools? Start exploring!</p>
        <Link to="/about">
          <GlowButton
            variant="blue"
            size="default"
          >
            Discover More
          </GlowButton>
        </Link>
      </div>
      
      {/* Middle row with left content, animation and right content */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center mb-16">
        {/* Left content */}
        <div className="md:w-1/3 text-right px-6 mb-10 md:mb-0 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
          <div className="max-w-xs ml-auto">
            <p className="text-lg mb-4">Looking for your next opportunity? Find jobs built for your talent.</p>
            <Link to="/jobs">
              <GlowButton
                variant="purple"
                size="default"
              >
                For Job Seekers
              </GlowButton>
            </Link>
          </div>
        </div>
        
        {/* Centered animation with glowing effect */}
        <div className="md:w-1/3 flex justify-center animate-on-scroll opacity-0" style={{animationDelay: "0.3s"}}>
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-3xl opacity-20"></div>
            <div className="relative h-[300px] flex items-center justify-center">
              <PuzzleSquare />
            </div>
          </div>
        </div>
        
        {/* Right content */}
        <div className="md:w-1/3 text-left px-6 mt-10 md:mt-0 animate-on-scroll opacity-0" style={{animationDelay: "0.4s"}}>
          <div className="max-w-xs">
            <p className="text-lg mb-4">Are you a company striving for more inclusion? Let's build it together.</p>
            <Link to="/companies">
              <GlowButton
                variant="green"
                size="default"
              >
                For Companies
              </GlowButton>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom content - Below animation */}
      <div className="text-center w-full max-w-md mx-auto mb-16 animate-on-scroll opacity-0" style={{animationDelay: "0.5s"}}>
        <p className="text-lg mb-4">Have lived experience and want to inspire others? Become a mentor!</p>
        <Link to="/mentors">
          <GlowButton
            variant="orange"
            size="default"
          >
            Become a Mentor
          </GlowButton>
        </Link>
      </div>
      
      {/* Remove this section from the Hero component - it will be moved to existing section */}
      {/* Content below for CoachingServices or other existing section */}
    </div>
  );
};

export default Hero;
