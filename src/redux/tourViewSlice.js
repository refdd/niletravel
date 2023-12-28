import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const tourViewSlice = createSlice({
  name: "seeMore",
  initialState,
  reducers: {
    changeView: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeView } = tourViewSlice.actions;

export default tourViewSlice.reducer;
