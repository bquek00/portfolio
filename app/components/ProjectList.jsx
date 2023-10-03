"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';



export default function ProjectList() {
   

    return (
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {scale: .8,
                    opacity: 0},
            visible: {scale: 1,
                    opacity: 1,
                    transition: {
                    delay: .4}},
        }} className='text-white gridContainer pb-5'>
            <ProjectCard image="/Edexia.png" name="Edexia - Automated Marking" 
            desc="Developed a forward-thinking application using Next.js, focused on reducing manual grading efforts by automating the evaluation of assignments using a Large Language Learning Model"
            live="https://edexia.vercel.app/" github="https://github.com/bquek00/Edexia" tools={["React", "Next.js", "Supabase", "PostgreSQL","TypeScript", "Vercel"]}
            />
            <ProjectCard image="/Japanese.png" name="Japanese Learning and Quiz App" 
            desc="Developed a multifunctional Next.js application, utilizing Supabase and PostgreSQL, that enables users to search Japanese words, compile notes, and self-quiz to enhance language learning and retention"
            live="https://learn-japanese-nine.vercel.app/" github="https://github.com/bquek00/learnJapanese" tools={["React", "Next.js", "Supabase", "PostgreSQL","TypeScript", "Vercel"]}
            />
            <ProjectCard image="/planner.png" name="CS50 Final Project - Dynamic web application" 
            desc="Dynamic web application, using JavaScript, Python, and SQL, to create and share plans with friends and family and uses
            a Flask Python framework to set up a web server to  receive and respond to requests. "
            github="https://github.com/bquek00/Planner" tools={["HTML", "JavaScript", "CSS", "Python", "SQL", "SQLite", "Flask"]}
            />
            <ProjectCard image="/intrusion.png" name="Intrusion Detection for Automous Vehicles" 
            desc="This project is designed to train and test machine learning models on CAN bus data for intrusion detection purposes"
            github="https://github.com/bquek00/CAN-Intrusion" tools={["Pandas", "scikit-learn", "TensorFlow", "Python", "Deep Learning"]}
            />
             <ProjectCard image="/vapt.png" name="VAPT Report for WordPress 4.7.2" 
            desc="Conducted a rigorous vulnerability assessment of WordPress 4.7.2 using tools like Snyk and WPScan, employing CVSS 3.0 and STRIDE for risk and threat analysis and developed a proof-of-concept to demonstrate the potential impact of XSS attacks, highlighting the risks of unauthorized website modification and privilege escalation"
            link="https://drive.google.com/file/d/12rMreZDnFQw8fMl3WKzxc6Ajsgrf6G0w/view?usp=sharing" tools={["Kali Linux", "WPScan", "OpenVAS", "Snyk", "WordPress"]}
            />

            <ProjectCard image="/food.png" name="Food Classifier" 
            desc="Developed a predictive model to categorise food items as Non-Meat or Meat and Seafood using nutritional data"
            link="https://drive.google.com/file/d/1XStYn5DmB-zz0fn0ouBYCD1mUCk1s8Hd/view?usp=sharing" tools={["Pandas", "scikit-learn", "TensorFlow", "Python", "Deep Learning"]}
            />
            
        </motion.div>

    )
}
    