"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProjectList from './ProjectList';
import { motion } from 'framer-motion';



export default function Projects() {
   

    return (
        <div>
            <div className='text-white pt-basic'>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {scale: .8,
                        opacity: 0},
                visible: {scale: 1,
                        opacity: 1,
                        transition: {
                        delay: .3}},
            }} className='text-white text-6xl font-bold text-center mb-10 mx-5'>Projects</motion.div>
                <ProjectList />
     
            </div>
            
        </div>

    )
}
    