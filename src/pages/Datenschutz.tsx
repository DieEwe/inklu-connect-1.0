
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <Section bgColor="bg-dark-300" className="py-16">
          <Card className="max-w-3xl mx-auto glass-card border-highlight/20">
            <CardHeader>
              <CardTitle className="text-2xl">Datenschutzerklärung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-lg font-medium">1. Datenschutz auf einen Blick</h2>
                <p className="mt-2 text-muted-foreground">
                  Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unseres Onlineangebotes auf.
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-medium">2. Verantwortliche Stelle</h2>
                <p className="mt-2 text-muted-foreground">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  
                  NocturneNexus GmbH<br />
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland<br /><br />
                  
                  Telefon: +49 123 456789<br />
                  E-Mail: info@nocturnenexus.com
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-medium">3. Datenerfassung auf unserer Website</h2>
                <h3 className="font-medium mt-3">Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
                
                <h3 className="font-medium mt-3">Server-Log-Dateien</h3>
                <p className="mt-2 text-muted-foreground">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-medium">4. Datenschutzbeauftragter</h2>
                <p className="mt-2 text-muted-foreground">
                  Gesetzlich vorgeschriebener Datenschutzbeauftragter ist:<br /><br />
                  
                  Max Mustermann<br />
                  E-Mail: datenschutz@nocturnenexus.com
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-medium">5. Ihre Rechte</h2>
                <p className="mt-2 text-muted-foreground">
                  Sie haben das Recht auf Auskunft, Berichtigung oder Löschung aller gespeicherten Daten, auf Einschränkung der Verarbeitung, ein Widerspruchsrecht sowie ein Recht auf Datenübertragbarkeit. Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
                </p>
              </div>
            </CardContent>
          </Card>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;
