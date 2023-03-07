import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  taskDetail: false,
  filterDatas: "",
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
    setTaskData: (state, action) => {
      state.taskDetail = action.payload;
    },
    resetTaskData: (state) => {
      state.taskDetail = false;
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
    sortData: (state, action) => {
      state.tasks.sort((a, b) => {
        if (a[action.payload] < b[action.payload]) {
          return -1;
        }
        if (a[action.payload] > b[action.payload]) {
          return +1;
        }
        return 0;
      });
    },
    filterTasks: (state, action) => {
      state.filterDatas = action.payload;
    },
  },
});

export const {
  setTasks,
  addTask,
  removeTask,
  updateTask,
  setTaskData,
  resetTaskData,
  sortData,
  filterTasks,
} = tasksSlices.actions;
export default tasksSlices.reducer;
