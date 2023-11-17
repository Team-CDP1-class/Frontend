import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";
// const headers = {
//   "Content-type": "application/json",
//   Accept: "*/*",
//   Authorization: "",
//   origin: "http://127.0.0.1:3000",
// };
export const registerUser = createAsyncThunk("user/registerUser", async (body, thunkAPI) => {
  try {
    console.log(body);
    const response = await axiosInstance.post(`api/users`, body);
    //const response = await axiosInstance.post(`users/register`, body);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});

export const loginUser = createAsyncThunk("user/loginUser", async (body, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`api/users/login`, body);
    //const response = await axiosInstance.post(`users/login`, body);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});

export const logoutUser = createAsyncThunk("user/logoutUser", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`/users/logout`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});
export const authUser = createAsyncThunk("user/authUser", async (_, thunkAPI) => {
  // try {
  //   const response = await axiosInstance.get(`/users/auth`);
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  //   return thunkAPI.rejectWithValue(error.response.data || error.message);
  // }
  console.log(localStorage.getItem("accessToken"));
  // if (localStorage.getItem("accessToken")) {
  //   state.isAuth = true;
  // } else {
  //   state.isAuth = false;
  // }
});
export const postStoryCard = createAsyncThunk("storyCard/postStoryCard", async (body, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`api/storycard`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});

export const getStoryCard = createAsyncThunk("storyCard/getStoryCard", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`api/storycard`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});
