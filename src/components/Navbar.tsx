import { useState, useEffect } from "react";

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
        ${isScrolled
          ? "bg-[#0e141f]/70 backdrop-blur-xl shadow-lg"
          : "bg-transparent"}
      `}
    >
      <div className="
        max-w-7xl mx-auto px-8 py-4 
        grid grid-cols-[1fr,auto,1fr] items-center
      ">

        {/* LEFT — LOGO */}
        <div className="text-xl font-semibold text-white cursor-pointer whitespace-nowrap">
          Xpertize Tech AI
        </div>

        {/* CENTER — NAVIGATION (NO WRAPPING) */}
        <ul
          className="
            hidden md:flex justify-center gap-12 
            text-sm font-medium tracking-wide text-white
          "
        >
          {[
            ["Services", "#services"],
            ["Industries", "#industries"],
            ["Case Studies", "#case-studies"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={label} className="whitespace-nowrap">
              <a
                href={href}
                className="
                  relative group transition whitespace-nowrap
                "
              >
                {label}
                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-0 
                    bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
                    transition-all duration-300 group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT — EMPTY */}
        <div />
      </div>
    </nav>
  );
}
