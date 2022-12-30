import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { cartActions } from "../store/cart/cart.slice";
import { favoriteActions } from "../store/favorite/favorite.slice";
import { RootState } from "../store/store";

const allActions = {
  ...cartActions,
  ...favoriteActions,
};

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
