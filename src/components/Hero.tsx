import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-900 blur-3xl filter" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-900 blur-3xl filter" />
            </div>

            <div className="z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
                        From Startup to <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Half-Billion Dollar Exit
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto mb-10 max-w-2xl text-xl text-gray-400"
                >
                    I help entrepreneurs navigate the journey from idea to exit.
                    Scale your business with guidance from someone who has done it.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                    <Link
                        href="/contact"
                        className="rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-transform hover:scale-105 hover:bg-gray-100"
                    >
                        Get in Touch
                    </Link>
                    <Link
                        href="#about"
                        className="rounded-full border border-gray-700 bg-transparent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-gray-900"
                    >
                        My Story
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export { Hero };
