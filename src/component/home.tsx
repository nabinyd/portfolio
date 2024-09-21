"use client";
import { Twitter, GitHub, LinkedIn, LinkSharp, Email, Download } from '@mui/icons-material';
import { Button } from '@/components/ui/button';
import Link from 'next/link';





export default function Homepage() {


    return (
        <div className='w-full'>
            <div className='w-3/5 py-16 border mx-auto text-center drop-shadow-2xl  shadow-lg shadow-violet-400'>
                <h1 className='font-bold text-6xl'>Nabin Yadav</h1>
                <p className='text-2xl tracking-wider'>Electronics communication and Information Engineering ||</p>
                <p className='text-2xl'>Full stack developer</p>
                <p className='m-7 w-3/4 mx-auto text-lg font-semibold tracking-wider'>
                    I bring ideas to life through clean code and creative solutions. With expertise in both front-end and back-end development.
                </p>
                <Link href='/Nabin_Yadav_Resume.pdf' passHref download='Nabin-yadav-resume'>
                    <Button variant='default'  className=' w-44 bg-buttonbg font-semibold'>Download CV <Download className='left-2' /></Button>
                </Link>
                <div className="mt-7 space-x-3 flex items-center justify-center text-white">
                    <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" passHref target='_' className='border bg-cardbg px-1 py-1 rounded-md'>
                        <Email fontSize="large" />
                    </Link>
                    <Link href="https://github.com/nabinyd" passHref className='border bg-cardbg px-1 py-1 rounded-md'>
                        <GitHub fontSize="large" />
                    </Link>
                    <Link href="https://twitter.com/nabin_yd_" passHref className='border bg-cardbg px-1 py-1 rounded-md'>
                        <Twitter fontSize="large" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/nabin-yadav-727b96283/" passHref className='border bg-cardbg px-1 py-1 rounded-md'>
                        <LinkedIn fontSize="large" />
                    </Link>
                    <Link href="https://www.nabinyadav1.com.np" passHref className='border bg-cardbg px-1 py-1 rounded-md'>
                        <LinkSharp fontSize="large" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
