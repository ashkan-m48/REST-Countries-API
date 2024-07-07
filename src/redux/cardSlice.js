import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: { contries: [] },
  reducers: {
    addCountries: (state, action) => {
      state.contries.push(action.payload);
    },
  },
});

console.log(cardSlice);

export const { addCountries } = cardSlice.actions;

export default cardSlice.reducer;
