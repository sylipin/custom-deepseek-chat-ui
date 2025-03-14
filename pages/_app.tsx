import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from '../components/theme-provider';
import { Toaster } from '../components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className={inter.className}>
        <Component {...pageProps} />
        <Toaster />
      </main>
    </ThemeProvider>
  );
} 