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
        ${
          isScrolled
            ? "bg-[#0e141f]/60 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      {/* 3-column MetaFyAI layout */}
      <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-[1fr,2fr,1fr] items-center">

        {/* LEFT — LOGO (always white) */}
        <div className="text-xl font-semibold text-white transition-all duration-300">
          Xpertize Tech AI
        </div>

        {/* CENTER — NAVIGATION (always white text) */}
        <ul
          className="
            hidden md:flex justify-center gap-12 
            text-sm font-medium tracking-wide whitespace-nowrap
            text-white/90 transition-all duration-300
          "
        >
          <li>
            <a href="#services" className="hover:text-blue-400 transition-colors">
              Services
            </a>
          </li>

          <li>
            <a href="#industries" className="hover:text-blue-400 transition-colors">
              Industries
            </a>
          </li>

          <li>
            <a href="#case-studies" className="hover:text-blue-400 transition-colors">
              Case Studies
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* RIGHT — ACTIONS (optional future buttons) */}
        <div className="hidden md:flex justify-end items-center gap-6 text-white">
          {/* Empty for now — CTA buttons will go here later */}
        </div>
      </div>
    </nav>
  );
}
