import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      {/* Use MetaFyAI-style grid columns: 1fr / 2fr / 1fr */}
      <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-[1fr,2fr,1fr] items-center">

        {/* LEFT — LOGO */}
        <div
          className={`
            text-xl font-semibold transition-all duration-300 
            ${isScrolled ? "text-gray-900" : "text-white"}
          `}
        >
          Xpertize Tech AI
        </div>

        {/* CENTER — NAVIGATION */}
        <ul
          className={`
            hidden md:flex justify-center gap-12 
            text-sm font-medium tracking-wide whitespace-nowrap
            transition-all duration-300
            ${isScrolled ? "text-gray-900" : "text-white/90"}
          `}
        >
          <li>
            <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
          </li>

          <li>
            <a href="#industries" className="hover:text-blue-500 transition-colors">Industries</a>
          </li>

          <li>
            <a href="#case-studies" className="hover:text-blue-500 transition-colors">Case Studies</a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </li>
        </ul>

        {/* RIGHT — ACTION ZONE (CTA / Login in future) */}
        <div className="hidden md:flex justify-end gap-6 items-center">
          {/* Placeholder for future CTA buttons like MetaFyAI */}
          {/* Example: Get Started / Sign In (if needed later) */}
        </div>

      </div>
    </nav>
  );
}
