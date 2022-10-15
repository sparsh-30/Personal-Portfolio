import React from 'react'
// import sanity from './sanity'
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About';
import Skills from './Components/Skills';

function App() {

  // useEffect(()=>{
  //   sanity.fetch(`*[_type=="details"]{
  //     name,email
  //   }`).then((data)=>{console.log(data)});
  // })


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default App;
