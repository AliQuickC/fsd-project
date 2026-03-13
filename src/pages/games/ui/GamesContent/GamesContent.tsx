import s from './GamesContent.module.sass';
import { FIRST_PAGE } from '../../../../shared/const/const';
import { useCardList } from '../../../../app/useAppSelector';
import { SelectedItems } from '../../../../features/SelectedItems/ui/SelectedItems';
import { type JSX } from 'react';
import { useGetGamesListQuery } from '../../../../entities/games/api/gamesApi';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '../../../../features/Pagination';
import { CardDetails } from '../../../../entities/gameDetails';
import { ItemsList } from '../../../../widgets/games';

function GamesContent(): JSX.Element {
  const { item, selectItems, enableCacheGameList } = useCardList();

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '';
  const search = searchParams.get('search') || '';

  const { data, status, isFetching, error } = useGetGamesListQuery(
    {
      searchTerm: search,
      pageNumber: page,
    },
    { refetchOnMountOrArgChange: !enableCacheGameList }
  );

  return (
    <main className={s.main} data-testid="results-element">
      <div className={'container ' + s.resultContainer}>
        <div>
          <div className={s.resultWrap}>
            <ItemsList data={data} error={error} isFetching={isFetching} />
            {item === null ? '' : <CardDetails item={item} />}
          </div>
          {status === QueryStatus.fulfilled ? (
            <Pagination
              cardsTotal={data?.count || 0}
              currentPage={page || FIRST_PAGE}
            />
          ) : (
            ''
          )}
        </div>

        {selectItems.length > 0 ? (
          <SelectedItems selectedElements={selectItems.length} />
        ) : (
          ''
        )}
      </div>
    </main>
  );
}

export default GamesContent;
