import { Link } from "react-router-dom";
import { Calendar, Briefcase, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Vibrant gradient backgrounds with golden glow effect
const colorMap = [
  "bg-gradient-to-tr from-[#fec45c]/90 via-[#fec45c]/70 to-[#ffe7ba]/50",
  "bg-gradient-to-tr from-[#f0b040]/90 via-[#f0b040]/70 to-[#ffe7ba]/50",
  "bg-gradient-to-tr from-[#e3a528]/90 via-[#e3a528]/70 to-[#ffe7ba]/50"
];

interface AppOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  iconBg: string;
}

const AppSelector = () => {
  const { language } = useLanguage();
  
  // Translations
  const translations = {
    mentorbooking: {
      title: language === "DE" ? "Mentorbooking" : "Mentor Booking",
      description: language === "DE" ? "Buche Termine mit deinen Mentoren" : "Book appointments with your mentors"
    },
    jobsync: {
      title: language === "DE" ? "JobSync" : "JobSync",
      description: language === "DE" ? "Verwalte deine Bewerbungen" : "Manage your applications"
    },
    accountsettings: {
      title: language === "DE" ? "Accountsettings" : "Account Settings",
      description: language === "DE" ? "Verwalte deine persönlichen Daten" : "Manage your personal data"
    }
  };

  const apps: AppOption[] = [
    {
      id: "mentorbooking",
      title: translations.mentorbooking.title,
      description: translations.mentorbooking.description,
      icon: <Calendar className="h-10 w-10 text-white" />,
      path: "/apps/mentorbooking",
      iconBg: colorMap[0],
    },
    {
      id: "jobsync",
      title: translations.jobsync.title,
      description: translations.jobsync.description,
      icon: <Briefcase className="h-10 w-10 text-white" />,
      path: "/apps/jobsync",
      iconBg: colorMap[1],
    },
    {
      id: "accountsettings",
      title: translations.accountsettings.title,
      description: translations.accountsettings.description,
      icon: <User className="h-10 w-10 text-white" />,
      path: "/apps/accountsettings",
      iconBg: "bg-gradient-to-tr from-[#6a82fb]/90 via-[#48b1f3]/70 to-[#bbe1fa]/50", // blueish gradient (was useradmin)
    },
    {
      id: "myprofile",
      title: language === "DE" ? "Mein Profil" : "My Profile",
      description: language === "DE"
        ? "Zeige und bearbeite deine Profildaten"
        : "View and edit your profile details",
      icon: <User className="h-10 w-10 text-white" />,
      path: "/profile",
      iconBg: "bg-gradient-to-tr from-[#6a82fb]/90 via-[#fc5c7d]/70 to-[#ffe7ba]/50", // unchanged
    },
    {
      id: "useradmin",
      title: language === "DE" ? "Verwaltung" : "Administration",
      description: language === "DE"
        ? "Verwalte Nutzer und Rollen"
        : "Manage users and roles",
      icon: <User className="h-10 w-10 text-white" />,
      path: "/admin/users",
      iconBg: "bg-gradient-to-tr from-[#7b1e1e]/90 via-[#b91c1c]/70 to-[#ffe7ba]/50", // dark red gradient
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12">
      {apps.map((app, idx) => (
        <Link 
          to={app.path} 
          key={app.id}
          className="hover-scale block"
        >
          <div className="h-full service-card border-border/30 bg-secondary/30 backdrop-blur-sm hover:shadow-xl relative overflow-hidden group transition-all duration-300">
            {/* Remove golden glow and border overlays */}
            <div className="flex flex-col items-center justify-center pt-8 pb-4 relative z-10">
              {/* logo + icon gradient */}
              <div
                className={`mb-4 rounded-full p-4 ${app.iconBg} ${
                  app.id === "accountsettings"
                    ? "shadow-lg shadow-[#48b1f3]/30 group-hover:shadow-[#48b1f3]/60"
                    : app.id === "useradmin"
                    ? "shadow-lg shadow-[#b91c1c]/30 group-hover:shadow-[#b91c1c]/60"
                    : app.id === "myprofile"
                    ? "shadow-lg shadow-[#fc5c7d]/30 group-hover:shadow-[#fc5c7d]/60"
                    : app.id === "mentorbooking"
                    ? "shadow-lg shadow-[#fec45c]/30 group-hover:shadow-[#fec45c]/60"
                    : app.id === "jobsync"
                    ? "shadow-lg shadow-[#f0b040]/30 group-hover:shadow-[#f0b040]/60"
                    : "shadow-lg"
                } flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}
              >
                {app.icon}
              </div>
              <h3 className="mt-1 text-2xl font-bold text-foreground transition-colors duration-300">
                {app.title}
              </h3>
              <p className="text-center text-muted-foreground mt-2">
                {app.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AppSelector;
