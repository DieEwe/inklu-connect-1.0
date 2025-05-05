import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const UserAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark-900 to-dark-950">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="glass-card p-10 rounded-2xl w-full max-w-xl flex flex-col gap-8">
          <h1 className="text-2xl font-bold mb-4 text-center">Verwaltung</h1>
          <div className="flex flex-col gap-4">
            <Button
              className="w-full py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-[#6fb8e5] to-blue-200 hover:from-[#4a90c2] hover:to-blue-300 shadow-md shadow-[#6fb8e5]/30 transition"
              onClick={() => navigate("/admin/users/roles")}
            >
              👥 User Rollenzuweisung
            </Button>
            <Button
              className="w-full py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-800 hover:to-gray-600 shadow-md shadow-gray-500/20 transition"
              variant="outline"
            >
              🛠️ Mock Button 1
            </Button>
            <Button
              className="w-full py-5 text-lg font-semibold rounded-xl bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-800 hover:to-gray-600 shadow-md shadow-gray-500/20 transition"
              variant="outline"
            >
              📊 Mock Button 2
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserAdmin;