import { useState } from "react";
import { Code, Server, Smartphone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// === Données des domaines ===
const domaines = [
  {
    title: "Frontend",
    icon: <Code className="w-12 h-12 text-blue-500 dark:text-blue-300" />,
    description: [
      "Conception d'interfaces utilisateur",
      "Développement avec React ET Angular",
      "Intégration HTML/CSS/Tailwind/Bootstrap",
      "Gestion des états (Redux, Context API)",
      "Responsive Design",
      "Animations frontend (Framer Motion)",
      "Optimisation des performances",
    ],
    delay: 0.1,
  },
  {
    title: "Backend",
    icon: <Server className="w-12 h-12 text-green-600 dark:text-green-400" />,
    description: [
      "Création d'API RESTful",
      "Développement avec Node.js, Express, Spring Boot",
      "Sécurité des données et authentification",
      "Connexion à des bases de données (MongoDB, PostgreSQL et MySQL)",
      "Gestion des erreurs et logs",
      "Déploiement sur serveurs ou cloud",
      "Tests unitaires & d’intégration",
    ],
    delay: 0.2,
  },
  {
    title: "Mobile",
    icon: (
      <Smartphone className="w-12 h-12 text-purple-500 dark:text-purple-300" />
    ),
    description: [
      "Applications Flutter et React Native",
      "Navigation et gestion d’état (Provider, Redux)",
      "Connexion aux APIs et Firebase",
      "Animations fluides et transitions",
      "Compatibilité multi-plateformes",
      "Déploiement sur App Store / Play Store",
      "Gestion hors-ligne & stockage local",
    ],
    delay: 0.3,
  },
];

// === Carte flip recto/verso ===
const FlipCard = ({ title, icon, description, delay = 0 }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="cursor-pointer perspective group"
      onClick={() => setFlipped(!flipped)}
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay }}
    >
      <motion.div
        className={`relative w-full h-72 preserve-3d transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        } group-hover:rotate-y-180`}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 12 }}
      >
        {/* === RECTO === */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.4)] p-6 backface-hidden flex flex-col items-center justify-center">
          <motion.div
            whileHover={{ y: [-2, -6, -2] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold mt-4 text-blue-600 dark:text-blue-300">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Cliquer ou survoler pour voir plus
          </p>
        </div>

        {/* === VERSO === */}
        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-950 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.4)] p-6 rotate-y-180 backface-hidden overflow-auto">
          <ul className="text-sm space-y-3 text-left max-h-52 pr-1">
            {description.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <motion.div
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-300" />
                </motion.div>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

// === Section Developpement ===
const Developpement = () => {
  return (
    <motion.section
      id="developpement"
      className="px-6 max-w-6xl mx-auto text-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-blue-700 dark:text-blue-400">
        💻 Développement
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {domaines.map((domaine, index) => (
          <FlipCard key={index} {...domaine} />
        ))}
      </div>
    </motion.section>
  );
};

export default Developpement;
