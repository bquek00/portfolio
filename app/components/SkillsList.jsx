"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function SkillList({children}) {
   

    return (
        <div className='flex gap-2 justify-center items-center w-full flex-wrap'>
            {children}
        </div>

    )
}
    