"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ProjectList from './ProjectList';


export default function Projects() {
   

    return (
        <div>
            <div className='text-white pt-basic'>
                <h1 className='text-white text-6xl font-bold text-center mb-10 mx-5'>Projects</h1>

                <ProjectList />
     
            </div>
            
        </div>

    )
}
    