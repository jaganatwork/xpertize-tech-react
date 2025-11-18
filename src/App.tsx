import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/services/ServicesSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* SECTIONS */}
      <section id="services">
        <ServicesSection />
      </section>

      <section id="industries" className="h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1>Industries Section (Coming Soon)</h1>
      </section>

      <section id="case-studies" className="h-screen bg-gray-800 text-white flex items-center justify-center">
        <h1>Case Studies Section</h1>
      </section>

      <section id="about" className="h-screen bg-gray-700 text-white flex items-center justify-center">
        <h1>About Section</h1>
      </section>

      <section id="contact" className="h-screen bg-gray-600 text-white flex items-center justify-center">
        <h1>Contact Section</h1>
      </section>
    </>
  );
}

export default App;
