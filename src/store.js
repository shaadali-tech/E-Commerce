import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { wishlistReducer } from "./Features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
    wishlistReducer: wishlistReducer,
  },
});

export default store;
