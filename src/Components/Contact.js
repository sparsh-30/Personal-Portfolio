import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='pt-12 min-h-screen bg-image pb-60'>
        <p className='text-6xl text-center w-fit mx-auto px-4 mt-8'>Let's Connect</p>

        <div className='flex justify-center mt-4 items-center'>
            <div className='w-1/4 h-[5px] bg-[#C689C6] mx-auto'></div>
            <div className='w-[50px] h-[20px] rounded-3xl bg-blue-gray-900 absolute'></div>
        </div>

        <div className='w-10/12 mx-auto mt-10 bg-[#F0ECE3] lg:flex lg:justify-center'>
                <img className='lg:w-1/2' src={process.env.PUBLIC_URL + 'contact.webp'} alt="Contact Form" />
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
                    <button className='w-full mt-8 p-3 rounded-lg text-white bg-[#C689C6] hover:bg-black hover:scale-110 hover:transition-all'>Submit</button>
                </div>
        </div>


    </div>
  )
}

export default Contact