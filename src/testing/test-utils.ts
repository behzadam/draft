import { AppProviders } from '@/app/providers';
import {
  render,
  RenderOptions
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, {
    wrapper: AppProviders,
    ...options
  });
};

export * from '@testing-library/react';
export { customRender as render };
export { userEvent };
