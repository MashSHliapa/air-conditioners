import { createSlice } from '@reduxjs/toolkit';
import { setCardToLocalStorage } from '../helpers/setCardToLocalStorage';
import { getCardFromLocalStorage } from '../helpers/getCardFromLocalStorage';
import { ICardItem } from '../types/interfaces';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    data: getCardFromLocalStorage('favorites'),
  },
  reducers: {
    addConditionerToFavorite: (state, action) => {
      const favoriteCards = action.payload;
      state.data.push(favoriteCards);
      setCardToLocalStorage('favorites', state.data);
    },
    removeConditionerFromFavorite: (state, action) => {
      const bookIndexDeleted = state.data.findIndex((item: ICardItem) => item.id == action.payload.id);
      state.data.splice(bookIndexDeleted, 1);
      setCardToLocalStorage('favorites', state.data);
    },
  },
});

export const { addConditionerToFavorite, removeConditionerFromFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
