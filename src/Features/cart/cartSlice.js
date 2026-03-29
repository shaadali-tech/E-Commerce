import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const orderInitialState = {
  orders: [],
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
    clearCart: (state) => {
      state.items = [];
    },
  },
});

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;

      const exists = state.items.find((item) => item.id === product.id);
      if (!exists) {
        state.items.push(product);
      }
    },
    removefromWishlist: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

const placeorder = createSlice({
  name: "placeorder",
  initialState: orderInitialState,
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push({
        id: Date.now(),
        items: action.payload.items,
        total: action.payload.total,
        address: action.payload.address,
        date: new Date().toLocaleString(),
      });
    },
  },
});

// export action
export const { addToCart, removefromcart, increaseQuantity, clearCart } =
  cartSlice.actions;

// export reducer
export default cartSlice.reducer;
export const { addToWishlist, removefromWishlist } = WishlistSlice.actions;
export const wishlistReducer = WishlistSlice.reducer;
export const { placeOrder } = placeorder.actions;
export const placeOrderReducer = placeorder.reducer;
