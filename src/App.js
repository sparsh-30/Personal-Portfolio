import React from 'react'
// import sanity from './sanity'
import Navbar from './Components/Navbar';

function App() {

  // useEffect(()=>{
  //   sanity.fetch(`*[_type=="details"]{
  //     name,email
  //   }`).then((data)=>{console.log(data)});
  // })


  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
