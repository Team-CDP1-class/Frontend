import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    email: "",
    nickname: "",
    name: "",
    birth: "",
  }, //user entity
  isAuth: false, //user is authenticated
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
