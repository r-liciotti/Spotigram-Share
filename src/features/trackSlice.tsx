import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../interfaces/ITrack";

interface TrackState {
  track: Item;
  isValid: boolean;
}

const initialState: TrackState = {
  track: {} as Item,
  isValid: false,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setTrack(state, action: PayloadAction<Item>) {
      state.track = action.payload;
      state.isValid = true;
    },
    checkTrack(state) {
      state.isValid = true;
      if (state.track.name === "") {
        state.isValid = true;
      }
    },
  },
});

export const { setTrack, checkTrack } = trackSlice.actions;
export default trackSlice.reducer;
