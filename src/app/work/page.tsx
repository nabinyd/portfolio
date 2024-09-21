import React from 'react'
import Project from './project'
import Footer from '@/component/footer'

export default function page() {
    return (
        <div className='relative top-24 flex justify-center items-center flex-col'>
            <div className="bg-[radial-gradient(ellipse_at_center,_#d1fae5_40%,_#E2F2FF_100%)] flex flex-col items-center justify-center p-14 mb-14 ">
                <h1 className="text-5xl font-bold mb-4 ">Some of my recent contributions</h1>
                <p className="text-lg tracking-wide"> Challenges met, solutions created, impact made</p>
            </div>
            <Project />
            <Footer />
        </div>
    )
}
