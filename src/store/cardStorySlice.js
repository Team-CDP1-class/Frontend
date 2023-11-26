import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getStoryCard, postStoryCard } from "./thunkFunction";
const initialState = {
  storyCardData: {
    storycardname: "",
    premise: "",
    setting: "",
    characters: "",
    outline: "",
  },
  isLoading: false,
  error: "",
};

const cardStorySlice = createSlice({
  name: "storycard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postStoryCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postStoryCard.fulfilled, (state) => {
        state.isLoading = false;
        toast.info("해석 성공");
      })
      .addCase(postStoryCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(getStoryCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStoryCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.storyCardData = action.payload.result;
        toast.info("post card 가져오기 성공");
      })
      .addCase(getStoryCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export default cardStorySlice.reducer;
