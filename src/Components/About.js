import React, { useState } from 'react'
import AboutMe from './Subcomponents/AboutMe';
import Timeline from './Subcomponents/Timeline'
   
  export default function About() {
   const [index,setIndex]=useState(0);


    return (
      <div className='min-h-screen pt-16 bg-image'>
        <p className='text-6xl text-center my-8'>About Me</p>
        <div className='w-4/5 mx-auto flex flex-col justify-start shadow-[0_0_20px_-2px_black] rounded-xl'>
          <div className='w-full bg-black rounded-t-xl'>
              <button className={`tab-btn ${index===0 ? "tab-btn-active":""} rounded-tl-xl`}  onClick={()=>{setIndex(0)}}>About Me</button>
              <button className={`tab-btn ${index===1 ? "tab-btn-active":""}`} onClick={()=>{setIndex(1)}}>Education</button>
              {/* <button className={`tab-btn ${index===2 ? "tab-btn-active":""} rounded-tr-xl`} onClick={()=>{setIndex(2)}}>Interests</button> */}
          </div>
          <div className='w-full rounded-b-xl bg-[#F0ECE3] py-6 mb-3'>
              <div hidden={index!==0}><AboutMe /></div>
              <div hidden={index!==1}><Timeline /></div>
          </div>
        </div>
      </div>
    
    );
  }