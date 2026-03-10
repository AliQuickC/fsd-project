import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICardListState, IGame } from '../../Types/types';

export const initialState: ICardListState = {
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
      state: ICardListState,
      action: PayloadAction<string | null>
    ) => {
      state.item = action.payload;
    },
    selectItem: (state: ICardListState, action: PayloadAction<IGame>) => {
      state.selectItems.push(action.payload);
    },
    unSelectItem: (state: ICardListState, action: PayloadAction<number>) => {
      const findItem: number = state.selectItems.findIndex(
        (element) => element.id === action.payload
      );
      if (findItem !== -1) {
        state.selectItems.splice(findItem, 1);
      }
    },
    unSelectAllItems: (state: ICardListState) => {
      state.selectItems = [];
    },
    switchCacheGameList: (state: ICardListState) => {
      state.enableCacheGameList = !state.enableCacheGameList;
    },
    switchCacheGameDetails: (state: ICardListState) => {
      state.enableCacheGameDetails = !state.enableCacheGameDetails;
    },
  },
});

export const actions = cardListSlice.actions;

export default cardListSlice.reducer;
