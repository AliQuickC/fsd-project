import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Routing Tests', () => {
  vi.mock('../../pages/games/ui/GamesPage/GamesPage', () => ({
    __esModule: true,
    default: () => <div data-testid="GamesPageMock" />,
  }));

  vi.mock('../../pages/about/ui/AboutPage', () => ({
    __esModule: true,
    default: () => <div data-testid="AboutPageMock" />,
  }));

  vi.mock('../../pages/notfoundpage/ui/NotFoundPage', () => ({
    __esModule: true,
    default: () => <div data-testid="NotFoundPageMock" />,
  }));

  test('Render page GamesPage', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('GamesPageMock')).toBeInTheDocument();
  });

  test('Render page AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('AboutPageMock')).toBeInTheDocument();
  });

  test('Render page NotFoundPage', () => {
    render(
      <MemoryRouter initialEntries={['/sfg']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('NotFoundPageMock')).toBeInTheDocument();
  });
});
