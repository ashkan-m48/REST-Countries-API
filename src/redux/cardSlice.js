import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk("fetchCountries", async () => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,languages,tld,cca3,borders"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const cardSlice = createSlice({
  name: "card",
  initialState: { data: [], searchText: "", filterText: "" },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSearchText, setFilterText } = cardSlice.actions;

export default cardSlice.reducer;
