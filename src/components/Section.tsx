import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type SectionProps = {
    children: ReactNode;
    className?: string;
    id?: string;
    title?: string;
    subtitle?: string;
};

const Section = ({ children, className, id, title, subtitle }: SectionProps) => {
    return (
        <section id={id} className={cn('py-20 px-4 sm:px-6 lg:px-8', className)}>
            <div className="mx-auto max-w-7xl">
                {(title || subtitle) && (
                    <div className="mb-12 text-center">
                        {title && (
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="mx-auto max-w-2xl text-lg text-gray-400">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export { Section };
