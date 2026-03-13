import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IGame, IGameListState } from './types';

export const initialState: IGameListState = {
  item: null,
  selectItems: [],
  enableCacheGameList: true,
  enableCacheGameDetails: true,
};

export const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    setCardDetails: (
      state: IGameListState,
      action: PayloadAction<string | null>
    ) => {
      state.item = action.payload;
    },
    selectItem: (state: IGameListState, action: PayloadAction<IGame>) => {
      state.selectItems.push(action.payload);
    },
    unSelectItem: (state: IGameListState, action: PayloadAction<number>) => {
      const findItem: number = state.selectItems.findIndex(
        (element) => element.id === action.payload
      );
      if (findItem !== -1) {
        state.selectItems.splice(findItem, 1);
      }
    },
    unSelectAllItems: (state: IGameListState) => {
      state.selectItems = [];
    },
    switchCacheGameList: (state: IGameListState) => {
      state.enableCacheGameList = !state.enableCacheGameList;
    },
    switchCacheGameDetails: (state: IGameListState) => {
      state.enableCacheGameDetails = !state.enableCacheGameDetails;
    },
  },
});

export const actions = cardListSlice.actions;

export default cardListSlice.reducer;
