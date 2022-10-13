import React from 'react'
// import sanity from './sanity'
import Navbar from './Components/Navbar';
import Home from './Components/Home'

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
    </>
  );
}

export default App;
