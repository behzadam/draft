import NextLink from 'next/link';
import { ReactNode } from 'react';

export type Props = {
  href: string;
  children: ReactNode;
  shallow?: boolean;
};

export const Link = ({
  href,
  shallow = false,
  children,
  ...rest
}: Props) => {
  return (
    <NextLink
      shallow={shallow}
      href={href}
      passHref
      {...rest}
    >
      {children}
    </NextLink>
  );
};
