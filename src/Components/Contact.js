import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(()=>{
        AOS.init({durarion:5000})
      },[])
      
      
    return (
    <div id='contact' className='pt-12 min-h-screen bg-image pb-32'>
        <p className='text-6xl text-center w-fit mx-auto px-4 mt-8 font-["Lobster"]'>Let's Connect</p>

        <div className='flex justify-center mt-4 items-center'>
            <div className='w-1/4 h-[5px] bg-[#C689C6] mx-auto'></div>
            <div className='w-[50px] h-[20px] rounded-3xl bg-slate-800 absolute'></div>
        </div>

        <div data-aos="fade-right" className='w-10/12 mx-auto mt-10 bg-[#F0ECE3] lg:flex lg:justify-center shadow-[0_0_25px_-6px_black]'>
                <img className='lg:w-1/2' src={process.env.PUBLIC_URL + 'contact.jpg'} alt="Contact Form" />
                <div className='py-6 px-4 lg:w-1/2'>
                    <div>
                        <input className='w-full my-2 py-3 text-base px-10 rounded-xl focus:outline-none focus:scale-105 transition-all duration-300 ease-in-out' type="text" placeholder='First Name' required />
                        <input className='w-full my-2 py-3 text-base px-10 rounded-xl focus:outline-none focus:scale-105 transition-all duration-300 ease-in-out' type="text" placeholder='Last Name' required />
                    </div>
                    <div>
                        <input className='w-full my-2 py-3 text-base px-10 rounded-xl focus:outline-none focus:scale-105 transition-all duration-300 ease-in-out' type="text" placeholder='Email Address' required />
                        <input className='w-full my-2 py-3 text-base px-10 rounded-xl focus:outline-none focus:scale-105 transition-all duration-300 ease-in-out' type="number" placeholder='Phone Number' required />
                    </div>
                    <textarea className='w-full my-2 py-3 text-base px-10 rounded-xl focus:outline-none focus:scale-105 transition-all duration-300 ease-in-out' placeholder='Message' rows={5} required></textarea>
                    <button type='submit' mailto="mailto:sparsh2457.be20@chitkara.edu.in" className='w-full mt-8 p-3 rounded-lg text-white bg-[#C689C6] hover:bg-black hover:scale-105 hover:transition-all duration-300 ease-in-out'><a className='w-full h-full' href="mailto:sparsh2457.be20@chitkara.edu.in">Submit</a></button>
                </div>
        </div>


    </div>
  )
}

export default Contact