import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";

const Register = () => {
  const { language } = useLanguage();

  const translations = {
    title: language === "DE" ? "Registrierung" : "Registration",
    subtitle: language === "DE" ? "Erstelle deinen Account, um alle Vorteile zu nutzen" : "Create your account to use all benefits",
    firstName: language === "DE" ? "Vorname" : "First Name",
    lastName: language === "DE" ? "Nachname" : "Last Name",
    email: language === "DE" ? "Email" : "Email",
    password: language === "DE" ? "Passwort" : "Password",
    confirmPassword: language === "DE" ? "Passwort bestätigen" : "Confirm Password",
    terms: language === "DE" 
      ? "Ich akzeptiere die Datenschutzerklärung und die AGB" 
      : "I accept the privacy policy and terms of service",
    registerButton: language === "DE" ? "Registrieren" : "Register",
    alreadyRegistered: language === "DE" ? "Bereits registriert?" : "Already registered?",
    toLogin: language === "DE" ? "Zum Login" : "To Login"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto glass-card border-highlight/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{translations.title}</CardTitle>
              <CardDescription>
                {translations.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{translations.firstName}</Label>
                    <Input id="firstName" placeholder="Max" required className="bg-dark-400/70" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{translations.lastName}</Label>
                    <Input id="lastName" placeholder="Mustermann" required className="bg-dark-400/70" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{translations.email}</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required className="bg-dark-400/70" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">{translations.password}</Label>
                  <Input id="password" type="password" placeholder="••••••••" required className="bg-dark-400/70" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="passwordConfirm">{translations.confirmPassword}</Label>
                  <Input id="passwordConfirm" type="password" placeholder="••••••••" required className="bg-dark-400/70" />
                </div>
                
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm leading-tight">
                    {translations.terms}
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-highlight hover:bg-highlight-hover text-white"
                >
                  {translations.registerButton}
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">{translations.alreadyRegistered}</span>
                <a href="/login" className="text-highlight hover:text-highlight-hover">
                  {translations.toLogin}
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
