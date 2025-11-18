export default function HeroSection() {
  return (
<section className="h-screen bg-gradient-to-br from-blue-700 to-cyan-600 text-white flex items-center pt-24">

      <div className="text-center px-6 max-w-3xl">

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          AI-Powered Staffing for SDETs, Developers & Cloud Engineers
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10">
          Xpertize Tech AI Staffing Solutions LLC helps companies accelerate 
          delivery with vetted engineers specializing in automation, full-stack, 
          cloud, and AI-driven software delivery.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Hire Talent
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Schedule a Call
          </a>
        </div>

      </div>
    </section>
  );
}
