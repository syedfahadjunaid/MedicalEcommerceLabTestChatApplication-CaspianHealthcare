import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: [],
  userLogin: false,
};

export const userLogin = createSlice({
    name: "userLogin",
    initialState,
    reducers: {
      addUserLogin: (state, action) => {
        state.userToken = action.payload;
        state.userLogin=true;
       
      },
      userLogout: (state) => {
        state.userToken = [];
     
        state.userLogin = false;
      },
    },
  });

  export const { addUserLogin,userLogout } = userLogin.actions;
  export default userLogin.reducer;
  