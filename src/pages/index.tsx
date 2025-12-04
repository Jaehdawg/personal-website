import { Meta } from '@/layouts/Meta';
import { Layout } from '@/layouts/Layout';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';

const Index = () => {
  return (
    <Layout
      meta={
        <Meta
          title="Matt Jaeh - From Startup to Exit"
          description="I help entrepreneurs scale their business."
        />
      }
    >
      <Hero />
      <About />
      <Services />
    </Layout>
  );
};

export default Index;
