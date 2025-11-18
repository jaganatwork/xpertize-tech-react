export default function HeroSection() {
  return (
    <section className="
      h-screen 
      bg-gradient-to-br 
      from-[#0e141f] via-[#152236] to-[#203d5a]
      text-white 
      flex items-center 
      pt-32 
      relative 
      overflow-hidden
    ">

      {/* TOP TAGLINE */}
      <div className="absolute top-24 w-full text-center text-sm md:text-base tracking-wide text-white/70">
        Autonomous Talent. Zero Hiring Stress.
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 text-center select-none">

        {/* META-STYLE GRADIENT HEADLINE */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Xpertize Tech AI isn’t another{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            staffing agency
          </span>
          —it's your{" "}
          <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-driven engineering talent layer.
          </span>
        </h1>

        {/* SUPPORTING PARAGRAPH */}
        <p className="text-lg md:text-xl text-white/80 mb-8">
          The future isn’t recruiting; it’s augmenting.  
          We help companies accelerate delivery with vetted engineers specializing in
          automation, full-stack development, cloud engineering, and AI-powered solution delivery.
        </p>

        {/* SECONDARY SUBLINE */}
        <p className="text-base md:text-lg text-blue-200 mb-12">
          Your engineering team builds faster, scales smarter, and delivers with confidence.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Request Talent
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-white/70 text-white font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Schedule Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
