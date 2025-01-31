import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../APIResponseTypes/Product";

interface ProductState {
  data: Product | null;
  loading: boolean;
  error: string | null;
}

export const fetchProductData = createAsyncThunk(
  "product/fetchProductData",
  async () => {
    const response = await fetch(
      "stackline_frontend_assessment_data_2021.json"
    );
    const data = await response.json();
    return data[0];
  }
);

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load product";
      });
  },
});

export default productSlice.reducer;
