import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey, base_gamelist_url, base_games_url } from '../const/const';
import type {
  GameDetail,
  GamesData,
  ResponseGameDetail,
  ResponseGames,
} from '../Types/types';
import { convertGameDetailResponse, convertResponse } from '../utils/utils';

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
    getGameDetails: builder.query<GameDetail, string>({
      query: (id: string) => '/' + id + '?key=' + apiKey,
      transformResponse: (response: ResponseGameDetail) =>
        convertGameDetailResponse(response),
    }),
  }),
});

export const { useGetGamesListQuery, useGetGameDetailsQuery } = gamesApi;
