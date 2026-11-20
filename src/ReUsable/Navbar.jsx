
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import VamsiLogo from "../assets/VamsiLogo.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50
      bg-white dark:bg-gray-900 shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          
          <a href="#home"
            className="text-2xl font-bold text-blue-600">
              <img src={VamsiLogo} className="h-12 w-auto object-contain" /> 
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bold text-gray-700 dark:text-gray-200
                hover:text-blue-600 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

        
          <div className="flex items-center gap-4">

        
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="text-xl text-gray-700
              dark:text-yellow-400"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden text-2xl
              text-gray-700 dark:text-white"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>

    
        <div className={`md:hidden overflow-hidden transition-all
          duration-300 ${
            menuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0"
          }`}>

          <div className="flex flex-col gap-4 pt-3">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 dark:text-gray-200
                hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
