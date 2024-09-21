
import React from 'react'
import { Email, GitHub, LinkedIn, Twitter, LinkSharp } from '@mui/icons-material'
import Link from 'next/link'
import logo from '@/assets/Nabin-logo.png'
import Image from 'next/image'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="h-fit relative bottom-0 w-full p-4 bg-navbarbg flex items-center justify-around text-white text-center mt-12">
            <footer>
                <Image src={logo} alt='logo' height={60} className='mx-auto' />
                <h1 className='text-lg font-fira p-2'>Hand-coded in Visual Studio Code, powered by Next.js, and launched on Vercel</h1>
                <div className=''>
                    <p className='font-bold text-lg p-1'>© {year} All rights reserved</p>
                </div>
                <div className="mt-2 space-x-3 flex items-center justify-center text-white">
                    <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" passHref className=' bg-cardbg px-1 py-1 rounded-md'>
                        <Email fontSize="medium" />
                    </Link>
                    <Link href="https://github.com/nabinyd" passHref className=' bg-cardbg px-1 py-1 rounded-md'>
                        <GitHub fontSize="medium" />
                    </Link>
                    <Link href="https://twitter.com/nabin_yd_" passHref className=' bg-cardbg px-1 py-1 rounded-md'>
                        <Twitter fontSize="medium" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/nabin-yadav-727b96283" passHref className=' bg-cardbg px-1 py-1 rounded-md'>
                        <LinkedIn fontSize="medium" />
                    </Link>
                    <Link href="https://www.nabinyadav1.com.np" passHref className=' bg-cardbg px-1 py-1 rounded-md'>
                        <LinkSharp fontSize="medium" />
                    </Link>
                </div>
            </footer>
        </div>
    )
}
