import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SelectedItems } from './SelectedItems';
import { expect, test } from 'vitest';
import { Provider } from 'react-redux';
import store from '../../redux/store';

test('Render selected items info panel', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <SelectedItems selectedElements={5} />
      </Provider>
    </BrowserRouter>
  );

  const countOutputElement = screen.getByTestId('select-item-count');

  expect(screen.getByText(/Selected elements:/i)).toBeInTheDocument();
  expect(countOutputElement).toBeInTheDocument();
  expect(countOutputElement?.textContent).toBe('5');
});
