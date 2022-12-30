import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../products/product.type";

const initialState: IProduct[] = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<IProduct>) => {
      const isHavingFav = state.some((fav) => fav.id === action.payload.id);

      if (isHavingFav) {
        return state.filter((fav) => fav.id !== action.payload.id);
      }

      if (!isHavingFav) {
        state.push(action.payload);
      }
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
