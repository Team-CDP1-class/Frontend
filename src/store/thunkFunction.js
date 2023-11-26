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
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});

export const deleteStoryCard = createAsyncThunk("storyCard/deleteStoryCard", async (storyCardId, thunkAPI) => {
  try {
    const response = await axiosInstance.delete(`api/storycard/${storyCardId}`);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});

export const editStoryCard = createAsyncThunk("storyCard/editStoryCard", async (storyCardId, body, thunkAPI) => {
  try {
    const response = await axiosInstance.patch(`api/storycard/${storyCardId}`, body);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});

export const analysisStoryCard = createAsyncThunk("storyCard/analysisStoryCard", async (storyCardId, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`api/storycard/${storyCardId}`);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});

export const analysisTreatment = createAsyncThunk("storyCard/analysisTreatment", async (body, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`api/storyTreatment`, body);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data || error.message);
  }
});
