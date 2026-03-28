import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      // check if item already exists
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // increase quantity
        existingItem.quantity += 1;
      } else {
        // add new item
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },
    removefromcart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
  },
});

// export action
export const { addToCart, removefromcart, increaseQuantity } =
  cartSlice.actions;

// export reducer
export default cartSlice.reducer;
