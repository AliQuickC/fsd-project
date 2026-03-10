import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ItemsList from './ItemsList';
import { notDataMessage, responseErrorMessage } from '../../const/const';
import { games12, games20 } from '../../../__tests__/mock';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Rendering Tests', () => {
  test('Renders correct number of items when data is provided, loading states', () => {
    const { rerender } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            data={{ count: 1400, results: games20 }}
            error={undefined}
            isFetching={false}
          />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByTestId('card-element')).toHaveLength(20);

    rerender(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            data={{ count: 1400, results: games12 }}
            error={undefined}
            isFetching={false}
          />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getAllByTestId('card-element')).toHaveLength(12);
  });

  test('displayed, "no results" message when data array is empty', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            data={{ count: 1400, results: [] }}
            error={undefined}
            isFetching={false}
          />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(new RegExp(notDataMessage))).toBeInTheDocument();
  });

  test('Shows loading state while fetching data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            data={{ count: 1400, results: [] }}
            error={undefined}
            isFetching={true}
          />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByAltText(/loader.../i)).toBeInTheDocument();
    waitFor(() => {
      expect(screen.queryByAltText('loader...')).not.toBeInTheDocument();
    });
  });

  test('response Unknow error', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            data={{ count: 1400, results: games20 }}
            error={{}}
            isFetching={false}
          />
        </Provider>
      </BrowserRouter>
    );

    waitFor(() => {
      expect(screen.getByAltText(responseErrorMessage)).toBeInTheDocument();
    });
  });

  test('response Error code', async () => {
    const requestError = 'Request Error: message about error';

    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemsList
            data={{ count: 1400, results: games20 }}
            error={{ message: requestError }}
            isFetching={false}
          />
        </Provider>
      </BrowserRouter>
    );

    waitFor(() => {
      expect(screen.getByAltText(requestError)).toBeInTheDocument();
    });
  });
});
