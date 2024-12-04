import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MeshState {
  mesh: number;
  overlayBgColor: string;
  backgroundOpacity: number;
  grainEffect: boolean;
}

const initialState: MeshState = {
  mesh: 0,
  overlayBgColor: "#000000b3",
  backgroundOpacity: 0,
  grainEffect: true,
};

const meshSlice = createSlice({
  name: "mesh",
  initialState,
  reducers: {
    rigeneraMesh(state) {
      state.mesh = state.mesh + 1;
    },
    setOverlayBgColor(state, action: PayloadAction<string>) {
      state.overlayBgColor = action.payload;
    },
    setBackgroundOpacity(state, action: PayloadAction<number>) {
      state.backgroundOpacity = action.payload;
    },
    setGrainEffect(state, action: PayloadAction<boolean>) {
      state.grainEffect = action.payload;
    },
  },
});

export const {
  rigeneraMesh,
  setOverlayBgColor,
  setBackgroundOpacity,
  setGrainEffect,
} = meshSlice.actions;
export default meshSlice.reducer;
