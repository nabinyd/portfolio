import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { GitHub, AddLinkOutlined, ArrowRightAltOutlined } from '@mui/icons-material'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type ProjectcardProps = {
    title: string
    description: string
    image: StaticImageData
    github: string
    link: string,
    technologies: string[]
}

export default function Projectcard({ title, description, image, github, link, technologies }: ProjectcardProps) {
    return (
        <div className='m-5 border rounded-md pb-4 text-center drop-shadow-xl shadow-md shadow-blue-500 hover:shadow-lg hover:drop-shadow-2xl hover:shadow-blue-600 flex flex-col items-center justify-between '>
            <div>
                <h1 className=' p-3 font-bold text-3xl hover:underline hover:underline-offset-3'>{title} </h1>
                <Image src={image} alt='hydroponics' className='mx-auto rounded h-60 w-11/12 object-fill ' />
                <p className=' h-28 text-lg font-semibold  text-justify px-6 m-2 text-ellipsis  line-clamp-4 '>{description}</p>
            </div>
            <div className='flex flex-col justify-between'>
                <div>
                    <p className='font-bold text-lg underline '>Technologies</p>
                    <div className='flex flex-wrap justify-center'>
                        {technologies.map((tech, index) => (
                            <p key={index} className='m-1 px-2 py-1 bg-cardbg text-white rounded-md'>{tech}</p>
                        ))}
                    </div>
                </div>
                <div className='my-4'>
                    {github && <Link href={github} passHref target='_' className='border bg-cardbg p-3 rounded-md text-white'>
                        <GitHub fontSize='medium' />
                    </Link>}
                    {link && <Link href={link} passHref target='_' className='border bg-cardbg p-3 rounded-md text-white'>
                        <AddLinkOutlined fontSize='medium' />
                    </Link>}
                </div>
                {link && <Link href={link} passHref target='_' className=''>
                    <Button>View Project <ArrowRightAltOutlined fontSize='small' /></Button>
                </Link>}
            </div>
        </div>
    )
}
