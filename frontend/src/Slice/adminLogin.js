import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  login: [],
  adminLogin: false,
};
export const adminLogin = createSlice({
    name: "adminLogin",
    initialState,
    reducers: {
      addLogin: (state, action) => {
        state.login = action.payload;
        state.adminLogin=true;
        localStorage.setItem("admin", JSON.stringify(action.payload));
      },
      adminLogout: (state) => {
        state.login = [];
        localStorage.removeItem("admin");
        state.adminLogin = false;
      },
    },
  });
  export const { addLogin,adminLogout } = adminLogin.actions;
  export default adminLogin.reducer;
  