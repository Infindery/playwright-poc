import "@/styles/index.scss";
import { Manrope } from 'next/font/google';
import type { AppProps } from "next/app";

const manrope = Manrope({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
		<div className={`${manrope.className}`}>
      <Component {...pageProps} />
    </div>
	);
}
