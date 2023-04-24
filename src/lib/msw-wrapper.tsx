'use client';

import { ReactNode } from 'react';

require('@/testing/mocks/initMocks');

export const MSWWrapper = ({
  children
}: {
  children: ReactNode;
}) => {
  return <>{children}</>;
};
