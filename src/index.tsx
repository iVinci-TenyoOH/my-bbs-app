import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './state/store';
import theme from './theme/style';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  // React.StrictModeはエラーが解決できないなら、削除してもいいです
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
