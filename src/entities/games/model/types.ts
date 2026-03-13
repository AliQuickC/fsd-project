export interface IGame {
  id: number;
  name: string;
  released: string;
  ratings_count: number;
}

export interface IGameListState {
  item: string | null;
  selectItems: IGame[];
  enableCacheGameList: boolean;
  enableCacheGameDetails: boolean;
}

export interface ResponseGames {
  count: number;
  results: IGame[];
  next: string;
  description: string;
  [propName: string]: unknown;
}

export type GamesData = Pick<ResponseGames, 'count' | 'results'>;

export type SetGameList = (listData: {
  gamesData: GamesData;
  responseOk: boolean;
}) => void;
