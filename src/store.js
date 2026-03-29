import { configureStore } from "@reduxjs/toolkit";
import cartSlice, {
  placeOrderReducer,
  wishlistReducer,
} from "./Features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
    wishlistReducer: wishlistReducer,
    placeOrderReducer: placeOrderReducer,
  },
});

export default store;
