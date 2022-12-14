import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import AboutMe from './Subcomponents/AboutMe';
import Timeline from './Subcomponents/Timeline'
import AOS from 'aos'
import 'aos/dist/aos.css'
   
  export default function About() {
   const [index,setIndex]=useState(0);

   useEffect(()=>{
    AOS.init({durarion:5000})
  },[])


    return (
      <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
       id='about' className='min-h-screen pb-4 pt-12 bg-image'>
        <p className='text-6xl text-center w-fit mx-auto px-4 mt-8 font-["Lobster"]'>About Me</p>

        <div className='flex justify-center mt-4 items-center'>
          <div className='w-1/4 h-[5px] bg-[#C689C6] mx-auto'></div>
          <div className='w-[50px] h-[20px] rounded-3xl bg-slate-800 absolute'></div>
        </div>
        
        <div data-aos="fade-left" className='w-4/5 mx-auto mt-12 flex flex-col justify-start shadow-[0_0_25px_-6px_black]'>
          <div className='w-full bg-black'>
              <button className={`tab-btn ${index===0 ? "tab-btn-active":""}`}  onClick={()=>{setIndex(0)}}>About Me</button>
              <button className={`tab-btn ${index===1 ? "tab-btn-active":""}`} onClick={()=>{setIndex(1)}}>Education</button>
              {/* <button className={`tab-btn ${index===2 ? "tab-btn-active":""} rounded-tr-xl`} onClick={()=>{setIndex(2)}}>Interests</button> */}
          </div>
          <div className='w-full h-full bg-[#F0ECE3] py-6'>
              <div hidden={index!==0}><AboutMe /></div>
              <div hidden={index!==1}><Timeline /></div>
          </div>
        </div>
      </motion.div>
    
    );
  }