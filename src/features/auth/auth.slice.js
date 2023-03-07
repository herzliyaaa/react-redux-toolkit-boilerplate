import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosClient from "../../app/config";

const initialState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  try {
    const { username, password } = user;

    let response = await axiosClient.post(`/login`, {
      username,
      password,
    });

    let data = await response.data;

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: {},
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      state.error = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
      console.log(action);
    });
  },
});

export default authSlice.reducer;
