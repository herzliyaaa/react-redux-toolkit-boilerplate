import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProductsApi } from "./product.api";
import axios from "axios";
const initialState = [
  {
    id: 1,
    name: "Product X",
    description: "LOL",
  },
  {
    id: 2,
    name: "Product Y",
    description: "LOL",
  },
  {
    id: 3,
    name: "Product Z",
    description: "LOL",
  },
];

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:4040/api/products");
      console.log(response.data);
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
      state.product.push(action.payload);
    },
  },
});

export const fetchProducts = (state) => state.product.product;

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
