import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import BookmarkButton from "@/components/ui/BookmarkButton";
import FileUploadForm from "@/components/ui/FileUpload"; // Add this import

const availableRoles = [
  "MentorIn",
  "Coach",
  "Talentmanager",
  "Mentoring-Management",
  "Unternehmensvertretung"
];

const displayNameRegex = /^(?=.{1,15}$)(?=[^\d]*\d{0,2}[^\d]*$)[A-Za-zÄÖÜäöüß]+[A-Za-zÄÖÜäöüß\d]*$/;

const roleTranslations: Record<string, { DE: string; EN: string }> = {
  MentorIn: { DE: "MentorIn", EN: "Mentor" },
  Coach: { DE: "Coach", EN: "Coach" },
  Talentmanager: { DE: "Talentmanager", EN: "Talent Manager" },
  "Mentoring-Management": { DE: "Mentoring-Management", EN: "Mentoring Management" },
  Unternehmensvertretung: { DE: "Unternehmensvertretung", EN: "Company Representative" }
};

const UserProfileSettings = () => {
  const [displayName, setDisplayName] = useState("MaxMustermann");
  const [profilePic, setProfilePic] = useState("");
  const [roles, setRoles] = useState<string[]>(["MentorIn", "Coach"]);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();

  const t = {
    settings: language === "DE" ? "Profileinstellungen" : "Profile Settings",
    profilePic: language === "DE" ? "Profilbild" : "Profile Picture",
    chooseFile: language === "DE" ? "Datei auswählen" : "Choose file",
    noFile: language === "DE" ? "Keine Datei gewählt" : "No file chosen",
    displayName: language === "DE" ? "Anzeigename" : "Display Name",
    displayNameError:
      language === "DE"
        ? "Der Anzeigename muss ein einzelnes Wort (ohne Leerzeichen) sein, nur Buchstaben und maximal 2 Zahlen, keine Sonderzeichen, maximal 15 Zeichen."
        : "Display name must be a single word (no spaces), only letters and max 2 numbers, no special characters, max 15 characters.",
    roles: language === "DE" ? "Rollen" : "Roles",
    save: language === "DE" ? "Änderungen speichern" : "Save Changes"
  };

  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleRoleChange = (role: string) => {
    setRoles(prev =>
      prev.includes(role)
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const handleProfilePicChange = (file: File, url: string) => {
    setProfilePic(url);
    setSelectedFileName(file.name);
  };

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      value.length <= 15 &&
      /^[A-Za-zÄÖÜäöüß\d]*$/.test(value) &&
      !/\s/.test(value)
    ) {
      setDisplayName(value);
      setError(null);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayNameRegex.test(displayName)) {
      setError(t.displayNameError);
      return;
    }
    setError(null);
    // Implement save logic here (API call, etc.)
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSave}>
      <h3 className="text-xl font-semibold text-foreground mb-4">{t.settings}</h3>
      {/* Profile Picture */}
      <div>
        <Label className="block mb-2 text-sm font-medium">{t.profilePic}</Label>
        <FileUploadForm
          onFileChange={handleProfilePicChange}
          currentPic={profilePic}
          selectedFileName={selectedFileName}
        />
      </div>
      {/* Display Name */}
      <div>
        <Label htmlFor="displayName" className="block mb-2 text-sm font-medium">{t.displayName}</Label>
        <Input
          id="displayName"
          value={displayName}
          onChange={handleDisplayNameChange}
          className="w-full"
          autoComplete="off"
        />
        {error && (
          <div className="text-red-500 text-sm mt-1">{error}</div>
        )}
      </div>
      <div className="mt-4 w-fit">
        <button type="submit" className="hidden" aria-hidden="true"></button>
        <BookmarkButton />
      </div>
    </form>
  );
};

export default UserProfileSettings;