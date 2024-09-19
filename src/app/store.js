import { configureStore } from "@reduxjs/toolkit";
import { songSlice } from "../services/songSlice";



export const store = configureStore({
  reducer: {
    songs: songSlice.reducer
  }
})