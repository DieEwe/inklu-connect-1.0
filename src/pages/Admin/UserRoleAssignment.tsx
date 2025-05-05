import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext"; // Make sure this import is correct
import BookmarkButton from "@/components/ui/BookmarkButton";

const possibleRoles = [
  "mentor",
  "coach",
  "talent manager",
  "unternehmen",
  "interessent",
  "talent",
  "mentoring management"
];

const possibleInterests = [
  "talent",
  "mentor",
  "prospect"
];

const translations = {
  en: {
    title: "User Role Assignment",
    internal: "Internal",
    company: "Company",
    disability: "Disability",
    interests: "Interests",
    assignRoles: "Assign Roles",
    save: "Save",
    saving: "Saving...",
    yes: "Yes",
    no: "No",
    noAnswer: "No answer",
    email: "Email"
  },
  de: {
    title: "User Rollenzuweisung",
    internal: "Intern",
    company: "Unternehmen",
    disability: "Beeinträchtigung",
    interests: "Interessen",
    assignRoles: "Rollen zuweisen",
    save: "Speichern",
    saving: "Speichert...",
    yes: "Ja",
    no: "Nein",
    noAnswer: "Keine Angabe",
    email: "E-Mail"
  }
};

const roleLabels = {
  en: {
    mentor: "Mentor",
    coach: "Coach",
    "talent manager": "Talent Manager",
    unternehmen: "Company",
    interessent: "Prospect",
    talent: "Talent",
    "mentoring management": "Mentoring Management"
  },
  de: {
    mentor: "Mentor",
    coach: "Coach",
    "talent manager": "Talentmanager",
    unternehmen: "Unternehmen",
    interessent: "Interessent",
    talent: "Talent",
    "mentoring management": "Mentoring-Management"
  }
};

const interestLabels = {
  en: {
    talent: "Talent",
    mentor: "Mentor",
    prospect: "Prospect"
  },
  de: {
    talent: "Talent",
    mentor: "Mentor",
    prospect: "Interessent"
  }
};

const mockUsers = [
  {
    id: 1,
    displayName: "Anna Schmidt",
    email: "anna@example.com",
    questionnaire: {
      internal: false,
      company: true,
      disability: "yes",
      interests: ["talent", "prospect"]
    },
    roles: ["talent"]
  },
  {
    id: 2,
    displayName: "Max Mustermann",
    email: "max@example.com",
    questionnaire: {
      internal: false,
      company: false,
      disability: "no",
      interests: ["prospect"]
    },
    roles: ["interessent"]
  }
];

const getDisabilityLabel = (val: string, t: any) => {
  if (val === "yes") return t.yes;
  if (val === "no") return t.no;
  return t.noAnswer;
};

const UserRoleAssignment = () => {
  const [users, setUsers] = useState(mockUsers);
  const [saving, setSaving] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language === "DE" ? "de" : "en"];

  const handleRoleChange = (userId: number, role: string) => {
    setUsers(users =>
      users.map(user =>
        user.id === userId
          ? {
              ...user,
              roles: user.roles.includes(role)
                ? user.roles.filter(r => r !== role)
                : [...user.roles, role]
            }
          : user
      )
    );
  };

  const handleSave = (userId: number) => {
    setSaving(userId);
    setTimeout(() => {
      setSaving(null);
      // Here you would send the updated roles to your backend
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark-900 to-dark-950">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl space-y-6">
          <div className="flex justify-center items-center mb-4">
            <h1 className="text-2xl font-bold text-center">{t.title}</h1>
          </div>
          {users.map((user) => (
            <Card key={user.id} className="mb-4">
              <CardHeader>
                <CardTitle>
                  <span className="text-foreground font-semibold">{user.displayName}</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    ({t.email}: {user.email})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 mb-4">
                  <div>
                    <strong>{t.internal}:</strong> {user.questionnaire.internal ? t.yes : t.no}
                  </div>
                  <div>
                    <strong>{t.company}:</strong> {user.questionnaire.company ? t.yes : t.no}
                  </div>
                  <div>
                    <strong>{t.disability}:</strong> {getDisabilityLabel(user.questionnaire.disability, t)}
                  </div>
                  <div>
                    <strong>{t.interests}:</strong>{" "}
                    {user.questionnaire.interests
                      .map((interest) => interestLabels[language === "DE" ? "de" : "en"][interest] || interest)
                      .join(", ")}
                  </div>
                </div>
                <div className="mb-4">
                  <strong>{t.assignRoles}:</strong>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {possibleRoles.map(role => (
                      <label
                        key={role}
                        className="flex items-center gap-2 px-3 py-1 rounded-lg cursor-pointer border border-accent bg-transparent hover:bg-accent/10 transition"
                      >
                        <input
                          type="checkbox"
                          checked={user.roles.includes(role)}
                          onChange={() => handleRoleChange(user.id, role)}
                          className="accent-accent"
                        />
                        <span className="capitalize text-foreground">
                          {roleLabels[language === "DE" ? "de" : "en"][role] || role}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-2 flex">
                  <div
                    onClick={() => handleSave(user.id)}
                    style={{ opacity: saving === user.id ? 0.6 : 1, pointerEvents: saving === user.id ? "none" : "auto" }}
                  >
                    <BookmarkButton variant="green" />
                  </div>
                  {saving === user.id && (
                    <span className="ml-4 text-muted-foreground flex items-center">{t.saving}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserRoleAssignment;