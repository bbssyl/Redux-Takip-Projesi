import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  employees: [],
  employeeDetail: [],
};

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const response = await axios.get("http://localhost:5000/employees");
    return response.data;
  }
);
export const postEmloyees = createAsyncThunk(
  "employee/postEmloyee",
  async (data) => {
    const response = await axios.post("http://localhost:5000/employees", data);
    return response.data;
  }
);
export const deleteEmployees = createAsyncThunk(
  "employee/deleteEmployees",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/employees/${id}`
    );
    return response.data;
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (data) => {
    const response = await axios.put(
      `http://localhost:5000/employees/${data.id}`,
      data
    );
    return response.data;
  }
);

export const employeesSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
    setSelectedData: (state, action) => {
      state.employeeDetail = action.payload;
    },
    resetSelectedData: (state, action) => {
      state.employeeDetail = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
    builder.addCase(postEmloyees.fulfilled, (state, action) => {
      state.employees.push(action.payload);
    });
    builder.addCase(deleteEmployees.fulfilled, (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload.id
      );
    });
    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      // state.employees = state.employees.filter(
      //   (employee) => employee.id === action.payload.id
      // );
      state.employees.map((employee) => {
        if (employee.id === action.payload.id) {
          employee.employeeId = action.payload.employeeId;
          employee.employeeFirstName = action.payload.employeeFirstName;
          employee.employeeLastName = action.payload.employeeLastName;
          employee.employeeGender = action.payload.employeeGender;
          employee.employeeAge = action.payload.employeeAge;
          employee.employeePhone = action.payload.employeePhone;
          employee.employeeEmail = action.payload.employeeEmail;
          employee.employeePassword = action.payload.employeePassword;
          employee.employeeAddress = action.payload.employeeAddress;
          employee.employeeStatus = action.payload.employeeStatus;
          employee.employeeRating = action.payload.employeeRating;
          return employee;
        } else {
          return employee;
        }
      });
    });
  },
});

export const {
  addEmployee,
  deleteEmployee,
  setSelectedData,
  resetSelectedData,
} = employeesSlice.actions;
export default employeesSlice.reducer;
