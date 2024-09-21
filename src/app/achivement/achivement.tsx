import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


type AchivementProps = {
    title: string,
    description: string,
    image: string,
}

export default function Achivement({ title, description, image }: AchivementProps) {

    return (
        <div className='m-8 border border-blue-300 rounded-md p-3 text-start shadow-md shadow-blue-300 hover:shadow-lg hover:shadow-blue-400'>
            <Link href={image} passHref>
                <Image
                    src={image}
                    alt={title}
                    height={240}
                    width={700}
                    className='mx-auto rounded h-60 object-fill transform transition-transform duration-300 hover:scale-[1.15]'
                />
                <p className='text-2xl font-bold py-3 hover:underline'>{title}</p>
                <p>{description}</p>
            </Link>
        </div>
    )
}
