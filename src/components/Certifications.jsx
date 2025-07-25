import { motion } from "framer-motion";
import { Award, Download, CheckCircle } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

// Miniatures visibles
import jsCertThumb from "../assets/certifs/certif-javascript.png";
import reactCertThumb from "../assets/certifs/certif-react.png";
import dataCertThumb from "../assets/certifs/certif-data.png";
import dockerCertThumb from "../assets/certifs/certif-docker.png";
import angularCertThumb from "../assets/certifs/certif-angular.png";
import djangoCertThumb from "../assets/certifs/certif-django.png";


const certifications = [
  {
    title: "Algorithmes & Structures de Données - JavaScript",
    image: jsCertThumb,
    qr: "https://www.freecodecamp.org/certification/mohamedloum1001/javascript-algorithms-and-data-structures",
  },
  {
    title: "Développement Front-End avec React",
    image: reactCertThumb,
    qr: "https://www.freecodecamp.org/certification/mohamedloum1001/javascript-algorithms-and-data-structures",
  },
  {
    title: "Data Visualization",
    image: dataCertThumb,
    download: "/certifs/certif-react.pdf",
    qr: "https://www.freecodecamp.org/certification/mohamedloum1001/data-visualization",
  },
  {
    title: "Angular",
    image: angularCertThumb,
    qr: "https://www.linkedin.com/learning/certificates/8ee03da22918ac08e7ede006da1dc846154c978914f817821a41c1e68cf16ca2",
  },
  {
    title: "Docker",
    image: dockerCertThumb,
    qr: "https://www.linkedin.com/learning/certificates/efd4b2d1711c8c6dde2088e7fb970fe46988682aebe64559ac8966591b9cb618?u=56745737",
  },
  {
    title: "Django",
    image: djangoCertThumb,
    qr: "https://www.linkedin.com/learning/certificates/64481ffa90d1af63c6e830151252d5cbc5ba513428d737c0a2b86bed3cd388c9?trk=share_certificate",
  },
];

const Certifications = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <motion.section
      id="certifications"
      className="px-6 max-w-6xl mx-auto py-20 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Toast animé */}
      {showToast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 text-green-800 px-6 py-2 rounded shadow-md flex items-center gap-2 animate-fade-in-out">
          <CheckCircle className="w-5 h-5" />
          <span>Certificat téléchargé !</span>
        </div>
      )}

      {/* ✅ Titre section */}
      <h2 className="text-3xl font-semibold mb-12 flex items-center justify-center gap-2 text-blue-700 dark:text-blue-400">
        <Award className="w-6 h-6" />
        Certifications
      </h2>

      {/* ✅ Grille des cartes */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700 flex flex-col items-center text-center"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-32 h-32 object-contain mb-4 rounded"
            />

            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
              {cert.title}
            </h3>

            {/* ✅ Texte "Scannez ici" */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              📱 Scannez ici la certification
            </p>

            {/* ✅ QR code */}
            <QRCodeSVG
              value={cert.qr}
              size={80}
              bgColor="#ffffff"
              fgColor="#2b6cb0"
              level="H"
              includeMargin={true}
              className="mb-4"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
