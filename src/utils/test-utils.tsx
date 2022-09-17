import React, { ReactNode, ReactElement, PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../state/store';

const WithProviders = ({ children }: { children?: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement) => render(ui, { wrapper: WithProviders });

export * from '@testing-library/react';
export { customRender as render };
