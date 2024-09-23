'use client';

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/assets/Nabin-logo.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathName = usePathname();
    const [isScrolling, setIsScrolling] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => {
        return pathName === path ? 'text-buttonbg' : '';
    }

    useEffect(() => {
        let prevScrollpos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                setIsScrolling(false); // Scrolling up
            } else {
                setIsScrolling(true);  // Scrolling down
            }
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    console.log(isOpen);

    return (
        <nav className={`py-3 flex md:items-center md:justify-evenly justify-between gap-x-14 fixed z-50 mx-auto bg-navbarbg md:w-3/4 text-white sm:rounded-xl left-1/2 transform -translate-x-1/2 top-2 drop-shadow-md shadow-violet-900 transition-transform duration-300 w-full px-2 ${isScrolling ? '-translate-y-full' : 'translate-y-0'
            }`}>
            <Link href='/' className=''>
                <Image src={logo} alt='logo' height={40} />
            </Link>

            <ul className={`sm:flex space-x-7  ${isOpen ? 'flex flex-col items-center justify-evenly h-80 left-1/2 transform -translate-x-1/2 absolute bg-navbarbg text-center top-16  w-full ' : 'hidden'}`}>
                <div className='sm:flex sm:items-center sm:justify-center sm:gap-5 '>
                    <Link href='/'>
                        <li className={isActive('/')} >Home</li>
                    </Link>
                    <Link href='work'>
                        <li className={`${isActive('/work')} sm:my-0 my-3`}>Work</li>
                    </Link>
                    <Link href='/blog'>
                        <li className={`${isActive('/blog')} sm:my-0 my-3`}>Blog</li>
                    </Link>
                    <Link href='/gallery'>
                        <li className={`${isActive('/gallery')} sm:my-0 my-3`}>Gallery</li>
                    </Link>
                    <Link href='achivement'>
                        <li className={`${isActive('/achivement')} sm:my-0 my-3`}>Achivement</li>
                    </Link>
                    {isOpen && <Link href='/contact' passHref className=''>
                        <Button variant='default' className={pathName === '/contact' ? 'bg-buttonbg hover:bg-orange-600 mt-7' : 'bg-blue-600 hover:bg-orange-600 text-lg mt-7'}>Let&apos;s Talk</Button>
                    </Link>}
                </div>
            </ul>

            <Link href='/contact' passHref className='sm:block hidden'>
                <Button variant='default' className={pathName === '/contact' ? 'bg-buttonbg hover:bg-orange-600' : 'bg-blue-600 hover:bg-orange-600 text-lg '}>Let&apos;s Talk</Button>
            </Link>
            <div className='sm:hidden block'>
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={handleToggle}  ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={handleToggle}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>}
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleToggle}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg> */}
            </div>
        </nav>
    )
}
