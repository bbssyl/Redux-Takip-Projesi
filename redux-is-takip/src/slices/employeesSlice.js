import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employees: [],
  employeeDetail: [],
  employeeStatus: [],
};

export const employeesSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    addEmployee: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(
        (employee) => employee.id === action.payload.id
      );
      state.employees[index] = action.payload;
    },
    setSelectedData: (state, action) => {
      state.employeeDetail = action.payload;
    },
    resetSelectedData: (state) => {
      state.employeeDetail = false;
    },
    setEmployeeStatus: (state, action) => {
      state.employeeStatus = action.payload;
    },
  },
});

export const {
  addEmployee,
  removeEmployee,
  updateEmployee,
  setSelectedData,
  resetSelectedData,
  setEmployeeStatus,
  setEmployees,
} = employeesSlice.actions;
export default employeesSlice.reducer;
