import type { IGame } from '../Types/types';

export const prepareSelectData = (gameItems: IGame[]): string[][] => {
  const selectedArray: string[][] = gameItems.map((item: IGame) => {
    return ['' + item.id, item.name, item.released, '' + item.ratings_count];
  });
  selectedArray.unshift(['id', 'name', 'released', 'rating']);
  return selectedArray;
};
