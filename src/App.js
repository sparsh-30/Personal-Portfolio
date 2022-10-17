import React, { useEffect } from 'react'
// import sanity from './sanity'
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  


  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
