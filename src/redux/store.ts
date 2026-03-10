import { configureStore } from '@reduxjs/toolkit';
import cardListReducer from './slice/cardlistSlice';
import { gamesApi } from './gameApi';

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
