import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour < 6 || hour >= 18);
  }, []);

  return (
    <footer
      className={`relative overflow-hidden transition duration-500 ${
        isNight ? "bg-gray-900 text-gray-200" : "bg-blue-50 text-gray-700"
      }`}
    >
      {/* Vague SVG */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill={isNight ? "#0f172a" : "#c7d2fe"}
            fillOpacity="0.3"
            d="M0,64L60,69.3C120,75,240,85,360,85.3C480,85,600,75,720,74.7C840,75,960,85,1080,96C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">
            Mohamed Loum
          </h3>
          <p className="text-sm mt-1">© {currentYear} Tous droits réservés.</p>
        </div>

        {/* Liens internes */}
        <ul className="flex flex-wrap gap-4 text-sm font-medium justify-center">
          <li>
            <a href="#accueil" className="hover:text-blue-600 transition">
              Accueil
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-600 transition">
              Éducation
            </a>
          </li>
          <li>
            <a href="#competemces" className="hover:text-blue-600 transition">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projets" className="hover:text-blue-600 transition">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Réseaux sociaux */}
        <div className="flex gap-4 items-center">
          <motion.a
            href="https://github.com/MohamedLoum1001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-600 transition"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/mohamedloum"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-600 transition"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:mohamedloum1001@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-600 transition"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Localisation */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 pb-4">
        <MapPin className="inline-block w-4 h-4 mr-1" />
        Casablanca, Maroc
      </div>
    </footer>
  );
};

export default Footer;
