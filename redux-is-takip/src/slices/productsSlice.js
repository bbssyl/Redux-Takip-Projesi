import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  url: "http://localhost:5000/products/",
  products: [],
  productDetail: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    setProductSelectedData: (state, action) => {
      state.productDetail = action.payload;
    },
    resetProductSelectedData: (state, action) => {
      state.productDetail = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.products.push = action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          state.products.name = action.payload.name;
          state.products.type = action.payload.type;
          state.products.brand = action.payload.brand;
          state.products.model = action.payload.model;
          state.products.price = action.payload.price;
          state.products.info = action.payload.info;
          return product;
        } else {
          return product;
        }
      });
    });
  },
});

export const {
  addProduct,
  removeProduct,
  resetProductSelectedData,
  setProductSelectedData,
} = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "prodcut/fetchProducts",
  async () => {
    const response = await axios.get(initialState.url);
    return response.data;
  }
);

export const postProduct = createAsyncThunk(
  "product/postProduct",
  async (data) => {
    const response = await axios.post(initialState.url, data);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const response = await axios.delete(initialState.url + id);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data) => {
    const response = await axios.put(initialState.url + data.id);
    return response.data;
  }
);
