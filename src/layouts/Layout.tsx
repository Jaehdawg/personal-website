import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';


type LayoutProps = {
    meta: ReactNode;
    children: ReactNode;
};

const Layout = ({ meta, children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-black text-white antialiased">
            {meta}
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export { Layout };
