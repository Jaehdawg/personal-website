import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { NextPage } from 'next';
import {FormEvent, useState} from "react";

const Contact : NextPage = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      let form = {
          firstname,
          lastname,
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
      alert(content.data.tableRange)

      // Reset the form fields
      setMessage('')
      setPhone('')
      setFirstName('')
      setLastName('')
      setEmail('')
    }

  return (
    <Main meta={<Meta title="matt jaeh - Contact" description="Contact Me" />}>
      <h1 className="text-4xl font-sans pb-3 pt-3">
        CONTACT MATT JAEH
      </h1>
      <form className="py-2 space-y-3" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center text-black">
          <label htmlFor="firstname" className="sr-only">First Name</label>
            <input value={firstname} onChange={e => setFirstName(e.target.value)} type="text" name="firstname" id="firstname" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="First Name" />
        </div>
        <div className="flex items-center justify-center text-black">
          <label htmlFor="lastname" className="sr-only">Last Name</label>
            <input value={lastname} onChange={e => setLastName(e.target.value)} type="text" name="lastname" id="lastname" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Last Name" />
        </div>
        <div className="flex items-center justify-center text-black">
          <label htmlFor="email" className="sr-only">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Email" />
        </div>
        <div className="flex items-center justify-center text-black">
          <label htmlFor="phone" className="sr-only">Phone</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Phone" />
        </div>
        <div className="flex items-center justify-center text-black">
          <label htmlFor="message" className="sr-only">Message</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Message" />
        </div>
        <div className="flex items-center justify-center text-black">
          <button type="submit" className="flex items-center justify-center text-md w-64 rounded-md shadow py-3 px-2 text-white bg-blue-600">Send</button>
        </div>
      </form>

    </Main>
  );
}

export default Contact;
