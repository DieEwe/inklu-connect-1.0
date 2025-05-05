import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppSelector from "@/components/AppSelector";

const Dashboard = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-dark-900 to-dark-950">
    <Navbar />
    <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
      <AppSelector />
    </main>
    <Footer />
  </div>
);

export default Dashboard;