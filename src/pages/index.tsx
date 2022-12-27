import { useRouter } from 'next/router';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="matt jaeh - project reddere"
          description="I want to help you achieve your goals"
        />
      }
    >
      <h1 className="text-5xl font-bold">
        WHO IS MATT JAEH?
      </h1>
        Over the years, I've developed a knack for solving complex entrepreneurial problems through innovative strategy,
        inventing new technologies, and disruptive business models. I founded an edutech company called ProctorU and successfully 
        exited it in 2020 for <i>over half-billion dollars.</i>
      <p></p>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold'>
          I WANT TO HELP YOU.
        </h1>
      </div>
      <p></p>
      Are you trying to start a business?  Are you struggling with your start-up?  Looking for a mentor? Advisor? Investor?
      Or just want someone to talk to?  
      
      
    </Main>
  );
};

export default Index;
