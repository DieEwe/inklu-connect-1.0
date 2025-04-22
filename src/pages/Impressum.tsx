
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <Section bgColor="bg-dark-300" className="py-16">
          <Card className="max-w-3xl mx-auto glass-card border-highlight/20">
            <CardHeader>
              <CardTitle className="text-2xl">Impressum</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h2 className="text-lg font-medium">Angaben gemäß § 5 TMG</h2>
                <p className="mt-2 text-muted-foreground">
                  NocturneNexus GmbH<br />
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-medium">Kontakt</h2>
                <p className="mt-2 text-muted-foreground">
                  Telefon: +49 123 456789<br />
                  E-Mail: info@nocturnenexus.com
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-medium">Handelsregister</h2>
                <p className="mt-2 text-muted-foreground">
                  Registergericht: Amtsgericht Musterstadt<br />
                  Registernummer: HRB 12345
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-medium">Umsatzsteuer-ID</h2>
                <p className="mt-2 text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                  DE123456789
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-medium">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="mt-2 text-muted-foreground">
                  Max Mustermann<br />
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland
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

export default Impressum;
