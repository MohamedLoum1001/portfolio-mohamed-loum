import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Github, } from "lucide-react";

const projects = [
  {
    title: "Yalli Market",
    description:
      "Yalli Market est un site web statique développé à l’aide des technologies HTML et CSS.",
    image: "yalli.png",
    technologies: ["html.png", "css.png"],
    github: "https://mohamedloum1001.github.io/yalli-market/",
  },
  {
    title: "Nike Shop",
    description: "Site de e-commerce développé avec React et Tailwind CSS.",
    image: "nike.png",
    technologies: ["react.png", "tailwind.png"],
    github: "https://nike-shop-five.vercel.app/",
  },
  {
    title: "Api Météo",
    description:
      "Application web pour consulter les prévisions météorologiques de toutes les villes.",
    image: "api.png",
    technologies: ["javascript.png", "bootstrap.png"],
    github: "https://mohamedloum1001.github.io/api-meteo/",
  },
  {
    title: "Année Bissextile",
    description:
      "Application web pour vérifier si une année est bissextile.",
    image: "annee-bissextile.png",
    technologies: ["javascript.png", "bootstrap.png"],
    github: "https://annee-bissextille-js.vercel.app/",
  },
  {
    title: "Crud App",
    description:
      "Application web pour gérer un CRUD (Create, Read, Update, Delete) d'éléments.",
    image: "crud.png",
    technologies: ["javascript.png", "bootstrap.png"],
    github: "https://crud-js-umber.vercel.app/",
  },
  {
    title: "Futsal Africa Show",
    description:
      "Application web pour suivre les événements de futsal en Afrique.",
    image: "futsal.png",
    technologies: ["react.png", "tailwind.png", "firebase.png"],
    github: "https://portfolio-react-tache-un.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "Intégration de la tâche de création d'un portfolio avec React js et Bootstrap.",
    image: "portfolio.png",
    technologies: ["react.png", "bootstrap.png"],
    github: "https://portfolio-react-tache-un.vercel.app/",
  },
  {
    title: "Sunnyside",
    description:
      "Sunnyside est un site web statique développé avec React et Bootstrap.",
    image: "sunnyside.png",
    technologies: ["react.png", "bootstrap.png"],
    github: "https://integration-un-react.vercel.app/",
  },
  {
    title: "Brandname",
    description:
      "Brandname est un site web statique développé avec React et Bootstrap.",
    image: "brandname.png",
    technologies: ["react.png", "bootstrap.png"],
    github: "https://integration-un-react.vercel.app/",
  },
  {
    title: "Todo List CRUD",
    description:
      "Application de gestion de tâches (CRUD) développée avec React et Redux.",
    image: "todoList.png",
    technologies: ["react.png", "redux.png", "bootstrap.png"],
    github: "https://todo-list-crud-react-redux.vercel.app/",
  },
  {
    title: "Sama Docteur",
    description:
      "Sama Docteur est un site qui permet aux patients de prendre des rendez-vous en ligne.",
    image: "sama-docteur.png",
    technologies: ["angular.png", "spring.png", "mysql.png", "bootstrap.png"],
    github: "https://github.com/MohamedLoum1001/sama-docteur-frontend-angular",
  },
  {
    title: "Inside Casa",
    description:
      "App Flutter pour réserver des activités locales à Casablanca.",
    image: "insideCasa.jpeg",
    technologies: ["flutter.png", "apiLogo.png", "docker.png"],
    github: "https://github.com/MohamedLoum1001/inside-casa-app-flutter",
  },
  {
    title: "Load Document",
    description:
      "Un site pour charger des documents et les afficher.",
    image: "load.png",
    technologies: ["angular.png", "bootstrap.png"],
    github: "https://load-document-angular.vercel.app/login",
  },
  {
    title: "Niéféko",
    description:
      "Application Flutter pour la gestion des stocks et des ventes.",
    image: "niefeko.jpeg",
    technologies: ["flutter.png", "apiLogo.png",],
    github: "https://github.com/Rama49/Niefeko",
  },
  {
    title: "KansAfrica",
    description: "Application de système de gestion dédiée à l'administration.",
    image: "kansAfrica.jpeg",
    technologies: ["react.png", "css.png"],
    github: "hhttps://github.com/assanebadji/FrontEnd_ProjetLo/tree/bamba_push_notify",
  },
  {
    title: "Docker Kafka Mongo",
    description:
      "Mise en place d'une architecture de microservices avec Docker, Kafka et MongoDB.",
    image: "docker.png",
    technologies: ["docker.png", "mongodb.png", "html.png", "css.png", "javascript.png"],
    github: "https://github.com/MohamedLoum1001/docker-kafka-mongo",
  },
  {
    title: "Gesttion Bancaire",
    description:
      "Application de gestion bancaire développée en Python.",
    image: "python.png",
    technologies: ["python.png", "json.png"],
    github: "https://gitlab.com/mohamedloum1001/gestion-bancaire-python",
  },
  {
    title: "Chatbot Intelligent",
    description:
      "Mise en place d'un chatbot intelligent utilisant Python, Flask et MySQL.",
    image: "python.png",
    technologies: ["python.png", "flask.png", "mysql.png", "html.png", "css.png"],
    github: "https://github.com/MohamedLoum1001/chatbot-intelligent",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projets"
      className="px-6 max-w-6xl mx-auto text-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-blue-700 dark:text-blue-400">
        🚀 Projets Réalisés
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800/60 dark:backdrop-blur-sm border dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={require(`../assets/projects/${project.image}`)}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm  text-justify leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.img
                        key={i}
                        src={require(`../assets/skills/${tech}`)}
                        alt={tech}
                        title={tech.replace(".png", "")}
                        className="w-6 h-6 hover:scale-110 transition-transform duration-300"
                      />
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800 transition"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Voir sur GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
