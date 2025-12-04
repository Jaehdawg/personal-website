import { Meta } from '@/layouts/Meta';
import { Layout } from '@/layouts/Layout';
import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { Section } from '@/components/Section';

const Contact: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = {
            name,
            email,
            phone,
            message,
        };

        try {
            const rawResponse = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            await rawResponse.json();

            setStatus('success');
            // Reset the form fields
            setMessage('');
            setPhone('');
            setName('');
            setEmail('');

            setTimeout(() => {
                router.push('/');
            }, 2000);
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <Layout
            meta={<Meta title="Contact Matt Jaeh" description="Get in touch for mentorship or investment." />}
        >
            <div className="pt-24"> {/* Spacer for fixed navbar */}
                <Section title="Get in Touch" subtitle="Ready to scale? Let's talk.">
                    <div className="mx-auto max-w-xl rounded-2xl bg-zinc-900 p-8 shadow-2xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                                    Name
                                </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    id="name"
                                    required
                                    className="block w-full rounded-lg border border-gray-700 bg-black p-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    required
                                    className="block w-full rounded-lg border border-gray-700 bg-black p-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500"
                                    placeholder="you@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
                                    Phone
                                </label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    id="phone"
                                    className="block w-full rounded-lg border border-gray-700 bg-black p-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="message"
                                    required
                                    rows={4}
                                    className="block w-full rounded-lg border border-gray-700 bg-black p-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500"
                                    placeholder="Tell me about your business..."
                                />
                            </div>

                            {status === 'success' && (
                                <div className="rounded-md bg-green-900/50 p-4 text-green-400">
                                    Message sent successfully! Redirecting...
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="rounded-md bg-red-900/50 p-4 text-red-400">
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className="w-full rounded-lg bg-white px-5 py-3 text-center text-sm font-bold text-black transition-all hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 disabled:opacity-50"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </Section>
            </div>
        </Layout>
    );
};

export default Contact;
