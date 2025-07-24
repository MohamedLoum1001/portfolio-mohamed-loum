import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EducationTimeline from "./components/EducationTimeline";
import Developpement from "./components/Developpement";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans leading-relaxed">
      <Navbar />
      <Hero />
      <EducationTimeline/>
      <Developpement />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
