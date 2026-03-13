import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './layouts/App.tsx';
import ErrorBoundary from '../pages/errorboundarypage/ui/ErrorBoundaryPage.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './appStore.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
