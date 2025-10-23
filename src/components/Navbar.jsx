import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [themeToggleKey, setThemeToggleKey] = useState(0); // pour relancer l’animation

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const links = [
    { name: "Accueil", id: "accueil" },
    { name: "Éducation", id: "education" },
    { name: "Développement", id: "developpement" },
    { name: "Compétences", id: "competences" },
    { name: "Projets", id: "projets" },
    // { name: "Certifications", id: "certifications" },
    { name: "Expériences", id: "experiences" },
    { name: "Contact", id: "contact" },
  ];

  const handleToggleTheme = () => {
    setDark(!dark);
    setThemeToggleKey((prev) => prev + 1); // relancer anim
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md transition duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center min-h-[64px]">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-blue-700 dark:text-blue-400">
            MohamedLoum.dev
          </span>
        </div>

        {/* LINKS - desktop */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 dark:text-gray-200">
          {links.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="nav-active"
                className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-300 transition"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* ICONES DROITES */}
        <div className="flex items-center gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/221776452606"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="text-green-600 hover:text-green-500 transition"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* DARK MODE - animé */}
          <motion.button
            onClick={handleToggleTheme}
            aria-label="Basculer le mode sombre"
            className="relative w-10 h-10 rounded-full border dark:border-gray-500 flex items-center justify-center bg-white dark:bg-gray-800 hover:scale-105 transition"
            title="Changer de thème"
            whileTap={{ scale: 1.3 }} // effet zoom type volume
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={themeToggleKey}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {dark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-400" />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* MENU MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="md:hidden text-gray-700 dark:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE OUVERT */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-4 space-y-4 shadow-md">
          {links.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block cursor-pointer hover:text-blue-500 dark:hover:text-blue-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
