import React from 'react'
import Contact from './contact'
import Footer from '@/component/footer'

export default function ContactPage() {
    return (
        <div className='relative top-24 flex justify-center items-center flex-col'>
            <div className="bg-[radial-gradient(ellipse_at_center,_#d1fae5_40%,_#E2F2FF_100%)] flex flex-col items-center justify-center ">
                <h1 className="text-5xl font-bold mb-4 ">Have questions or ideas?</h1>
                <p className="text-lg tracking-wide"> Reach out and let’s chat!</p>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}
