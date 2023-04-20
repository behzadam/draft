import NextLink from 'next/link';
import { ReactNode } from 'react';

export type Props = {
  href: string;
  children: ReactNode;
  shallow?: boolean;
};

export const Link = ({
  href,
  children,
  shallow = false
}: Props) => {
  return (
    <NextLink shallow={shallow} href={href} passHref>
      {children}
    </NextLink>
  );
};
