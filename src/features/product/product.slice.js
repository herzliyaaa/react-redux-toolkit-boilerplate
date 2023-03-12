import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosClient from "../../app/config";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: null,
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (thunkAPI) => {
    try {
      const response = await axiosClient.get(`/products`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product, thunkAPI) => {
    try {
      const { name, description } = product;
      const response = await axiosClient.post(`/product/create`, {
        name,
        description,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.isError = false;
    });
    builder.addCase(addProduct.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data.unshift(action.payload.product);
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    });
  },
});

export const { clearState } = productSlice.actions;
export default productSlice.reducer;
