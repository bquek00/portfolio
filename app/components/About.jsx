"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ContactLink from './ContactLink';
import { motion } from 'framer-motion';


export default function About() {
   

    return (
        <div className='text-white flex lg:mx-10'>
            <div className='flex justify-around flex-col md:flex-col-reverse lg:flex-row items-center mt-basic lg:mt-0 gap-10 lg:gap-0
            mx-10 lg:mx-0'>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {scale: .8,
                        opacity: 0},
                visible: {scale: 1,
                        opacity: 1,
                        transition: {
                        delay: .3}},
            }} className='lg:w-3/6 flex flex-col gap-5 justify-center md:mb-5'>
          
                <h1 className='text-4xl lg:text-6xl font-bold'>Bryan Quek</h1>
                <h2 className='text-md lg:text-lg text-gray-200'>Hey there! I am I'm in my final year studying computer science at the University of Queensland, 
                    and I have a deep interest in Full Stack Development and web application creation. 
                    Feel free to explore my portfolio and reach out if you're interested.
                </h2>
                <ContactLink />

            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {scale: .8,
                        opacity: 0},
                visible: {scale: 1,
                        opacity: 1,
                        transition: {
                        delay: .4}},
            }} >
            <Image
            className='rounded-xl mb-5 lg:mb-0'
            src="/pilot.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            />
            </motion.div>
        </div>
        </div>

    )
}
    