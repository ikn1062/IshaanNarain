import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import ScrollUp from './components/scrollup/ScrollUp';

const App2 = () => {
  return (
    <div>
        <Home />
        <About />
        <Skills />
        <Experience />
        {/* <Services /> */}
        <Projects />
        <Contact />
        <ScrollUp />
    </div>
  );
}

export default App2;
