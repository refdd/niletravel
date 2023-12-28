"use client";
import { configureStore } from "@reduxjs/toolkit";
import seeMoreSlice from "./seeMoreSlice";
import tourViewSlice from "./tourViewSlice";

export const store = configureStore({
  reducer: {
    SeeMore: seeMoreSlice,
    tourView: tourViewSlice,
  },
});
