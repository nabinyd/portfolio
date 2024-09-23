import React from 'react'
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type BlogProps = {
    title: string;
    description: string;
    author: string;
    publishedOn: string;
    icon: StaticImageData;
    link: string;
}



export default function Blog({ title, description, author, publishedOn, icon, link }: BlogProps) {
    return (
        <Link href={link} passHref target='_'>
            <div className='md:w-1/2 p-4  border border-blue-700 rounded-2xl flex flex-col items-center shadow-lg shadow-blue-300 justify-center mx-auto hover:shadow-xl hover:shadow-blue-400'>
                <h2 className='text-3xl font-bold text-justify'>{title}</h2>
                <p className='text-justify my-3 text-ellipsis line-clamp-3 text-lg'>
                    {description}
                </p>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex  gap-x-5'>
                        <div className='h-8 w-8 rounded-full border'>
                            <Image src={icon} alt='react logo' className='h-8 w-8 object-cover' />
                        </div>
                        <h3 className='font-semibold'>{author}</h3>
                    </div>
                    <div>
                        <h3 className=''>Published on</h3>
                        <p>{publishedOn}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
