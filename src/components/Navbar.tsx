import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-white">
                    <Image
                        src="/Icon.png"
                        alt="Matt Jaeh Icon"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    MATT JAEH
                </Link>
                <div className="hidden space-x-8 md:flex">
                    <Link href="/#about" className="mx-auto mb-10 max-w-2xl text-xl text-gray-400 hover:text-white">
                        About
                    </Link>
                    <Link href="/#services" className="mx-auto mb-10 max-w-2xl text-xl text-gray-400 hover:text-white">
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-gray-200"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };
