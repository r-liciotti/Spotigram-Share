import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorsState {
  colors: string[];
}

const initialState: ColorsState = {
  colors: [],
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setColors(state, action: PayloadAction<string[]>) {
      state.colors = action.payload;
    },
    clearColors(state) {
      state.colors = [];
    },
  },
});

export const { setColors, clearColors } = colorsSlice.actions;
export default colorsSlice.reducer;
