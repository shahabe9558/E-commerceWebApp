import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer:{
    cart:CartSlice
  }
});





















// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './slices/counterSlice'
// export const store = configureStore({
//   reducer: {
//     counter: counterSlice
//   },
// })