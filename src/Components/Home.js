import React from 'react'
// import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-24 lg:flex-row lg:justify-center px-16 bg-image bg-[length:100%_100%]'>
        <div>
            <img className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full' src={process.env.PUBLIC_URL + "/cambridge.jpg"} alt="" />
        </div>
        <div className='lg:w-2/5 text-center '>
            <h1 className='text-4xl pb-8'>Here comes the typing animation</h1>
            <p>This is my official portfolio to showcase all my details and work experiences.</p>
            <div className=''>
                <button className='mt-8 mx-2 p-3 rounded-lg text-white bg-[#C689C6] hover:bg-black hover:scale-110 hover:transition-all'>Download CV</button>
                <a href="#contact"><button className='mt-8 mx-2 p-3 rounded-lg text-white bg-[#C689C6] hover:bg-black hover:scale-110 hover:transition-all'>Let's Connect</button></a>
            </div>
        </div>
        {/* <motion.div className='lg:w-1/2'
            animate={{
                rotate: 750,
            }}
            transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
            }}>
            <img className='' src={process.env.PUBLIC_URL + "/bg.png"} alt="Background" />
        </motion.div> */}
    </div>
  )
}

export default Home