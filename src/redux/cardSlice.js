import { createSlice } from "@reduxjs/toolkit";

let initialState = { countries: [] };

async function recieveData() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
  );
  const obj = res.json();
  return obj;
}

const cardSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    addCountries: (state, action) => {
      state.countries.push(action.payload);
    },
  },
});

export const { addCountries } = cardSlice.actions;

export default cardSlice.reducer;
