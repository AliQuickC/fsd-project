import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../app/appStore';
import Header from './Header';

describe('Rendering Tests', () => {
  test('Render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header lsWord={''} />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('header-element')).toBeInTheDocument();
    expect(screen.getByTestId('search-element')).toBeInTheDocument();
  });
});
