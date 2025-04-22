
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto glass-card border-highlight/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Registrierung</CardTitle>
              <CardDescription>
                Erstelle deinen Account, um alle Vorteile zu nutzen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Vorname</Label>
                    <Input id="firstName" placeholder="Max" required className="bg-dark-400/70" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nachname</Label>
                    <Input id="lastName" placeholder="Mustermann" required className="bg-dark-400/70" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required className="bg-dark-400/70" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Passwort</Label>
                  <Input id="password" type="password" placeholder="••••••••" required className="bg-dark-400/70" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="passwordConfirm">Passwort bestätigen</Label>
                  <Input id="passwordConfirm" type="password" placeholder="••••••••" required className="bg-dark-400/70" />
                </div>
                
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm leading-tight">
                    Ich akzeptiere die <a href="/datenschutz" className="text-highlight hover:text-highlight-hover">Datenschutzerklärung</a> und die <a href="/terms" className="text-highlight hover:text-highlight-hover">AGB</a>
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-highlight hover:bg-highlight-hover text-white"
                >
                  Registrieren
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Bereits registriert? </span>
                <a href="/login" className="text-highlight hover:text-highlight-hover">
                  Zum Login
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
