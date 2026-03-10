import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import TopControls from './TopControls';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Rendering Tests', () => {
  test('Render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <TopControls lsWord={''} />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('header-element')).toBeInTheDocument();
    expect(screen.getByTestId('search-element')).toBeInTheDocument();
  });
});
