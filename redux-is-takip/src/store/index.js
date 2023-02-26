import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "../slices/employeesSlice";
import productsSlice from "../slices/productsSlice";
import tasksSlice from "../slices/tasksSlice";

const store = configureStore({
  reducer: {
    employee: employeesSlice,
    product: productsSlice,
    task: tasksSlice,
  },
});
export default store;
