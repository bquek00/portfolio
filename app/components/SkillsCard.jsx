"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function SkillsCard({img, name}) {
   

    return (
        <div className='flex flex-col items-center justify-center'>
            <Image
            src={img}
            width={50}
            height={50}
            alt="icon"
            />
            <p className='text-center'>{name}</p>
        </div>

    )
}
    