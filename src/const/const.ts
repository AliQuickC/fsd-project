export const FIRST_PAGE = '1';
export const MAX_CARDS_ON_PAGE: number = 15;

export const storeKEY = 'module3';
export const apiKey: string = import.meta.env.VITE_API_KEY;

export const base_games_url = 'https://api.rawg.io/api/games';
export const base_gamelist_url =
  base_games_url +
  '?key=' +
  apiKey +
  '&page_size=' +
  MAX_CARDS_ON_PAGE.toString();
export const base_game_detail_url = base_games_url + '/';

export const responseErrorMessage =
  'Unknow error, failed to get data from server !';
export const notDataMessage = 'no results';
