import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
  image: string;
}

const initialState: ImageState = {
  image: "",
};

const imageSlice = createSlice({
  name: "iamge",
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
