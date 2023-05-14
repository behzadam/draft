import { MSWWrapper } from '@/lib/msw-wrapper';
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

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable}`}>
      <body>
        <AppProviders>
          <MSWWrapper>{children}</MSWWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
