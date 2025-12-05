import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 py-12 text-white">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="mb-6 text-2xl font-bold">Connect with me</h2>
                <div className="mb-8 flex justify-center space-x-6">
                    <SocialIcon url="https://www.tiktok.com/@realmattjaeh/" />
                    <SocialIcon url="https://www.instagram.com/jaehdawg/" />
                    <SocialIcon url="https://www.youtube.com/@mattjaeh/" />
                    <SocialIcon url="https://www.linkedin.com/in/matthewjaeh/" />
                    <SocialIcon url="https://www.facebook.com/matthew.jaeh/" />
                </div>
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Matt Jaeh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export { Footer };
