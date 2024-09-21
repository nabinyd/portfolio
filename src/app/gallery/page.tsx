import React from 'react'
import Gallery from './gallery'

export default function page() {
    return (
        <div className='relative top-24 flex justify-start flex-col'>
            <div className="bg-[radial-gradient(ellipse_at_center,_#d1fae5_40%,_#E2F2FF_100%)] flex flex-col items-center justify-center h-60 mb-14 ">
                <h1 className="text-5xl font-bold mb-4 ">Visual Stories</h1>
                <p className="text-lg  tracking-wide"> Frames that tell the story of my journey and passion.</p>
            </div>
            <Gallery />
            {/* <Footer /> */}
        </div>
    )
}
