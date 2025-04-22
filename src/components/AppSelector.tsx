
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
      iconBg: colorMap[2],
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
          <div className="h-full service-card border-border/30 bg-secondary/30 backdrop-blur-sm hover:shadow-lg relative overflow-hidden group transition-all duration-300">
            {/* Golden glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ffd700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Golden border glow on hover */}
            <div className="absolute inset-0 border border-[#ffd700]/0 group-hover:border-[#ffd700]/30 rounded-lg transition-all duration-300"></div>
            
            <div className="flex flex-col items-center justify-center pt-8 pb-4 relative z-10">
              {/* logo + icon gradient */}
              <div className={`mb-4 rounded-full p-4 ${app.iconBg} shadow-lg shadow-[#ffd700]/20 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}>
                {app.icon}
              </div>
              <h3 className="mt-1 text-2xl font-bold text-foreground group-hover:text-[#ffd700] transition-colors duration-300">{app.title}</h3>
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
