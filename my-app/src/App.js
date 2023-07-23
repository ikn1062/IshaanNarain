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

const App = () => {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Routes>
        <Route exact path="/projects" element={<Projects/>}>
        </Route>
        <Route exact path="/" element={<Main/>}>
        </Route> 
      </Routes>
    </main>
    <Footer />
    <ScrollUp />
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