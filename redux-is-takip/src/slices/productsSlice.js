import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  productDetail: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index] = action.payload;
    },
    setProductSelectedData: (state, action) => {
      state.productDetail = action.payload;
    },
    resetProductSelectedData: (state, action) => {
      state.productDetail = [];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  resetProductSelectedData,
  setProductSelectedData,
  setProducts,
  updateProduct,
} = productSlice.actions;
export default productSlice.reducer;
