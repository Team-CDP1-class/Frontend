import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cardStoryReducer from "./cardStorySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    storyCard: cardStoryReducer,
  },
});
