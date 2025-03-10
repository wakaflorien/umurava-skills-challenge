import { Work_Sans } from 'next/font/google';

export const workSans = Work_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-work-sans',
    preload: true,
    fallback: ['system-ui', 'arial'],
    adjustFontFallback: true,
  });