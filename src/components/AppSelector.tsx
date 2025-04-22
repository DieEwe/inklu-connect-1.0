
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Briefcase, User } from "lucide-react";

const colorMap = [
  "bg-gradient-to-tr from-[#73bde9] via-[#8ae1f4] to-[#b7ffcf]",
  "bg-gradient-to-tr from-[#ffb357] via-[#73bde9] to-[#fcc2ff]",
  "bg-gradient-to-tr from-[#b7ffcf] via-[#73bde9] to-[#ffdec0]"
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
          <Card className="h-full glass-card border-[#73bde9]/40 hover:border-[#73bde9]/75 transition-colors shadow-lg">
            <CardHeader className="flex flex-col items-center justify-center pt-8 pb-3">
              {/* logo + icon gradient */}
              <div className={`mb-4 rounded-full p-3 ${app.iconBg} shadow-lg flex items-center justify-center`}>
                {app.icon}
              </div>
              <CardTitle className="mt-1 text-2xl font-bold text-[#73bde9]">{app.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground">
                {app.description}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default AppSelector;
