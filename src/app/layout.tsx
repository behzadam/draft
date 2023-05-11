import { MSWWrapper } from '@/lib/msw-wrapper';
import './globals.css';
import { AppProviders } from './providers';

export const metadata = {
  title: 'Draft | Next.js Application Architecture',
  description:
    'Feature-Driven Architecture, Next.js 13, Storybook, Mock Service Worker, React Testing Library.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <MSWWrapper>{children}</MSWWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
