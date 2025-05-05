import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface UserProfileInfoProps {
  displayName: string;
  profilePic: string;
  roles: string[];
}

const roleTranslations: Record<string, { DE: string; EN: string }> = {
  MentorIn: { DE: "MentorIn", EN: "Mentor" },
  Coach: { DE: "Coach", EN: "Coach" },
  Talentmanager: { DE: "Talentmanager", EN: "Talent Manager" },
  "Mentoring-Management": { DE: "Mentoring-Management", EN: "Mentoring Management" },
  Unternehmensvertretung: { DE: "Unternehmensvertretung", EN: "Company Representative" }
};

const UserProfileInfo = ({ displayName, profilePic, roles }: UserProfileInfoProps) => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center gap-6 border-r border-border/30 pr-0 md:pr-8">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-primary object-cover shadow-lg"
      />
      <h2 className="text-3xl font-bold text-foreground">{displayName}</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {roles.map(role => (
          <span
            key={role}
            className="px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20"
          >
            {roleTranslations[role][language === "DE" ? "DE" : "EN"]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserProfileInfo;