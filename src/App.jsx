
import Navbar from "./ReUsable/Navbar";
import Footer from "./ReUsable/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      
      <Navbar />
      <main>
        
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
