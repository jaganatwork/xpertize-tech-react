import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Placeholder sections so scroll behavior can be tested */}
      <section id="services" className="h-screen bg-gray-100"></section>
      <section id="industries" className="h-screen bg-gray-200"></section>
      <section id="case-studies" className="h-screen bg-gray-300"></section>
      <section id="about" className="h-screen bg-gray-400"></section>
      <section id="contact" className="h-screen bg-gray-500"></section>
    </>
  )
}

export default App
