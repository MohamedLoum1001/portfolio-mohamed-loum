import { motion } from "framer-motion";
import ynovLogo from "../assets/ParisYnovLogo.png";
import casablancaYnovLogo from "../assets/casablancaYnovCampus.png";

import bakeliLogo from "../assets/bakeli.png";
import uvsLogo from "../assets/uvs.png";
import ekrLogo from "../assets/ekr.png";

const formations = [
  {
    diplome: "Master 2 en Développement Fullstack",
    ecole: "Paris Ynov Campus, Paris",
    annee: "Octobre 2024 – en cours",
    logo: ynovLogo,
  },
  {
    diplome: "Master 1 en Développement Fullstack",
    ecole: "Casablanca Ynov Campus, Casablanca",
    annee: "Octobre 2024 – Juin 2025",
    logo: casablancaYnovLogo,
  },
  {
    diplome: "Formation en Programmation",
    ecole: "Bakeli School of Technology, Dakar",
    annee: "2022 – 2024",
    logo: bakeliLogo,
  },
  {
    diplome: "Licence en Développement Web / Mobile",
    ecole: "Université Virtuelle du Sénégal, Dakar",
    annee: "2018 – 2021",
    logo: uvsLogo,
  },
  {
    diplome: "Baccalauréat",
    ecole: "École Khadim Rassoul, Dakar",
    annee: "2017 – 2018",
    logo: ekrLogo,
  },
];

const EducationTimeline = () => {
  return (
    <motion.section
      id="education"
      className="px-6 max-w-5xl mx-auto py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-center mb-12 text-blue-700 dark:text-blue-400">
        🎓 Éducation
      </h2>

      <div className="relative border-l border-blue-500 dark:border-blue-400 pl-6 space-y-12">
        {formations.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Logo animé */}
            <div className="absolute -left-[30px] top-2 bg-white dark:bg-gray-100 p-1 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <img
                src={item.logo}
                alt={item.ecole}
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Carte de formation */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md dark:shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                {item.diplome}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{item.ecole}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {item.annee}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationTimeline;
