import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 20,
};

export const seeMoreSlice = createSlice({
  name: "seeMoreItem",
  initialState,
  reducers: {
    SeeMoreItem: (state) => {
      state.value = state.value + 6;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SeeMoreItem } = seeMoreSlice.actions;

export default seeMoreSlice.reducer;
