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
  },
});

export const { setTasks } = tasksSlices.actions;
export default tasksSlices.reducer;
