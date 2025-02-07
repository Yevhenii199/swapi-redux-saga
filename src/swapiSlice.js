import { createSlice } from "@reduxjs/toolkit";

const swapiSlice = createSlice({
  name: "swapi",
  initialState: { data: null, loading: false, error: null },
  reducers: {
    fetchSwapiRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    fetchSwapiSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchSwapiFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
});

export const { fetchSwapiRequest, fetchSwapiSuccess, fetchSwapiFailure, clearData } =
  swapiSlice.actions;

export default swapiSlice.reducer;
