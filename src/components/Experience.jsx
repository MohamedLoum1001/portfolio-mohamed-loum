import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    entreprise: "Volkeno",
    poste: "Développeur Web & Mobile",
    periode: "2023",
    details: [
      "Site Web Easy Market (React)",
      "Application Delivery Food (React Native)",
      "Kili App (Flutter + Firebase)",
    ],
  },
  {
    entreprise: "Niéféko",
    poste: "Développeur Mobile",
    periode: "2024",
    details: [
      "Application Flutter connectée à une API externe",
      "Intégration responsive et dynamique",
      "Optimisation des performances",
    ],
  },
];

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExp = experiences[selectedIndex];

  return (
    <motion.section
      id="experiences"
      className="px-6 max-w-5xl mx-auto py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-center mb-10 text-blue-700 dark:text-blue-400">
        💼 Expériences Professionnelles
      </h2>

      {/* Tabs entreprise */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`px-5 py-2 rounded-full border shadow-sm backdrop-blur-sm text-sm font-medium transition-all duration-300 ${
              selectedIndex === index
                ? "bg-blue-600 text-white dark:bg-blue-500"
                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {exp.entreprise}
          </button>
        ))}
      </div>

      {/* Contenu animé */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedExp.entreprise}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md dark:shadow-[0_0_25px_rgba(0,0,0,0.2)] transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
              {selectedExp.poste}
            </h3>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 ml-1">
            {selectedExp.entreprise} — {selectedExp.periode}
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-2">
            {selectedExp.details.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default Experience;
