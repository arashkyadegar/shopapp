import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Part 2
export const searchFormSlice = createSlice({
  name: "searchForm",
  initialState: {
    data: {
      priceMin: 0,
      priceMax: 0,
      brands: [],
      formIsValid: false
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    searchFormCleared: (state: any) => {
      state.data = {
        priceMin: 0,
        priceMax: 0,
        brands: [],
        formIsValid: false,
      };
      state.isLoading = false;
      state.lastFetch = "";
    },
    searchFormRequested: (state: any, action: PayloadAction<any>) => {
      state.isLoading = true;
    },
    searchFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
    },
    searchFormFilled: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = "";
    }

  },
});

// action creator
export const {
  searchFormRequested,
  searchFormLoadingStoped,
  searchFormCleared,
  searchFormFilled
} = searchFormSlice.actions;
export default searchFormSlice.reducer;
