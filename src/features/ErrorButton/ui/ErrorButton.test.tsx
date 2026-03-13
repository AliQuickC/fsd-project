import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import ErrorButton from './ErrorButton';

test('Error button click', () => {
  render(<ErrorButton />);

  expect(
    screen.getByRole('button', { name: 'generate throw' })
  ).toBeInTheDocument();
});
