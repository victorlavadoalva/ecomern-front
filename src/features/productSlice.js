import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (_, action) => {
      return action.payload;
    },
  },
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
