import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { globalStyles } from 'styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="dark">
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
