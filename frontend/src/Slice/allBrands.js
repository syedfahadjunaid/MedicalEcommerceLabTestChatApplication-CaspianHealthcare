import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  allbrands: [],
  loading:false
};
export const allBrand = createAsyncThunk("allBrand", async () => {
  const { data } = await axios.get(
    `${process.env.React_App_Base_Url + "brands"}`
  );
  return data;
});
export const brand = createSlice({
  name: "Brand",
  initialState,
  reducers: {},
  extraReducers: {
    [allBrand.pending]: (state, action) => {
        state.loading = true;
      },
       [allBrand.rejected]: (state, action) => {
        state.loading = false;
      },
    [allBrand.fulfilled]: (state, action) => {
      state.allbrands = action.payload;
      state.loading = false;
    },
  },
});
export default brand.reducer;
