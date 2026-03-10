import { expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Pagination from './Pagination';
import { FIRST_PAGE, MAX_CARDS_ON_PAGE } from '../../const/const';
import { getPagesCount } from '../../utils/utils';

const cardsTotal = 136;
const pageCount = getPagesCount(cardsTotal, MAX_CARDS_ON_PAGE);
const startPage = FIRST_PAGE;

test('presence of element Pagination elements', () => {
  render(
    <BrowserRouter>
      <Pagination cardsTotal={cardsTotal} currentPage={startPage} />
    </BrowserRouter>
  );

  const paginationElements: HTMLElement[] =
    screen.getAllByTestId('pagination-element');
  if (!paginationElements) {
    test.fails('Pagination elements does not exist');
    return;
  }

  expect(paginationElements).toHaveLength(pageCount);
});

test('Trims whitespace from search input before saving', async () => {
  render(
    <BrowserRouter>
      <Pagination cardsTotal={cardsTotal} currentPage={startPage} />
    </BrowserRouter>
  );

  const paginationElements: HTMLElement[] =
    screen.getAllByTestId('pagination-element');
  const user = userEvent.setup();
  let pageNumber;

  waitFor(async () => {
    pageNumber = 2;
    await user.click(paginationElements[pageNumber - 1]);
    expect(window.location.search).toContain(`page=${'' + pageNumber}`);
  });
});
