import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md" 
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* LOGO */}
        <div className={`
          text-xl font-semibold transition-all duration-300
          ${isScrolled ? "text-gray-900" : "text-white"}
        `}>
          Xpertize Tech AI
        </div>

        {/* NAV ITEMS */}
        <ul
          className={`
            hidden md:flex gap-10 text-sm font-medium tracking-wide transition-all duration-300
            ${isScrolled ? "text-gray-800" : "text-white/90"}
          `}
        >
          <li>
            <a
              href="#services"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#industries"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Industries
            </a>
          </li>

          <li>
            <a
              href="#case-studies"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Case Studies
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
