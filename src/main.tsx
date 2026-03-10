import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.sass';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundaryPage/ErrorBoundaryPage.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

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
