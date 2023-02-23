import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/product/product.slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
