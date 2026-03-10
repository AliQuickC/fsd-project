import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import type { IGame } from '../../Types/types';
import { Item } from './Item';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const mockGames: IGame[] = [
  {
    id: 3498,
    name: 'Grand Theft Auto V',
    released: '2013-09-17',
    ratings_count: 7151,
  },
  {
    id: 3328,
    name: 'The Witcher 3: Wild Hunt',
    released: '2015-05-18',
    ratings_count: 6958,
  },
  {
    id: 4200,
    name: 'Portal 2',
    released: '2011-04-18',
    ratings_count: 5939,
  },
  {
    id: 4291,
    name: 'Counter-Strike: Global Offensive',
    released: '2012-08-21',
    ratings_count: 3586,
  },
];

describe('Rendering Tests', () => {
  test('Renders correct number of item when data is provided, loading states', () => {
    const { rerender } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Item
            key={mockGames[0].id}
            itemData={mockGames[0]}
            isSelect={false}
          />
        </Provider>
      </BrowserRouter>
    );

    let name = mockGames[0].name;
    let released = mockGames[0].released;
    expect(screen.getByText(new RegExp(name))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(released))).toBeInTheDocument();

    rerender(
      <BrowserRouter>
        <Provider store={store}>
          <Item
            key={mockGames[1].id}
            itemData={mockGames[1]}
            isSelect={false}
          />
        </Provider>
      </BrowserRouter>
    );

    name = mockGames[1].name;
    released = mockGames[1].released;
    expect(screen.getByText(new RegExp(name))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(released))).toBeInTheDocument();
  });

  test('Renders correct unselect icon', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Item
            key={mockGames[0].id}
            itemData={mockGames[0]}
            isSelect={false}
          />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('no-select-bookmark')).toBeInTheDocument();
  });

  test('Renders correct select icon', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Item key={mockGames[0].id} itemData={mockGames[0]} isSelect={true} />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('is select bookmark')).toBeInTheDocument();
  });
});
