import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { NextPage } from 'next'
import {FormEvent, useState} from "react";
import { useRouter } from 'next/router';

const Contact: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let form = {
            name,
            email,
            phone,
            message
        }

        const rawResponse = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const content = await rawResponse.json();

        // print to screen
        alert("Thank you for your submision")

        // Reset the form fields
        setMessage('')
        setPhone('')
        setName('')
        setEmail('')

        router.push('/')
    }

    return (
        <Main meta={<Meta title="matt jaeh - project reddere" description="Contact Page" />}>
            <h1 className="text-4xl font-sans justify-center items-center">
                        GET IN CONTACT
                    </h1>
            <div className="max-w-5xl mx-auto py-3">
                <form className="py-4 space-y-3" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center text-black">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" className="p-1 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-sm" placeholder="Your Name" />
                    </div>
                    <div className="flex items-center justify-center text-black">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="p-1 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-sm" placeholder="Your Email" />
                    </div>
                    <div className="flex items-center justify-center text-black">
                        <label htmlFor="phone" className="sr-only">Phone</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="p-1 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-sm" placeholder="Your Phone" />
                    </div>
                    <div className="flex items-center justify-center text-black">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" className="p-1 shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 h-36 sm:text-md border-gray-300 rounded-sm" placeholder="Your Message" />
                    </div>
                    <div className="flex items-center justify-center text-black">
                        <button type="submit" className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-blue-600">SEND</button>
                    </div>
                </form>
            </div>
        </Main>
    )
}

export default Contact;
