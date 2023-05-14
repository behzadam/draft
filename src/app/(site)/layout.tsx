import { LayoutSite } from '@/components/layout';

export default async function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <LayoutSite>{children}</LayoutSite>;
}
