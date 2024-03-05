import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name : "isLogin",
    initialState :  false,
    reducers : {
       setisLogin : (state, action) =>{
        state = action.payload;
       }
    }
})
export const {setisLogin} =loginSlice.actions;
export default loginSlice.reducer;