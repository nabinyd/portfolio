import React from 'react'
import Blog from './blog'
import reactlogo from '@/app/skilllogo/react-logo.png'
import Footer from '@/component/footer'

export default function page() {
    return (
        <div className='relative top-24 flex items-center flex-col'>
            <div className="bg-[radial-gradient(ellipse_at_center,_#d1fae5_40%,_#E2F2FF_100%)] flex flex-col items-center justify-center h-60 mb-14 ">
                <h1 className="text-5xl font-bold mb-4 ">Insights & Ideas: My Blog </h1>
                <p className="text-lg  tracking-wide"> From Concept to Creation: A Developer’s Notebook</p>
            </div>

            <Blog
                title='How to delete a secret file from past github commits'
                description='Hello devs! Sometimes we make commits that contain confidential information or files(eg .env or any) that shouldn’t have been committed. But by any chance if you have committed in past, then this article is for you. In this guide, we’ll explore how to remove files from Git history without affecting other files. I’ve successfully used this process in my project.'
                author='Nabin Yadav'
                publishedOn='September 16, 2024'
                icon={reactlogo}
                link='https://medium.com/@nabiny501/how-to-delete-a-secret-file-from-past-github-commits-2ac87ef54813'
            />
            <Footer />
        </div>
    )
}
