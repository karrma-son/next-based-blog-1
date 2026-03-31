import { Inter, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // 'swap' avoids invisible text while loading
  variable: '--font-inter', // Optional: for using with CSS variables/Tailwind CSS
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});