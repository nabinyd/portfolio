import React from 'react'
import Contact from './contact'
import Footer from '@/component/footer'

export default function ContactPage() {
    return (
        <div className='relative sm:top-24 top-10 flex justify-center items-center flex-col'>
            <div className="bg-[radial-gradient(ellipse_at_center,_#d1fae5_40%,_#E2F2FF_100%)] flex flex-col items-center justify-center p-14 sm:mb-14 text-center ">
                <h1 className="sm:text-5xl font-bold mb-4 text-3xl">Have questions or ideas?</h1>
                <p className="text-lg tracking-wide"> Reach out and let’s chat!</p>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}
