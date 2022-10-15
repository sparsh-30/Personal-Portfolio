import React from 'react'
// import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-28 lg:flex-row lg:justify-between px-24 bg-image bg-[length:100%_100%]'>
        <div className='lg:w-2/3 text-center px-40'>
            <h1 className='text-4xl pb-8'>Here comes the typing animation</h1>
            <p>This is my official portfolio to showcase all my details and work experiences.</p>
            <button className='mt-8 p-3 rounded-lg text-white bg-[#C689C6] hover:bg-black hover:scale-110 hover:transition-all'>Download CV</button>
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