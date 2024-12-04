import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FractalState {
  numberPices: number;
}

const initialState: FractalState = {
  numberPices: 10,
};

const fractalSlice = createSlice({
  name: "fractal",
  initialState,
  reducers: {
    setFractalPieces(state, action: PayloadAction<number>) {
      state.numberPices = action.payload;
    },
  },
});

export const { setFractalPieces } = fractalSlice.actions;
export default fractalSlice.reducer;
