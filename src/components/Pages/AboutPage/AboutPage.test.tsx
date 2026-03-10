import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import AboutPage from './AboutPage';
import { BrowserRouter } from 'react-router-dom';

test('About page Render', () => {
  render(
    <BrowserRouter>
      <AboutPage />
    </BrowserRouter>
  );

  expect(screen.getByRole('link', { name: 'Home page' })).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});
