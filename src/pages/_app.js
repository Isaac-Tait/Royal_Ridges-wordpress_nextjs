// src/pages/_app.js
import '@/styles/globals.css';

import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as fbq from '../lib/fpixel';

// ✅ Add next/font (Google)
import {
  Permanent_Marker,
  Gloria_Hallelujah,
} from 'next/font/google';

// Expose each font as a CSS variable
const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cursive',
  display: 'swap',
});

const gloria = Gloria_Hallelujah({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-chalk',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    fbq.pageview();
    const handleRouteChange = () => fbq.pageview();
    router.events.on('routeChangeComplete', handleRouteChange);
    return () =>
      router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      {/* Facebook Pixel */}
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=''
        />
      </noscript>

      {/* Apply font variables at the app root so they cascade everywhere */}
      <div
        className={`${permanentMarker.variable} ${gloria.variable}`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
