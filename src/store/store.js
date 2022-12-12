import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import OffCanvasReducer from "./OffSlice";
// const reducer = () =>
//   combineReducers({
//     cart: cartSlice.reducer,
//     OffSlice: OffSlice.reducer,
//   });

const store = configureStore({
  reducer: {
    cart: cartReducer,
    OffSlice: OffCanvasReducer,
  },
});
export default store;
