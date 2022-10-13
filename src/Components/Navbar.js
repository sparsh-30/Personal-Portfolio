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
        <div className='flex fixed w-screen px-12 py-3 flex-wrap shadow-xl items-center justify-between text-l mx-auto lg:justify-evenly lg:py-2'>
            <a className='text-3xl lg:text-xl' href="/">Sparsh</a>
            <a className='text-xl' href="/"><BsFillMoonStarsFill /></a>
        </div>
        <div className='flex justify-center'>
            <ul className='flex text-2xl px-8 w-3/4 backdrop-blur-md text-white bg-[#98A8F8] py-6 rounded-full justify-between fixed bottom-5 items-center lg:w-1/4 lg:text-md lg:py-4'>
                <li><a href="/"><AiFillHome /></a></li>
                <li><a href="/"><FaUser /></a></li>
                <li><a href="/"><RiCodeSSlashLine /></a></li>
                <li><a href="/"><BsFillBriefcaseFill /></a></li>
                <li><a href="/"><RiContactsBook2Fill /></a></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar