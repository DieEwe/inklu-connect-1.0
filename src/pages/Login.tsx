import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppSelector from "@/components/AppSelector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PuzzleSquare } from "@/components/home/PuzzleSquare";
import { GlowButton } from "@/components/ui/GlowButton";

const Login = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hoveredLink, setHoveredLink] = useState(false);
  const navigate = useNavigate(); // Add this line

  const translations = {
    welcome: language === "DE" ? "Willkommen zurück" : "Welcome back",
    subtitle: language === "DE" ? "Bitte melde dich an, um fortzufahren" : "Please sign in to continue",
    email: language === "DE" ? "E-Mail" : "email",
    password: language === "DE" ? "Passwort" : "Password",
    forgotPassword: language === "DE" ? "Passwort vergessen?" : "Forgot password?",
    loginButton: language === "DE" ? "Anmelden" : "Sign in",
    noAccount: language === "DE" ? "Noch kein Konto?" : "Don't have an account?",
    register: language === "DE" ? "Jetzt registrieren" : "Sign Up Now"
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard"); // Redirect after login
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark-900 to-dark-950">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6"
        >
          <Card className="mx-auto glass-card border-highlight/20 shadow-xl shadow-highlight/5 overflow-hidden backdrop-blur-xl max-w-md">
            <div className="flex flex-col items-center pt-8">
              <div className="relative h-[300px] w-[300px] flex items-center justify-center scale-75">
                <PuzzleSquare />
              </div>
              
              <CardHeader className="text-center pt-2 pb-4">
                <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-highlight to-purple-300">
                  {translations.welcome}
                </CardTitle>
                <CardDescription className="text-base mt-2 text-gray-300">
                  {translations.subtitle}
                </CardDescription>
              </CardHeader>
            </div>
            
            <CardContent className="px-8 pb-8">
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2.5">
                  <Label htmlFor="email" className="text-base font-medium text-gray-200">
                    {translations.email}
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-dark-800/70 border-dark-400/30 h-12 text-base placeholder:text-gray-500 text-black"
                  />
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-base font-medium text-gray-200">
                      {translations.password}
                    </Label>
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
                    className="bg-dark-800/70 border-dark-400/30 h-12 text-base placeholder:text-gray-500 text-black"
                  />
                </div>
                <GlowButton
                  type="submit"
                  variant="wideHighlight"
                  className="w-full h-12 mt-2 text-white text-base font-medium"
                >
                  {translations.loginButton}
                </GlowButton>
              </form>
              
              <div className="mt-8 text-center">
                <span className="text-base text-gray-400">{translations.noAccount}</span>{" "}
                <motion.a 
                  href="/register"
                  className="text-highlight hover:text-highlight-hover font-medium text-base inline-flex items-center"
                  onMouseEnter={() => setHoveredLink(true)}
                  onMouseLeave={() => setHoveredLink(false)}
                >
                  {translations.register}
                  <motion.span
                    animate={{ x: hoveredLink ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={18} className="ml-1.5" />
                  </motion.span>
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
