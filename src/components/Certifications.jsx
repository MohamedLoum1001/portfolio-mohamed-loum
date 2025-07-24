import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

// ✅ Import des images depuis le dossier src/assets/certifs
import jsCert from "../assets/certifs/certif-javascript.png";
import reactCert from "../assets/certifs/certif-react.png";
import angularCert from "../assets/certifs/certif-angular.png";

// ✅ Tableau des certifications
const certifications = [
  {
    title: "Algorithmes et structures de données en JavaScript",
    logo: jsCert,
    link: "https://www.freecodecamp.org/certification/mohamedloum1001/javascript-algorithms-and-data-structures",
  },
  {
    title: "Bibliothèque de développement front-end",
    logo: reactCert,
    link: "https://www.freecodecamp.org/certification/mohamedloum1001/javascript-algorithms-and-data-structures",
  },
  {
    title: "Apprendre Angular",
    logo: angularCert,
    link: "https://www.linkedin.com/learning/certificates/8ee03da22918ac08e7ede006da1dc846154c978914f817821a41c1e68cf16ca2?u=56745737",
  },
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="px-6 max-w-6xl mx-auto py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Titre avec icône */}
      <h2 className="text-3xl font-semibold mb-12 flex items-center justify-center gap-2 text-blue-700 dark:text-blue-400">
        <Award className="w-6 h-6" />
        Certifications
      </h2>

      {/* Grille de certifications */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700 flex flex-col items-center text-center"
          >
            <img
              src={cert.logo}
              alt={cert.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
              {cert.title}
            </h3>

            {/* QR Code vers le lien de certification */}
            <QRCodeSVG
              value={cert.link}
              size={80}
              bgColor="#ffffff"
              fgColor="#2b6cb0"
              level="H"
              includeMargin={true}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
