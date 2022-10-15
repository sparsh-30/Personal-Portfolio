import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='pt-12 min-h-screen bg-image'>
        <p className='text-6xl text-center w-fit mx-auto px-4 mt-8'>Projects</p>

        <div className='flex justify-center mt-4 items-center'>
            <div className='w-1/4 h-[5px] bg-[#C689C6] mx-auto'></div>
            <div className='w-[50px] h-[20px] rounded-3xl bg-blue-gray-900 absolute'></div>
        </div>

        <div className='flex justify-evenly items-center py-12 mt-10 lg:mt-20 flex-wrap w-11/12 bg-[#F0ECE3] shadow-[0_0_20px_-2px_black] rounded-xl mx-auto'>
            <div className='h-[250px] w-[325px] relative my:8 lg:mb-0'>
                <img className='h-full w-full z-10 rounded-2xl' src={process.env.PUBLIC_URL + '/demo3.jfif'} alt="Weather App" />
                <div className='absolute h-full w-full py-4 rounded-2xl top-0 z-20 flex flex-col justify-evenly items-center opacity-5 transition-all duration-300 ease-in-out hover:opacity-100 hover:bg-[rgba(246,90,131,0.9)]'>
                    <p className='text-4xl text-white'>Weather App</p>
                    <p className='text-xl text-center px-2 text-white'>A simple weather app created using ReactJS.</p>
                </div>
            </div>

            <div className='h-[250px] w-[325px] relative my:8 lg:mb-0'>
                <img className='h-full w-full z-10 rounded-2xl' src={process.env.PUBLIC_URL + '/demo2.png'} alt="Weather App" />
                <div className='absolute h-full w-full py-2 rounded-2xl top-0 z-20 flex flex-col justify-evenly items-center opacity-5 transition-all duration-300 ease-in-out hover:opacity-100 hover:bg-[rgba(246,90,131,0.9)]'>
                    <p className='text-4xl text-white'>Whatsapp Clone</p>
                    <p className='text-xl text-center px-2 text-white'>A clone of Whatsapp Web using ReactJS, NodeJs, MongoDB and Socket.io.</p>
                </div>
            </div>

            <div className='h-[250px] w-[325px] relative my:8 lg:mb-0'>
                <img className='h-full w-full z-10 rounded-2xl' src={process.env.PUBLIC_URL + '/demo1.webp'} alt="Weather App" />
                <div className='absolute h-full w-full py-4 rounded-2xl top-0 z-20 flex flex-col justify-evenly items-center opacity-5 transition-all duration-300 ease-in-out hover:opacity-100 hover:bg-[rgba(246,90,131,0.9)]'>
                    <p className='text-4xl text-white'>OnePlus Clone</p>
                    <p className='text-xl text-center px-2 text-white'>A clone of the official OnePlus website using Bootstrap.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects