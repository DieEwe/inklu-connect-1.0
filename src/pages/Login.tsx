
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppSelector from "@/components/AppSelector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

const Login = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const translations = {
    welcome: language === "DE" ? "Willkommen zurück" : "Welcome back",
    subtitle: language === "DE" ? "Bitte melde dich an, um fortzufahren" : "Please sign in to continue",
    email: language === "DE" ? "Email" : "Email",
    password: language === "DE" ? "Passwort" : "Password",
    forgotPassword: language === "DE" ? "Passwort vergessen?" : "Forgot password?",
    loginButton: language === "DE" ? "Anmelden" : "Sign in",
    noAccount: language === "DE" ? "Noch kein Konto?" : "Don't have an account?",
    register: language === "DE" ? "Jetzt registrieren" : "Register now",
    chooseApp: language === "DE" ? "Wähle deine Anwendung" : "Choose your application",
    chooseDesc: language === "DE" ? "Wähle einen Bereich, um zu starten" : "Choose an area to get started"
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle authentication here
    // For demo purposes, we're just toggling the logged in state
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          {!isLoggedIn ? (
            <Card className="max-w-md mx-auto glass-card border-highlight/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{translations.welcome}</CardTitle>
                <CardDescription>
                  {translations.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{translations.email}</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-dark-400/70"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">{translations.password}</Label>
                      <a href="#" className="text-sm text-highlight hover:text-highlight-hover">
                        {translations.forgotPassword}
                      </a>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-dark-400/70"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-highlight hover:bg-highlight-hover text-white"
                  >
                    {translations.loginButton}
                  </Button>
                </form>
                
                <div className="mt-6 text-center text-sm">
                  <span className="text-muted-foreground">{translations.noAccount}</span>
                  <a href="/register" className="text-highlight hover:text-highlight-hover">
                    {translations.register}
                  </a>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">{translations.chooseApp}</h1>
                <p className="text-muted-foreground">
                  {translations.chooseDesc}
                </p>
              </div>
              <AppSelector />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
