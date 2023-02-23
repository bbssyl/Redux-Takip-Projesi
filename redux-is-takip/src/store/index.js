import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "../slices/employeesSlice";
import productsSlice from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    employee: employeesSlice,
    product: productsSlice,
  },
});
export default store;
