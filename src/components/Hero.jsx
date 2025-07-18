import { useState, useEffect } from "react";
import { Github, Linkedin, Download } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import TrackVisibility from "react-on-screen";
import "animate.css";
import headerImg from "../assets/header-img.svg";
import cvFile from "../assets/Mohamed-Loun-CV-developpeur-web-&-mobile (1).pdf";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const controls = useAnimation();

  const toRotate = ["Développeur Web et Mobile"];
  const period = 2000;

  // Machine à écrire
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  // Animation flottante du visuel
  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: [0, getRandom(-15, 15), 0],
          y: [0, getRandom(-15, 15), 0],
          transition: {
            duration: 4,
            ease: "easeInOut",
          },
        });
      }
    };
    animate();
  }, [controls]);

  const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <motion.section
      id="accueil"
      className="pt-32 pb-20 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* === Colonne gauche === */}
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div
              className={`${
                isVisible ? "animate__animated animate__fadeIn" : ""
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                Mohamed Loum
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
                <span className="text-blue-600 dark:text-blue-400">{text}</span>
                <span className="blinking-cursor">|</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-justify leading-relaxed mb-6">
                Je suis un développeur passionné avec plus de 2 ans d’expérience
                dans le développement d’interfaces modernes, performantes et
                intuitives. J’ai travaillé avec <strong>React</strong>,{" "}
                <strong>Flutter</strong>, <strong>Node.js</strong>,{" "}
                <strong>Firebase</strong> et bien plus encore.
              </p>

              {/* Liens sociaux */}
              <div className="flex gap-4 mb-6">
                <a
                  href="https://github.com/MohamedLoum1001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 dark:hover:text-blue-300 transition"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-loum-0377a2212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 dark:hover:text-blue-300 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>

              {/* Bouton Télécharger */}
              <a
                href={cvFile}
                download="CV-Mohamed-Loum.pdf"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-300 border border-blue-300 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800 transition"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger mon CV
              </a>
            </div>
          )}
        </TrackVisibility>

        {/* === Colonne droite === */}
        <motion.div animate={controls} className="flex justify-center">
          <img
            src={headerImg}
            alt="Mohamed Loum"
            className="w-64 h-64 mx-auto rounded-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
