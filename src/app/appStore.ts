import { configureStore } from '@reduxjs/toolkit';
import cardListReducer from '../entities/games/model/gamesSlice';
import { gamesApi } from '../entities/games/api/gamesApi';
import { gameDetailsApi } from '../entities/gameDetails/api/gameDetailsApi';

const store = configureStore({
  reducer: {
    cardList: cardListReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    [gameDetailsApi.reducerPath]: gameDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      gamesApi.middleware,
      gameDetailsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
