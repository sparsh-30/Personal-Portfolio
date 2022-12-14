import React from 'react'
// importing icons
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
        {/* <div className='flex fixed w-screen px-12 py-3 bg-white flex-wrap shadow-xl items-center justify-between text-l mx-auto lg:justify-evenly lg:py-2 z-50'>
            <a className='text-3xl lg:text-xl' href="/">Sparsh</a>
            <a className='text-xl' href="/"><BsFillMoonStarsFill /></a>
        </div> */}
        <div className='flex fixed w-screen px-12 py-3 bg-white flex-wrap shadow-xl items-center justify-between text-l mx-auto lg:justify-evenly lg:py-2 z-50'>
            <a className='text-3xl lg:text-xl font-["Lobster"]' href="#">Sparsh Gupta</a>
            {/* <a className='text-xl' href="/"><BsFillMoonStarsFill /></a> */}
        </div>
        <div className='flex justify-center'>
            <ul className='flex text-2xl px-8 w-3/4 backdrop-blur-sm text-white bg-[#C689C6] py-6 rounded-full justify-between fixed bottom-5 items-center lg:w-1/4 lg:text-md lg:py-4 z-50'>
                <li><a href="#"><AiFillHome /></a></li>
                <li><a href="#about"><FaUser /></a></li>
                <li><a href="#skills"><RiCodeSSlashLine /></a></li>
                <li><a href="#projects"><BsFillBriefcaseFill /></a></li>
                <li><a href="#contact"><RiContactsBook2Fill /></a></li>
            </ul>
        </div>
    </>
  )
}
// 98A8F8
export default Navbar