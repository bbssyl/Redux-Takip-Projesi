import { setTasks } from "../../slices/tasksSlice";
import axios from "axios";

export const deleteTask = (id) => async (dispatch) => {
  const response = await axios.delete("http://localhost:5000/tasks/" + id);
  dispatch(setTasks(response.data));
};

export const fetchTasks = () => async (dispatch) => {
  const response = await axios.get("http://localhost:5000/tasks");
  dispatch(setTasks(response.data));
};
