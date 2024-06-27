import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tostifySuccess: false,
  tostifyWarring: false,
};
export const toastify = createSlice({
  name: "toastify",
  initialState,
  reducers: {
    addTostifySuccess: (state, action) => {
      state.tostifySuccess = true;
    },
  },
});
export const { addTostifySuccess } = toastify.actions;
export default toastify.reducer;
