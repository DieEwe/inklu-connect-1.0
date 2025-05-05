import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/ui/GlowButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { PuzzleSquare } from "@/components/home/PuzzleSquare";

const Register = () => {
  const { language } = useLanguage();
  const [hoveredLink, setHoveredLink] = useState(false);

  const translations = {
    title: language === "DE" ? "Account erstellen" : "Create Account",
    subtitle: language === "DE" ? "Erstelle deinen Account, um alle Vorteile zu nutzen" : "Create your account to use all benefits",
    email: language === "DE" ? "Email" : "Email",
    password: language === "DE" ? "Passwort" : "Password",
    confirmPassword: language === "DE" ? "Passwort bestätigen" : "Confirm Password",
    terms: language === "DE" 
      ? "Ich akzeptiere die Datenschutzerklärung und die AGB" 
      : "I accept the privacy policy and terms of service",
    registerButton: language === "DE" ? "Registrieren" : "Sign Up",
    alreadyRegistered: language === "DE" ? "Bereits registriert?" : "Already have an account?",
    toLogin: language === "DE" ? "Zum Login" : "Sign In"
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark-900 to-dark-950">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container max-w-5xl mx-auto px-6"
        >
          <Card className="mx-auto glass-card border-highlight/20 shadow-xl shadow-highlight/5 overflow-hidden backdrop-blur-xl">
            <div className="md:grid md:grid-cols-5">
              {/* Left panel - decorative */}
              <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,0,245,0.15),transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,159,253,0.15),transparent_60%)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                  {/* Change: Use transform scale in style instead of scale-75 class */}
                  <div className="relative h-[300px] w-[300px] flex items-center justify-center scale-75">
  <PuzzleSquare />
</div>
                  <div className="text-center">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-highlight to-purple-300 mb-3"
                    >

                    </motion.div>
                    <p className="text-gray-300/80 text-lg">Join our community and connect with like-minded creators.</p>
                  </div>
                </div>
              </div>
              
              {/* Right panel - form */}
              <div className="md:col-span-3 p-2">
                <CardHeader className="text-center pt-8 pb-4">
                  <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-highlight to-purple-300">
                    {translations.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2 text-gray-300">
                    {translations.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <form className="space-y-5">
                    <div className="space-y-2.5">
                      <Label htmlFor="email" className="text-base font-medium text-gray-200">
                        {translations.email}
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        required 
                        className="bg-dark-800/70 border-dark-400/30 h-12 text-base placeholder:text-gray-500" 
                      />
                    </div>
                    
                    <div className="space-y-2.5">
                      <Label htmlFor="password" className="text-base font-medium text-gray-200">
                        {translations.password}
                      </Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        required 
                        className="bg-dark-800/70 border-dark-400/30 h-12 text-base placeholder:text-gray-500" 
                      />
                    </div>
                    
                    <div className="space-y-2.5">
                      <Label htmlFor="passwordConfirm" className="text-base font-medium text-gray-200">
                        {translations.confirmPassword}
                      </Label>
                      <Input 
                        id="passwordConfirm" 
                        type="password" 
                        placeholder="••••••••" 
                        required 
                        className="bg-dark-800/70 border-dark-400/30 h-12 text-base placeholder:text-gray-500" 
                      />
                    </div>
                    
                    <div className="flex items-start space-x-3 pt-2">
                      <Checkbox id="terms" className="mt-1 data-[state=checked]:bg-highlight border-gray-500" />
                      <Label htmlFor="terms" className="text-base leading-tight text-gray-300">
                        {translations.terms}
                      </Label>
                    </div>
                    
                    {/* Button container with simplified structure */}
                    <div className="pt-5">
                      <GlowButton 
                        type="submit" 
                        variant="wideHighlight" 
                        size="lg"
                        className="w-full text-lg font-medium"
                      >
                        {translations.registerButton}
                      </GlowButton>
                    </div>
                  </form>
                  
                  <div className="mt-8 text-center">
                    <span className="text-base text-gray-400">{translations.alreadyRegistered}</span>{" "}
                    <motion.a 
                      href="/login"
                      className="text-highlight hover:text-highlight-hover font-medium text-base inline-flex items-center"
                      onMouseEnter={() => setHoveredLink(true)}
                      onMouseLeave={() => setHoveredLink(false)}
                    >
                      {translations.toLogin}
                      <motion.span
                        animate={{ x: hoveredLink ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={18} className="ml-1.5" />
                      </motion.span>
                    </motion.a>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
