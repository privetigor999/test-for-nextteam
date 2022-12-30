import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../products/product.type";

interface CartProduct extends IProduct {
  count: number;
}

const initialState: CartProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const isHavingProd = state.some((prod) => prod.id === action.payload.id);

      if (isHavingProd) {
        state.map((prod) => {
          if (prod.id !== action.payload.id) {
            return prod;
          }
          return (prod.count = action.payload.count);
        });
      }

      if (!isHavingProd) {
        state.push(action.payload);
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
