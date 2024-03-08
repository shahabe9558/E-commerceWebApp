import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : false
}
export const LoginSlice = createSlice({
  name : "login", 
  initialState ,
  reducers: {
    setisLogIn: (state, action) => {
        state.value = action.payload;
    }
}
});
export const {setisLogIn} = LoginSlice.actions;
export default LoginSlice.reducer;