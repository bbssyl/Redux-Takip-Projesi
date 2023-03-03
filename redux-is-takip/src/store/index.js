import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import employeesSlice from "../slices/employeesSlice";
import modalSlice from "../slices/modalSlice";
import productsSlice from "../slices/productsSlice";
import tasksSlice from "../slices/tasksSlice";

const store = configureStore({
  reducer: {
    employee: employeesSlice,
    product: productsSlice,
    task: tasksSlice,
    auth: authSlice,
    modal: modalSlice,
  },
});
export default store;
