import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Puzzle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <Section id="hero" bgColor="bg-dark-300" className="min-h-[90vh] flex items-center">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <img 
                  src="/logo.png" 
                  alt="Inklu-Connect Logo" 
                  className="h-12 w-12 mr-4"
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-gradient">Inklu-Connect</span>
                </h1>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Karrierecoaching für deine berufliche Zukunft
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Wir begleiten dich auf deinem Weg zum Traumjob mit persönlichem Coaching und exklusiven Karrieremöglichkeiten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#5cb43d] hover:bg-[#5cb43d]/90 text-white px-8 py-6"
                >
                  Coaching entdecken
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#5cb43d] text-[#5cb43d] hover:bg-[#5cb43d]/10 px-8 py-6"
                >
                  Talentpool beitreten
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-highlight to-highlight-secondary rounded-xl blur-xl opacity-40"></div>
                <div className="relative bg-dark-200 rounded-xl p-8 border border-border/50">
                  <img 
                    src="/placeholder.svg" 
                    alt="Karrierecoaching" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Coaching Section */}
        <Section id="coaching" bgColor="bg-dark-200" className="py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unser <span className="text-gradient">Coaching</span> Angebot
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maßgeschneiderte Beratung für jeden Karriereschritt
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Karriereberatung",
                description: "Individuelle Beratung für deine berufliche Weiterentwicklung"
              },
              {
                title: "Bewerbungscoaching",
                description: "Optimiere deine Bewerbungsunterlagen und bereite dich optimal auf Vorstellungsgespräche vor"
              },
              {
                title: "Führungskräfteentwicklung",
                description: "Entwickle deine Führungsqualitäten und baue deine Stärken aus"
              }
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover-scale">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Job Placement Section */}
        <Section id="jobs" bgColor="bg-dark-300" className="py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">Jobs vermitteln</span> leicht gemacht
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wir verbinden Unternehmen mit den besten Talenten. Unsere Experten kennen den Markt und finden die passende Position für dich.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Exklusive Stellenangebote",
                  "Persönliche Vermittlung",
                  "Unterstützung im Bewerbungsprozess",
                  "Langfristige Karrierebegleitung"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-highlight mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-highlight hover:bg-highlight-hover text-white">
                Alle Jobs anzeigen
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-highlight to-highlight-secondary rounded-xl blur-xl opacity-30"></div>
                <div className="relative bg-dark-200 rounded-xl p-8 border border-border/50">
                  <img 
                    src="/placeholder.svg" 
                    alt="Jobs vermitteln" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Talentpool Section */}
        <Section id="talent-pool" bgColor="bg-dark-400" className="py-24">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Werde Teil unseres <span className="text-gradient">Talentpools</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Melde dich für unseren exklusiven Talentpool an und erhalte Zugang zu erstklassigen Karrieremöglichkeiten, die nicht öffentlich ausgeschrieben werden.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Exklusive Jobs",
                    description: "Zugang zu nicht öffentlich ausgeschriebenen Stellen"
                  },
                  {
                    title: "Schnellerer Bewerbungsprozess",
                    description: "Direkter Kontakt zu Entscheidern"
                  },
                  {
                    title: "Karriere-Updates",
                    description: "Regelmäßige Updates zu passenden Stellenangeboten"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-dark-300/50 p-4 rounded-lg">
                    <h3 className="font-medium text-highlight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-highlight hover:bg-highlight-hover text-white">
                Zum Talentpool
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-highlight to-highlight-secondary rounded-xl blur-xl opacity-30"></div>
                <div className="relative bg-dark-300 rounded-xl p-8 border border-border/50">
                  <img 
                    src="/placeholder.svg" 
                    alt="Talentpool" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section id="cta" bgColor="bg-dark-300" className="py-20">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-highlight/20 to-highlight-secondary/20"></div>
            <div className="relative p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Bereit für den nächsten Karriereschritt?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Registriere dich jetzt und starte deine Reise zu neuen beruflichen Möglichkeiten. Unser Team steht bereit, um dich zu unterstützen.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-highlight hover:bg-highlight-hover text-white px-8 py-6 text-lg">
                  Jetzt registrieren
                </Button>
                <Link to="/login">
                  <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10 px-8 py-6 text-lg">
                    Zum Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
