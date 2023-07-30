import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Projects from './components/projects/Projects';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Robotirl from './components/projects/portfolio/Robotirl';
import ModernR from './components/projects/portfolio/ModernRobotics';
import Wand from './components/projects/portfolio/Wand';
import OSdev from './components/projects/portfolio/OSdev';
import Compiler from './components/projects/portfolio/Compiler';
import Memory from './components/projects/portfolio/Memory';
import NUsolar from './components/projects/portfolio/NUsolar';
import Video from './components/projects/portfolio/Video';
import Slam from './components/projects/portfolio/Slam';

const App = () => {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Routes>
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/robotirl" element={<Robotirl/>} />
        <Route exact path="/modernr" element={<ModernR/>} />
        <Route exact path="/wand" element={<Wand/>} />
        <Route exact path="/osdev" element={<OSdev/>} />
        <Route exact path="/compiler" element={<Compiler/>} />
        <Route exact path="/memory" element={<Memory/>} />
        <Route exact path="/nusolar" element={<NUsolar/>} />
        <Route exact path="/video" element={<Video/>} />
        <Route exact path="/slam" element={<Slam/>} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;

/*
        <Route path="/">
          <div>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </Route> */