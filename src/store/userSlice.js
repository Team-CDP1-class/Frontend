import { createSlice } from "@reduxjs/toolkit";
import { authUser, getStoryCard, loginUser, logoutUser, registerUser } from "./thunkFunction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  userData: {
    email: "",
    nickname: "",
    name: "",
    birth: "",
  },
  isAuth: false, //user is authenticated
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        toast.info("회원가입 성공함");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error("이미있는 이메일 입니다.");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;

        state.userData = action.payload;
        toast.info("로그인 성공함");
        state.isAuth = true;
        // console.log(action.payload.result["access_token"]);
        localStorage.setItem("accessToken", action.payload.result["access_token"]);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error("login failed");
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = initialState.userData;
        toast.info("로그아웃 성공함");
        state.isAuth = false;
        localStorage.removeItem("accessToken");
      })
      .addCase(logoutUser.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.payload;
        // toast.error(action.payload);
        state.isLoading = false;
        state.userData = initialState.userData;
        toast.info("로그아웃 성공함");
        state.isAuth = false;
        localStorage.removeItem("accessToken");
      })
      .addCase(authUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.isAuth = true;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuth = false;
        localStorage.removeItem("accessToken");
      });
  },
});

export default userSlice.reducer;
