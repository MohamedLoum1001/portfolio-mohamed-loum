import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// import images manuellement
import reactIcon from "../assets/react.png";
import angularIcon from "../assets/angular.png";
import tailwindIcon from "../assets/tailwind.png";
import bootstrapIcon from "../assets/bootstrap.png";
import nodeIcon from "../assets/node.png";
import flaskIcon from "../assets/flask.png";
import springIcon from "../assets/spring.png";
import flutterIcon from "../assets/flutter.png";
import mongodbIcon from "../assets/mongodb.png";
import firebaseIcon from "../assets/firebase.png";
import mysqlIcon from "../assets/mysql.png";
import javascriptIcon from "../assets/javascript.png";
import typescriptIcon from "../assets/typescript.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import gitIcon from "../assets/git.png";
import dockerIcon from "../assets/docker.png";

const skills = [
  { name: "React.js", icon: reactIcon },
  { name: "Angular", icon: angularIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Flask", icon: flaskIcon },
  { name: "Spring Boot", icon: springIcon },
  { name: "Flutter", icon: flutterIcon },
  { name: "React Native", icon: reactIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Git", icon: gitIcon },
  { name: "Docker", icon: dockerIcon },
];

const Skills = () => {
  return (
    <motion.section
      id="competences"
      className="px-6 max-w-6xl mx-auto text-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold mb-10 text-blue-700 dark:text-blue-400">
        Compétences Techniques
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-4 shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mx-auto mb-3 object-contain"
              />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
