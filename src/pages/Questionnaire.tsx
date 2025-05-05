import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuestionnaireWizard } from "@/components/QuestionnaireWizard";
import { useNavigate } from "react-router-dom";

const Questionnaire = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    localStorage.setItem("questionnaireDone", "true");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark-900 to-dark-950">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
        <QuestionnaireWizard onComplete={handleComplete} />
      </main>
      <Footer />
    </div>
  );
};

export default Questionnaire;