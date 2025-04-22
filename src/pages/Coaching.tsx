
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

const Coaching = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <Section bgColor="bg-dark-300" className="py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Unser <span className="text-gradient">Coaching</span> Angebot
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Maßgeschneiderte Beratung für jeden Karriereschritt
            </p>
          </div>
          
          {/* Coaching content would go here */}
          <div className="py-12 text-center">
            <p className="text-muted-foreground">Coaching-Inhalte werden hier angezeigt.</p>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Coaching;
