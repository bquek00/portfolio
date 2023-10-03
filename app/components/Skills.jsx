"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SkillsCard from './SkillsCard';
import SkillList from './SkillsList';
import { motion } from 'framer-motion';

export default function Skills() {
   

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
            }} className='text-white text-6xl font-bold text-center mb-10 mx-5'>Skills</motion.div>

                <motion.div initial="hidden" animate="visible" variants={{
                hidden: {scale: .8,
                        opacity: 0},
                visible: {scale: 1,
                        opacity: 1,
                        transition: {
                        delay: .4}},
            }}  className='flex flex-col items-center'>
                <h2 className='text-2xl font-bold my-2'>Full Stack</h2> 
                <SkillList>
                    <SkillsCard img="/react.png" name="React" />
                    <SkillsCard img="/next.png" name="Next.js" />
                    <SkillsCard img="/ts.png" name="TypeScript" />
                    <SkillsCard img="/node.png" name="Nodejs" />
                    <SkillsCard img="/tailwind.png" name="Tailwind CSS" />
                    <SkillsCard img="/flask.png" name="Flask" />
                    <SkillsCard img="/post.png" name="PostgreSQL" />
                    <SkillsCard img="/supabase.png" name="Supabase" />
                </SkillList>
                <h2 className='text-2xl font-bold my-2'>Machine Learning</h2>
                <SkillList>
                    <SkillsCard img="/pandas.png" name="Pandas" />
                    <SkillsCard img="/scikit.jpeg" name="scikit-learn" />
                    <SkillsCard img="/tensorflow.png" name="TensorFlow" />
                    <SkillsCard img="/torch.png" name="PyTorch" />
                </SkillList>
                <h2 className='text-2xl font-bold my-2'>Cyber Security</h2>
                <SkillList>
                    <SkillsCard img="/nmap.png" name="Nmap" />
                    <SkillsCard img="/wireshark.png" name="Wireshark" />
                    <SkillsCard img="/burp.png" name="Burp Suite" />
                    <SkillsCard img="/kali.png" name="Kali Linux" />
                    <SkillsCard img="/Ghidra.png" name="Ghidra" />
                </SkillList>
                <h2 className='text-2xl font-bold my-2'>Programming Languages</h2>
                <SkillList>
                    <SkillsCard img="/python.png" name="Python" />
                    <SkillsCard img="/sql.png" name="SQL" />
                    <SkillsCard img="/c.png" name="C" />
                    <SkillsCard img="/java.png" name="Java" />
                </SkillList>
                </motion.div>
     
            </div>
            
        </div>

    )
}
    