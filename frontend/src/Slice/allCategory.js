import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  categoryData: [],
  loading:false
};
export const allCategory = createAsyncThunk("allCategory", async () => {
  const { data } = await axios.get(
    `${process.env.React_App_Base_Url + "categories"}`
    
  );
  console.log(data,'category')
  return data;
});
export const category = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: {
    [allCategory.pending]: (state, action) => {
        state.loading = true;
      },
       [allCategory.rejected]: (state, action) => {
        state.loading = false;
      },
    [allCategory.fulfilled]: (state, action) => {
      state.categoryData = action.payload;
      state.loading = false;
    },
  },
});
export default category.reducer;
