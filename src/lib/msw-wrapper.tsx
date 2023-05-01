'use client';

import { API_MOCKING } from '@/config/constants';
import { initMocks } from '@/testing/mocks/initMocks';
import { ReactNode } from 'react';

if (API_MOCKING) {
  initMocks();
}

export const MSWWrapper = ({
  children
}: {
  children: ReactNode;
}) => {
  return <>{children}</>;
};
