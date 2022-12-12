import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartMenu: false,
};

export const OffSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    ToggleMenu: (state, actions) => {
      state.cartMenu = !state.cartMenu;
    },
  },
});

export const actions = OffSlice.actions;
export default OffSlice.reducer;
