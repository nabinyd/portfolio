import React from 'react'
import LogoSlider from '@/component/logoslider'
import Skillwidget from './skillwidget'
import reactlogo from '@/app/skilllogo/react-logo.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


import nodelogo from "@/app/skilllogo/nodejs-logo.png";
import clogo from "@/app/skilllogo/c-logo.png";
import cpplogo from "@/app/skilllogo/c++-logo.png";
import htmllogo from "@/app/skilllogo/html-logo.png";
import csslogo from "@/app/skilllogo/css-logo.png";
import tailwindlogo from "@/app/skilllogo/tailwind-logo.png";
import dartlogo from "@/app/skilllogo/dart-logo.png";
import flutterlogo from "@/app/skilllogo/flutter-logo.png";
import pylogo from "@/app/skilllogo/python-logo.png";
import figmalogo from "@/app/skilllogo/figma-logo.png";
import pslogo from "@/app/skilllogo/photoshop-logo.png";
import githublogo from "@/app/skilllogo/github-logo.png";
import mysqllogo from "@/app/skilllogo/mysql-logo.png";
import mongodblogo from "@/app/skilllogo/mongodb-logo.png";

const logos = [
    reactlogo, nodelogo, clogo, cpplogo, htmllogo, csslogo, tailwindlogo, dartlogo, flutterlogo, pylogo, figmalogo, pslogo, githublogo, mysqllogo, mongodblogo
];


export default function Skills() {
    return (
        <div className='mt-32 mb-12'>
            <h1 className='text-center text-5xl font-bold mt-8'>Skills</h1>
            <h3 className='text-center text-xl pt-3 mb-24 hover:underline underline-offset-3 font-semibold tracking-wider'>Tools and Technologies Driving My Work</h3>
            <div className='flex justify-start items-center flex-wrap mx-auto w-3/4 gap-4 mb-32'>
                {logos.map((logo, index) => (
                    <Skillwidget key={index} skillIcon={logo} skillName={logo.src.split('/')[logo.src.split('/').length - 1].split('-')[0]} />
                ))}
            </div>
            <div className='mt-36 mb-52 w-3/4 mx-auto p-2'>
                <h1 className='text-center text-5xl font-bold mt-8'>Why hire me?</h1>
                <p className=' text-xl my-12  hover:underline underline-offset-3 font-semibold tracking-wider text-justify'>I am a Full Stack Developer with experience in building both web and mobile applications. I specialize in Full Stack development using <strong>JavaScript, Next.js, React, and Node.js</strong>, and I&apos;m passionate about helping others succeed through technology. I work diligently to deliver high-quality, tailored solutions that align with your vision and goals. Always eager to learn and improve, I continuously seek opportunities to expand my skills and stay <span className="inline-block px-2 border border-orange-500 -rotate-3 rounded-full">
                    up-to-date
                </span> with the latest technologies.</p>
            </div>
            <LogoSlider />
            <div className='h-60 bg-cardbg w-full mt-32 flex items-center justify-around '>
                <div>
                    <h1 className='text-white text-4xl font-bold tracking-wider'>Have an exciting project?</h1>
                    <h4 className='text-gray-400 tracking-widest text-lg font-semibold'>I am open to opportunities. Let&apos;s have a quick chat to see if we are a good fit.</h4>
                </div>
                <div>
                    <Link href='/contact' passHref>
                        <Button variant='default' className=' w-fit bg-buttonbg font-semibold px-6 text-lg py-6 hover:border hover:border-buttonbg'>Lets&apos;s talk</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
