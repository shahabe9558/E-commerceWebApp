import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/loginSlice";
import cartSlice from "./slices/cartSlice";





export const store = configureStore({
  reducer:{
    cart : cartSlice,
    login : LoginSlice 
  }
});





















// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './slices/counterSlice'
// export const store = configureStore({
//   reducer: {
//     counter: counterSlice
//   },
// })