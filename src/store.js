import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
  },
});

export default store;
