import { API_MOCKING } from '@/config/constants';
import { initMocks } from '@/testing/mocks/initMocks';
import { Croissant_One } from 'next/font/google';
import './globals.css';
import { AppProviders } from './providers';

export const metadata = {
  title: 'Draft | Next.js Application Architecture',
  description:
    'Feature-Driven Architecture, Next.js 13, Storybook, Mock Service Worker, React Testing Library.'
};

const headingFont = Croissant_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading'
});

if (API_MOCKING) {
  initMocks();
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable}`}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
