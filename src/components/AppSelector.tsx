
import { Link } from "react-router-dom";
import { Calendar, Briefcase, User } from "lucide-react";

const colorMap = [
  "bg-gradient-to-tr from-primary/90 via-primary/70 to-[#b7ffcf]/50",
  "bg-gradient-to-tr from-[#ffb357]/90 via-primary/70 to-[#fcc2ff]/50",
  "bg-gradient-to-tr from-[#b7ffcf]/90 via-primary/70 to-[#ffdec0]/50"
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
  const apps: AppOption[] = [
    {
      id: "mentorbooking",
      title: "Mentorbooking",
      description: "Buche Termine mit deinen Mentoren",
      icon: <Calendar className="h-10 w-10 text-white" />,
      path: "/apps/mentorbooking",
      iconBg: colorMap[0],
    },
    {
      id: "jobsync",
      title: "JobSync",
      description: "Verwalte deine Bewerbungen",
      icon: <Briefcase className="h-10 w-10 text-white" />,
      path: "/apps/jobsync",
      iconBg: colorMap[1],
    },
    {
      id: "accountsettings",
      title: "Accountsettings",
      description: "Verwalte deine persönlichen Daten",
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
          <div className="h-full service-card border-border/30 bg-secondary/30 backdrop-blur-sm hover:shadow-lg">
            <div className="flex flex-col items-center justify-center pt-8 pb-4">
              {/* logo + icon gradient */}
              <div className={`mb-4 rounded-full p-4 ${app.iconBg} shadow-lg flex items-center justify-center`}>
                {app.icon}
              </div>
              <h3 className="mt-1 text-2xl font-bold text-foreground">{app.title}</h3>
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
