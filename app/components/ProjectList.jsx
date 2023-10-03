"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';


export default function ProjectList() {
   

    return (
        <div className='text-white flex flex justify-center flex-wrap gap-4 items-start pb-5'>
            <ProjectCard image="/Edexia.png" name="Edexia - Automated Marking" 
            desc="Developed a forward-thinking application using Next.js, focused on reducing manual grading efforts by automating the evaluation of assignments using the OpenAI API"
            live="https://edexia.vercel.app/" tools={["React", "Next.js", "Supabase", "PostgreSQL","TypeScript", "Vercel"]}
            />
            <ProjectCard image="/Japanese.png" name="Japanese Learning and Quiz App" 
            desc="Developed a multifunctional Next.js application, utilizing Supabase and PostgreSQL, that enables users to search Japanese words, compile notes, and self-quiz to enhance language learning and retention"
            live="https://learn-japanese-nine.vercel.app/" github="https://github.com/bquek00/learnJapanese" tools={["React", "Next.js", "Supabase", "PostgreSQL","TypeScript", "Vercel"]}
            />
            <ProjectCard image="/planner.png" name="CS50 Final Project - Dynamic web application  " 
            desc="Dynamic web application, using JavaScript, Flask Python, and SQL, to create and share plans with friends and family. 
            Flask Python framework to set up a web server to  receive and respond to requests. "
            github="https://github.com/bquek00/Planner" tools={["HTML", "JavaScript", "CSS", "Python", "SQLSQLite", "Flask"]}
            />
            
        </div>

    )
}
    