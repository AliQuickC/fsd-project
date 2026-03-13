import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey, base_games_url } from '../../../shared/const/const';
import { convertGameDetailResponse } from '../../../shared/utils/utils';
import type { GameDetail, ResponseGameDetail } from '../model/types';

export const gameDetailsApi = createApi({
  reducerPath: 'gameDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_games_url }),
  endpoints: (builder) => ({
    getGameDetails: builder.query<GameDetail, string>({
      query: (id: string) => '/' + id + '?key=' + apiKey,
      transformResponse: (response: ResponseGameDetail) =>
        convertGameDetailResponse(response),
    }),
  }),
});

export const { useGetGameDetailsQuery } = gameDetailsApi;
