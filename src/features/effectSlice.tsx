import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EffectState {
  effect: "Mesh" | "Fractal";
}

const initialState: EffectState = {
  effect: "Mesh",
};

const colorsSlice = createSlice({
  name: "effect",
  initialState,
  reducers: {
    setEffect(state, action: PayloadAction<"Mesh" | "Fractal">) {
      state.effect = action.payload;
    },
    clearEffect(state) {
      state.effect = "Mesh";
    },
  },
});

export const { setEffect, clearEffect } = colorsSlice.actions;
export default colorsSlice.reducer;
