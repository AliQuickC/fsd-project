import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { convertResponse } from '../../../shared/utils/utils';
import { base_gamelist_url, base_games_url } from '../../../shared/const/const';
import type { GamesData, ResponseGames } from '../model/types';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_games_url }),
  endpoints: (builder) => ({
    getGamesList: builder.query<
      GamesData,
      { searchTerm: string; pageNumber: string }
    >({
      query: (params: {
        searchTerm: string | undefined;
        pageNumber: string | undefined;
      }) =>
        base_gamelist_url +
        (params.pageNumber ? '&page=' + params.pageNumber : '') +
        (params.searchTerm ? '&search=' + params.searchTerm : ''),
      transformResponse: (response: ResponseGames) => convertResponse(response),
    }),
  }),
});

export const { useGetGamesListQuery } = gamesApi;
