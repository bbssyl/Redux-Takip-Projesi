import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  productDetail: false,
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
    setProductData: (state, action) => {
      state.productDetail = action.payload;
    },
    resetProductData: (state, action) => {
      state.productDetail = false;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  resetProductData,
  setProductData,
  setProducts,
  updateProduct,
} = productSlice.actions;
export default productSlice.reducer;
