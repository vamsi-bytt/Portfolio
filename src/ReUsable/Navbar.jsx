
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

import VamsiLogo from "../assets/VamsiLogo.png";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const talkButton =
    "inline-flex items-center justify-center rounded-xl bg-gray-100 px-6 py-2 font-bold text-gray-900 transition-all duration-300 hover:bg-[#471396] hover:text-white dark:bg-gray-800 dark:text-white";

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md transition-colors duration-300 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <a href="#home" onClick={closeMenu}>
            <img
              src={VamsiLogo}
              alt="Vamsi Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="font-bold text-gray-700 transition duration-300 hover:text-[#471396] dark:text-gray-200 dark:hover:text-purple-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          
          <div className="flex items-center gap-4">
           
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
              className="text-xl text-gray-700 transition hover:scale-110 dark:text-yellow-400"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <a
              href="#contact"
              className={`${talkButton} hidden sm:inline-flex`}
            >
              Let's Talk ↗
            </a>

            
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="text-2xl text-gray-700 dark:text-white md:hidden"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-96 border-t border-gray-200 pb-4 opacity-100 dark:border-gray-700"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={closeMenu}
                className="font-bold text-gray-700 transition hover:text-[#471396] dark:text-gray-200 dark:hover:text-purple-400"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className={`${talkButton} sm:hidden`}
            >
              Let's Talk ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
