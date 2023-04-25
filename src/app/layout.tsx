import { AppProviders } from '@/app/providers';
import { API_MOCKING } from '@/config/constants';
import { MSWWrapper } from '@/lib/msw-wrapper';
import './globals.css';

export const metadata = {
  title: 'Draft | Next.js Application Architecture',
  description:
    'Feature-Driven Architecture, Next.js 13, Storybook, Mock Service Worker, React Testing Library.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          {API_MOCKING ? (
            <MSWWrapper>{children}</MSWWrapper>
          ) : (
            children
          )}
        </AppProviders>
      </body>
    </html>
  );
}
