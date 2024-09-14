import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { GoogleAnalytics } from '@next/third-parties/google';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-RBGFCZ9RGS" />
    </>
  );
}

export default MyApp;
