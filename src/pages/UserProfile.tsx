import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import UserProfileInfo from "@/components/profile/UserProfileInfo";
import UserProfileSettings from "@/components/profile/UserProfileSettings";
import { QuestionnaireWizard } from "@/components/QuestionnaireWizard";

const mockProfile = {
  displayName: "Max Mustermann",
  profilePic: "/placeholder.svg",
  roles: ["MentorIn", "Coach"]
};

const UserProfile = () => {
  const [wizardDone, setWizardDone] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const done = localStorage.getItem("questionnaireDone") === "true";
    setWizardDone(done);
    if (!done) {
      navigate("/questionnaire", { replace: true });
    }
  }, [navigate]);

  if (!wizardDone) {
    // Optionally render nothing or a loading spinner
    return null;
  }

  // Normal profile UI
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark-900 to-dark-950">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto glass-card border-highlight/20 shadow-xl shadow-highlight/5 overflow-hidden backdrop-blur-xl p-10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Profile Info */}
            <UserProfileInfo
              displayName={mockProfile.displayName}
              profilePic={mockProfile.profilePic}
              roles={mockProfile.roles}
            />
            {/* Right: Profile Settings */}
            <UserProfileSettings />
          </div>
        </div>
        <Button
          onClick={() => {
            localStorage.removeItem("questionnaireDone");
            window.location.reload();
          }}
          className="mt-8"
          variant="outline"
        >
          Reset Questionnaire (dev)
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;