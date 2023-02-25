import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosClient from "../../app/config";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    try {
      const response = await axiosClient.get(`/products`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    try {
      const { name, description } = product;
      const response = await axiosClient.post(`/product/create`, {
        name,
        description,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default productSlice.reducer;
