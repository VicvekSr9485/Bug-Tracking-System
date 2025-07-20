import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <AppNavbar />
      
      <main className="flex-grow">
        <HeroSection />
      </main>
      
      <AppFooter />
    </div>
  );
};

export default Landing;