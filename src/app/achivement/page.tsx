import React from 'react'
import Achivement from './achivement'
import Footer from '@/component/footer'

export default function page() {
    return (
        <div className='relative sm:top-24 top-10 flex justify-center items-center flex-col'>
            <div className="bg-[radial-gradient(ellipse_at_center,_#d1fae5_40%,_#E2F2FF_100%)] flex flex-col items-center justify-center p-14 sm:mb-14 text-center ">
                <h1 className="sm:text-5xl font-bold mb-4 text-3xl ">Achivements unlocked</h1>
                <p className="text-lg tracking-wide">
                    The trail of success and learning that I have achieved so far.
                </p>
            </div>
            <div className='md:w-9/12 mx-auto grid md:grid-cols-2'>
                <Achivement
                    title='60 days of learning challenge'
                    description='I took up the challenge to learn something new everyday for 60 days. It was a great experience and I learned a lot of new things.'
                    image='/achivement/60daysoflearningchallenge.jpg'
                />
                <Achivement
                    title='Goodies from Leapfrog'
                    description='I was awarded goodies from Leapfrog for my outstanding performance in the 60 days of learning challenge.'
                    image='/achivement/Goodies.jpg'
                />
                <Achivement
                    title='Internship at AugmntX'
                    description='I interned at AugmntX as a Mobile application developer. I worked on a project that involved building a mobile application for a client.'
                    image='/achivement/internship_completion_letter.jpg'
                />

            </div>
            <Footer />
        </div>
    )
}
