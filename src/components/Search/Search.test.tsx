import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

const mockWord2 = 'findword';

describe('Rendering Tests', () => {
  test('Renders search input and search button', () => {
    render(
      <BrowserRouter>
        <Search lsWord={''} />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/find.../i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Shows empty input when no saved term exists', () => {
    render(
      <BrowserRouter>
        <Search lsWord={''} />
      </BrowserRouter>
    );

    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);

    expect(searchInput.value).toBe('');
  });
});

describe('User Interaction Tests', () => {
  test('Trims whitespace from search input before saving', async () => {
    const mockStr = '  ' + mockWord2 + '   ';

    render(
      <BrowserRouter>
        <Search lsWord={''} />
      </BrowserRouter>
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.getByRole(
      'button'
    ) as HTMLButtonElement;

    await user.type(searchInput, mockStr);
    await user.click(searchButton);

    await waitFor(async () => {
      expect(window.location.search).toContain(`page=${'1'}`);
      expect(window.location.search).toMatch(/search=findword/i);
    });
  });

  test('Triggers search callback with correct parameters, search word missing', async () => {
    render(
      <BrowserRouter>
        <Search lsWord={''} />
      </BrowserRouter>
    );

    const user = userEvent.setup();
    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/find.../i);
    const searchButton: HTMLButtonElement = screen.getByRole(
      'button'
    ) as HTMLButtonElement;

    await user.clear(searchInput);
    await user.click(searchButton);

    await waitFor(async () => {
      expect(window.location.search).toContain(`page=${'1'}`);
      expect(window.location.search).not.toMatch(/search/i);
    });
  });
});
