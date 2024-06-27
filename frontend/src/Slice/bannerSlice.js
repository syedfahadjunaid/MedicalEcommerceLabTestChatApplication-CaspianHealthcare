import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  banner: [],
  loading:false
};
export const allBanner = createAsyncThunk("allBanner", async () => {
  const { data } = await axios.get(
    `${process.env.React_App_Base_Url + "Get-all-homepage"}`
  );
  return data;
});
export const banner = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: {
    [allBanner.pending]: (state, action) => {
        state.loading = true;
      },
       [allBanner.rejected]: (state, action) => {
        state.loading = false;
      },
    [allBanner.fulfilled]: (state, action) => {
      state.banner = action.payload;
      state.loading = false;
    },
  },
});
export default banner.reducer;
