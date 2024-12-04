import { createSlice } from "@reduxjs/toolkit";

interface GridState {
  collapse: boolean;
}

const initialState: GridState = {
  collapse: false,
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    toggleCollapse(state) {
      state.collapse = !state.collapse;
    },
  },
});

export const { toggleCollapse } = gridSlice.actions;
export default gridSlice.reducer;
