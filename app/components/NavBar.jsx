"use client";
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useEffect, useState } from 'react';


export default function NavBar({logout}) {
    const [mobNav, setMobNav] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

    const toggleMobNav = () => {
        mobNav ? setMobNav(false): setMobNav(true);
    }
   

    return (
       
<motion.div initial="hidden" animate="visible" variants={{
                hidden: {scale: .8,
                        opacity: 0},
                visible: {scale: 1,
                        opacity: 1,
                        transition: {
                        delay: .2}},
            }} className="fixed z-20 top-0 left-0 text-white w-full">

  <div className="w-full flex flex-wrap items-center justify-between mx-auto py-4 pt-0">
  
  <div className='flex w-full items-center justify-between py-3 bg-neutral-800 px-5'>
  <a href="/" className="flex items-center ml-4">
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Bryan Quek</span>
  </a>
  <div className="flex mr-4">
  <button
        className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group"
        onClick={() => toggleMobNav()}
    >
        <div
            className={`${genericHamburgerLine} ${
                mobNav
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
            }`}
        />
        <div className={`${genericHamburgerLine} ${mobNav ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
        <div
            className={`${genericHamburgerLine} ${
                mobNav
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
            }`}
        />
    </button>
  </div>
  </div>

  <div className={`transition ease transform duration-300 ${mobNav ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} 
  items-center justify-between w-full " id="navbar-sticky`}>
    <ul className="flex flex-col font-medium  bg-neutral-800">
      <li>
        <Link href="/" className="block py-2 pl-3 pr-4 hover:bg-white/[.1] rounded " aria-current="page">Home</Link>
      </li>
      <li>
        <a href="/projects"  className="block py-2 pl-3 pr-4  rounded  hover:bg-white/[.1] rounded">Projects</a>
      </li>
      <li>
        <Link href="/skills" className="block py-2 pl-3 pr-4 rounded   hover:bg-white/[.1] rounded">Skills</Link>
      </li>
      <li>
        <a href="https://drive.google.com/file/d/13WC3-RaOujj-lu-NhIT5wy1M1px8zkC8/view?usp=sharing" className="block py-2 pl-3 pr-4 rounded   hover:bg-white/[.1] rounded" target="_blank" rel="noopener noreferrer">Resume</a>
      </li>

    </ul>
  </div>
  </div>
</motion.div>


    )
}
    