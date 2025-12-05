import { Section } from './Section';

const About = () => {
    return (
        <Section id="about" className="bg-zinc-900" title="Who is Matt Jaeh?">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6 text-lg text-gray-300">
                    <p>
                        I'm an entrepreneur, investor, and mentor who loves solving complex problems.
                    </p>
                    <p>
                        I founded an edutech company called <strong>ProctorU</strong> and successfully exited it in 2020 for
                        <span className="text-yellow-500 font-bold"> over half a billion dollars</span>.
                    </p>
                    <p>
                        But the journey wasn't a straight line. <span className="text-yellow-500 font-bold">I probably made every mistake possible.</span>
                        It took grit, innovation, and a relentless focus on customer needs. Now, I use that
                        experience to help the next generation of founders avoid the pitfalls I faced and hopefully
                        help them to succeed.
                    </p>
                    <p>
                        Are you trying to start a business?  Are you struggling with your start-up?
                        Looking for a mentor? Advisor? Investor? Or just want someone to talk to?
                    </p>
                    <p>
                        Hit me up! I want to help.
                    </p>
                </div>
                <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
                    <img
                        src="/assets/images/2024-MattJaeh-Headshot2.png"
                        alt="Matt Jaeh"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </Section>
    );
};

export { About };
