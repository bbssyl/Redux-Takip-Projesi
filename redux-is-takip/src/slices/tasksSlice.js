import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  taskDetail: [],
};

export const tasksSlices = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action) => {
      state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index] = action.payload;
    },
  },
});

export const { setTasks, addTask, removeTask, updateTask } =
  tasksSlices.actions;
export default tasksSlices.reducer;
