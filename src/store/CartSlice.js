import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const { productId, productImage, productPrice, productTitle } =
        actions.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      if (!existingItem) {
        state.cart++;
        state.items.push({
          productId,
          productImage,
          productPrice,
          totalPrice: productPrice,
          productTitle,
          quantity: 1,
        });
      } else {
        state.cart++;
        existingItem.totalPrice = existingItem.totalPrice + productPrice;
        existingItem.quantity++;
      }
    },
    removeFromCart: (state, actions) => {
      const productId = actions.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );
      state.cart -= 1;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      } else {
        existingItem.totalPrice =
          existingItem.totalPrice - existingItem.productPrice;
        existingItem.quantity -= 1;
      }
    },
  },
});

export const actions = cartSlice.actions;
export default cartSlice.reducer;
