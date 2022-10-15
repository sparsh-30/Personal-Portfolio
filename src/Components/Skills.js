import React, { useEffect, useState } from 'react'
import sanity from './../sanity'
import imageUrlBuilder from '@sanity/image-url'

const Skills = () => {

  const [skills,setSkills]=useState([]);
  const builder = imageUrlBuilder(sanity);

  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(()=>{
    sanity.fetch(`*[_type=="skills"]{
      skill_name,skill_logo
    }`).then((data)=>{setSkills(data)});
  })


  return (
    <div className='pt-16 min-h-screen bg-image'>
        <p className='text-6xl text-center my-8'>Skills</p>
        <div className='grid grid-cols-2 lg:grid-cols-3 mx-auto w-2/3 px-20 py-3 bg-[#F0ECE3] text-center shadow-[0_0_20px_-2px_black]'>
            {
              skills.map((skill)=>{
                return (
                  <div key={skill.skill_name} className='w-[100px] h-[100px] mx-auto my-6 relative'>
                    <img key={skill.skill_name} className='z-10 mx-auto w-full h-full transition duration-300 ease-in-out' src={urlFor(skill.skill_logo).url()} alt={skill.skill_name} />

                    <div className='absolute -top-5 -left-5 z-50 w-[140px] h-[140px] flex justify-center items-center opacity-5 transition-all duration-300 ease-in-out hover:opacity-100 hover:bg-[rgba(0,0,0,0.6)] hover:rounded-full'>
                      <p className='text-2xl text-white'>{skill.skill_name}</p>
                    </div>
                  </div>)
              })
            }
        </div>
    </div>
  )
}

export default Skills

// html, css, javascript, react, tailwind, nodejs, express, mongodb, socket.io, c++, java