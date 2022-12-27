//import Link from 'next/link';
import type { ReactNode } from 'react';
import { SocialIcon } from 'react-social-icons';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  
  <div className="w-full px-1 text-black antialiased w-full h-screen bg-center bg-main bg-cover">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div>
        <div className="pt-3 pb-8">
          <div className="text-6xl font-thin leading-tight font-sans text-black">
            {AppConfig.title}
          </div>
          <div className="text-xl text-red-100">{AppConfig.description}</div>
        </div>
        <div className="content py-3 text-m">{props.children}</div>
        <div>
          <ul className="flex flex-wrap text-xl font-extrabold">
            <li className="mr-10">
              Lets Get Social
            </li>
            <li className="mr-10">
            <SocialIcon 
              url="https://www.tiktok.com/@realmattjaeh"
              style={{height: 30, width: 30}}
              />
            <SocialIcon 
              url="https://www.instagram.com/mattjaeh/"
              style={{height: 30, width: 30}}
              />
            <SocialIcon 
              url="https://www.youtube.com/channel/UC-6cRd9sA2ytw5M6_Dbnvqg"
              style={{height: 30, width: 30}}
              />
            <SocialIcon 
              url="https://www.linkedin.com/in/matthewjaeh/"
              style={{height: 30, width: 30}}
              />
            <SocialIcon 
              url="https://www.facebook.com/matthew.jaeh/"
              style={{height: 30, width: 30}}
              />
            </li>
          </ul>
        </div>
      </div>

    
      <div className="py-4 text-center text-xs">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with help from{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
      </div>
    </div>
  </div>
);

export { Main };
