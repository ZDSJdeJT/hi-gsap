import type { Metadata } from 'next';
import { Noto_Sans, Noto_Sans_Mono } from 'next/font/google';

import { cn } from '@/lib/utils';

import '@/styles/globals.css';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

const notoMono = Noto_Sans_Mono({
  variable: '--font-noto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hi GSAP',
  description: '一个由 Next.js 和 GSAP 构建的网站。',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={cn(notoSans.variable, notoMono.variable, 'antialiased')}>
        <main>{props.children}</main>
      </body>
    </html>
  );
}
