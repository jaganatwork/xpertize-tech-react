import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/services/ServicesSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* REAL SERVICES SECTION */}
      <ServicesSection />

      {/* Placeholder sections so scroll behavior continues to work */}
      <section id="industries" className="h-screen bg-gray-200 flex items-center justify-center text-3xl">
        Industries Section Coming Soon
      </section>

      <section id="case-studies" className="h-screen bg-gray-300 flex items-center justify-center text-3xl">
        Case Studies Coming Soon
      </section>

      <section id="about" className="h-screen bg-gray-400 flex items-center justify-center text-3xl">
        About Section Coming Soon
      </section>

      <section id="contact" className="h-screen bg-gray-500 flex items-center justify-center text-3xl">
        Contact Section Coming Soon
      </section>
    </>
  );
}

export default App;
