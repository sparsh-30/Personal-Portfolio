import React, { useEffect, useState } from 'react'
import sanity from './../sanity'
import imageUrlBuilder from '@sanity/image-url'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

  const [skills,setSkills]=useState([]);
  const builder = imageUrlBuilder(sanity);

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(()=>{
    AOS.init({durarion:5000})
    sanity.fetch(`*[_type=="skills"]{
      skill_name,skill_logo
    }`).then((data)=>{setSkills(data)});
  })


  return (
    <div id='skills' className='pt-12 min-h-screen pb-4 bg-image'>
        <p className='text-6xl text-center w-fit mx-auto px-4 mt-8 font-["Lobster"]'>Skills</p>

        <div className='flex justify-center mt-4 items-center'>
          <div className='w-1/4 h-[5px] bg-[#C689C6] mx-auto'></div>
          <div className='w-[50px] h-[20px] rounded-3xl bg-slate-800 absolute'></div>
        </div>

        <div data-aos="fade-right" className='grid grid-cols-2 gap-5 lg:grid-cols-4 lg:w-2/3 mx-auto mt-12 w-10/12 px-10 py-3 bg-[#F0ECE3] text-center shadow-[0_0_25px_-6px_black]'>
            {
              skills.map((skill)=>{
                return (
                  <div key={skill.skill_name} className='w-[100px] h-[100px] mx-auto my-2 relative'>
                    <img key={skill.skill_name} className='z-10 mx-auto w-full h-full transition duration-300 ease-in-out' src={urlFor(skill.skill_logo).url()} alt={skill.skill_name} />

                    <div className='absolute -top-5 -left-5 z-50 w-[140px] h-[140px] flex justify-center items-center opacity-5 transition-all duration-300 ease-in-out hover:opacity-100 hover:bg-[rgba(161,194,152,0.8)] hover:rounded-full'>
                      <p className='text-2xl text-white'>{skill.skill_name}</p>
                    </div>
                  </div>
                  )
              })
            }
        </div>
    </div>
  )
}

export default Skills

// html, css, javascript, react, tailwind, nodejs, express, mongodb, socket.io, c++, java