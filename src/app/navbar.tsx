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

    return (
        <nav className={`py-3 flex items-center justify-evenly gap-x-14 fixed z-50 mx-auto bg-navbarbg w-3/4 text-white rounded-xl left-1/2 transform -translate-x-1/2 top-2 drop-shadow-md shadow-violet-900 transition-transform duration-300 ${isScrolling ? '-translate-y-full' : 'translate-y-0'
            }`}>
            <Link href='/'>
                <Image src={logo} alt='logo' height={40} />
            </Link>
            <ul className='flex space-x-7'>
                <Link href='/'>
                    <li className={isActive('/')}>Home</li>
                </Link>
                <Link href='work'>
                    <li className={isActive('/work')}>Work</li>
                </Link>
                <Link href='/blog'>
                    <li className={isActive('/blog')}>Blog</li>
                </Link>
                <Link href='/gallery'>
                    <li className={isActive('/gallery')}>Gallery</li>
                </Link>
                <Link href='achivement'>
                    <li className={isActive('/achivement')}>Achivement</li>
                </Link>
            </ul>
            <Link href='/contact' passHref>
                <Button variant='default' className={pathName=== '/contact'?'bg-buttonbg hover:bg-orange-600':'bg-blue-600 hover:bg-orange-600 text-lg '}>Let&apos;s Talk</Button>
            </Link>
        </nav>
    )
}
