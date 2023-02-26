import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  url: "http://localhost:5000/tasks/",
  tasks: [],
  taskDetail: [],
};

export const tasksSlices = createSlice({
  name: "task",
  initialState,
  reducers: {
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    });
  },
});

export const { removeTask } = tasksSlices.actions;
export default tasksSlices.reducer;

export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  const response = await axios.get(initialState.url);
  return response.data;
});

export const deleteTask = createAsyncThunk("task/deleteTask", async (id) => {
  const response = await axios.delete(initialState.url + id);
  return response.data;
});
