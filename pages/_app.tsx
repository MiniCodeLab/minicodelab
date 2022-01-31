import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { globalStyles } from 'styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Script defer data-domain="minicodelab.dev" src="/js/script.js" strategy="afterInteractive" />

      <ThemeProvider defaultTheme="dark">
        {globalStyles}

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
