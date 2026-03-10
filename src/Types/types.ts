export interface IGame {
  id: number;
  name: string;
  released: string;
  ratings_count: number;
}

export interface ICardListData {
  isLoading: boolean;
  games: IGame[];
  count: number;
  responseOk: boolean;
  currentPage: string | null;
}

export interface ICardListState {
  item: string | null;
  selectItems: IGame[];
  enableCacheGameList: boolean;
  enableCacheGameDetails: boolean;
}

export type setFindWord = (findWord: string) => void;
export type onSearch = () => void;

export type ResponseGames = {
  count: number;
  results: IGame[];
  next: string;
  description: string;
  [propName: string]: unknown;
};

type Genre = { id: number; name: string; [propName: string]: unknown };

export type ResponseGameDetail = {
  id: number;
  name: string;
  background_image: string;
  genres: Genre[];
  [propName: string]: unknown;
};

export type GamesData = {
  count: number;
  results: IGame[];
};

export type SetGameList = (listData: {
  gamesData: GamesData;
  responseOk: boolean;
}) => void;

export type GamesDetailData = {
  name: string;
  background_image: string;
  genres: string;
};

export type GameDetail = {
  detailData: GamesDetailData | null;
  id: number | null;
};
