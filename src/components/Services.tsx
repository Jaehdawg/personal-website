import { Section } from './Section';

const services = [
    {
        title: 'Mentorship',
        description: 'One-on-one guidance to help you navigate the challenges of scaling.',
        icon: '🚀',
    },
    {
        title: 'Speaking and Events',
        description: 'Lessons Learned, Industry Insights, Personal Stories, Keynotes, Panels, Judging.',
        icon: '',
    },
    {
        title: 'Strategic Advisory',
        description: 'High-level strategy for product market fit, go-to-market, fundraising executive coaching and exit planning.',
        icon: '🎯',
    },
    {
        title: 'Technical Review and Diligence',
        description: 'Assessment of your business practices to ensure scalability. Due diligence for acquisitions and investments.',
        icon: '⚙️',
    },
];

const Services = () => {
    return (
        <Section id="services" className="bg-black" title="How I Can Help">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group rounded-xl border border-gray-800 bg-zinc-900 p-6 transition-all hover:-translate-y-1 hover:border-yellow-500 hover:shadow-lg"
                    >
                        <div className="mb-4 text-4xl">{service.icon}</div>
                        <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export { Services };
