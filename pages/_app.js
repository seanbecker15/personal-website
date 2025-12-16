import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RBGFCZ9RGS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RBGFCZ9RGS');
        `}
      </Script>
      <Script
        async
        src="https://plausible.io/js/pa-25S1Gw-mrJAC0dncwddaL.js"
        strategy="afterInteractive"
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`
          window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
          plausible.init()
        `}
      </Script>
    </>
  );
}

export default MyApp;
