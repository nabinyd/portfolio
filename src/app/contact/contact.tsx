'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import showToast from './showToast'



export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError('')


        if (!name || !email || !message) {
            setError('Please fill in all fields')
            setLoading(false)
            return
        }

        // validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email')
            setLoading(false)
            return
        }

        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        }).then((res) => {
            if (res.ok) {
                setLoading(false)
                setName('')
                setEmail('')
                setMessage('')
                showToast('Message sent!', 'success')

            } else {
                setError('Something went wrong. Please try again')
                setLoading(false)
                showToast('Something went wrong. Please try again', 'error')
            }
        })
    }

    return (
        <div className='mx-auto md:w-1/3 p-5 rounded-md md:m-5 shadow-xl drop-shadow-lg border border-blue-300 shadow-blue-300 w-full'>

            <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='p-2 border border-blue-600 rounded-md bg-transparent focus:outline focus:outline-blue-900'
                    required
                />
                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-2 border border-blue-600 rounded-md bg-transparent focus:outline focus:outline-blue-900'
                    required
                />
                <textarea
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    cols={30}
                    rows={10}
                    className='p-2 border border-blue-600 rounded-md bg-transparent focus:outline focus:outline-blue-900'
                    required
                ></textarea>

                {error && <p className='text-red-500 text-center'>{error}</p>}

                <Button
                    type="submit"
                    variant='outline'
                    className='w-36 bg-buttonbg font-semibold mx-auto text-lg hover:bg-orange-500'
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Submit'}
                </Button>
            </form>

        </div>
    )
}
