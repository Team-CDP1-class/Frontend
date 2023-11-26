import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  analysisStoryCard,
  analysisTreatment,
  deleteStoryCard,
  editStoryCard,
  getStoryCard,
  postStoryCard,
} from "./thunkFunction";
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
      })
      .addCase(deleteStoryCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStoryCard.fulfilled, (state) => {
        state.isLoading = false;
        toast.info("post card 삭제 성공");
      })
      .addCase(deleteStoryCard.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("세션이 만료되었습니다");
        state.isAuth = false;
        localStorage.removeItem("accessToken");
      })
      .addCase(editStoryCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editStoryCard.fulfilled, (state) => {
        state.isLoading = false;
        toast.info("post card 수정 성공");
      })
      .addCase(editStoryCard.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("세션이 만료되었습니다");
        state.isAuth = false;
        localStorage.removeItem("accessToken");
      })
      .addCase(analysisStoryCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(analysisStoryCard.fulfilled, (state) => {
        state.isLoading = false;
        toast.info("post card 분석성공");
      })
      .addCase(analysisStoryCard.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("분석 실패");
        state.isAuth = false;
        localStorage.removeItem("accessToken");
      })
      .addCase(analysisTreatment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(analysisTreatment.fulfilled, (state) => {
        state.isLoading = false;
        toast.info("treatment 분석성공");
      })
      .addCase(analysisTreatment.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("분석 실패");
        state.isAuth = false;
        localStorage.removeItem("accessToken");
      });
  },
});

export default cardStorySlice.reducer;
