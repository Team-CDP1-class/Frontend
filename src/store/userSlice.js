import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
