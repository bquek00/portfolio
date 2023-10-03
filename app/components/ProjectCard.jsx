"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function ProjectCard({image, name, desc, github, live, tools, link}) {
   

    return (
        <div className='w-card border-2 rounded-lg overflow-hidden'>
             <Image
            className='responsive'
            src={image}
            width={350}
            height={350}
            priority={true}
            alt="Picture of Page"
            />
            <div className='bg-black p-5'>
                <h1 className='text-center text-2xl mb-2 font-bold'>{name}</h1>
                <p className='text-center mb-10'>{desc}</p>
                <div className='flex items-center justify-center'>
                {github && (
                        <div className='mr-3'>
                            <Link href={github} className="p-2 border-2 rounded-lg hover:bg-white hover:text-black" >
                                Github
                            </Link>
                        </div>
                    )}
                {live && (
                        <div className='mr-3'>
                            <Link href={live} className="p-2 border-2 rounded-lg hover:bg-white hover:text-black" >
                                Live
                            </Link>
                        </div>
                    )}
                {link && (
                        <div className='mr-3'>
                            <Link href={link} className="p-2 border-2 rounded-lg hover:bg-white hover:text-black" >
                                Report
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className='bg-stone-900 p-2 flex justify-center flex-wrap gap-2 w-9/12 mx-auto'>
            {tools.map((entry, index) => {
                  return (
                    <div key={index} className='bg-white text-black rounded-lg px-1'>{entry}</div>
                  );
                })}
            </div>
        </div>

    )
}
    