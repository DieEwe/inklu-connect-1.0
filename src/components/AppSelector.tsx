
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Briefcase, User } from "lucide-react";

interface AppOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

const AppSelector = () => {
  const apps: AppOption[] = [
    {
      id: "mentorbooking",
      title: "Mentorbooking",
      description: "Buche Termine mit deinen Mentoren",
      icon: <Calendar className="h-10 w-10 text-highlight" />,
      path: "/apps/mentorbooking"
    },
    {
      id: "jobsync",
      title: "JobSync",
      description: "Verwalte deine Bewerbungen",
      icon: <Briefcase className="h-10 w-10 text-highlight" />,
      path: "/apps/jobsync"
    },
    {
      id: "accountsettings",
      title: "Accountsettings",
      description: "Verwalte deine persönlichen Daten",
      icon: <User className="h-10 w-10 text-highlight" />,
      path: "/apps/accountsettings"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {apps.map((app) => (
        <Link 
          to={app.path} 
          key={app.id}
          className="hover-scale block"
        >
          <Card className="h-full glass-card border-highlight/20 hover:border-highlight/50 transition-colors">
            <CardHeader className="flex items-center justify-center pt-6 pb-2">
              {app.icon}
              <CardTitle className="mt-4 text-xl">{app.title}</CardTitle>
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
