import type { Genre } from '../../../shared/Types/types';

export type ResponseGameDetail = {
  id: number;
  name: string;
  background_image: string;
  genres: Genre[];
  [propName: string]: unknown;
};

export type GamesDetailData = {
  name: string;
  background_image: string;
  genres: string;
};

export type GameDetail = {
  detailData: GamesDetailData | null;
  id: number | null;
};
