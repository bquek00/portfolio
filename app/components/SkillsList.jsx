"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function SkillList({children}) {
   

    return (
        <div className='flex gap-2 justify-center items-center w-full px-5 mb-5 flex-wrap'>
            {children}
        </div>

    )
}
    