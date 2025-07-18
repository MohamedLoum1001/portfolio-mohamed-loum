import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const links = [
    { name: "Accueil", id: "accueil" },
    { name: "Éducation", id: "education" },
    { name: "Développement", id: "developpement" },
    { name: "Compétences", id: "competences" },
    { name: "Projets", id: "projets" },
    { name: "Expériences", id: "experiencea" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md transition duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center min-h-[64px]">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-700 dark:text-blue-400">
          MohamedLoum.dev
        </div>

        {/* Liens navigation - desktop */}
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

        {/* Icônes à droite */}
        <div className="flex items-center gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/212770000000" // ← Remplace par ton numéro
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="text-green-600 hover:text-green-500 transition"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Mode sombre */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Basculer le mode sombre"
            className="text-sm px-2 py-1 rounded border dark:border-gray-400 dark:text-white"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Bouton mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="md:hidden text-gray-700 dark:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
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
