export const metadata = {
  title: 'Site',
  description: 'Site'
};

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  <main>{children}</main>;
}
