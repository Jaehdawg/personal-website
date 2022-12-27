import '../styles/global.css';
import { GoogleAnalytics } from "nextjs-google-analytics";
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
