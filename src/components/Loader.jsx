// src/components/Loader.jsx
import { motion } from "framer-motion";
import logo from "../assets/my-logo.png"; // 🔁 Ton logo personnalisé

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <motion.img
        src={logo}
        alt="Logo Mohamed Loum"
        className="w-24 h-24 object-contain"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default Loader;
