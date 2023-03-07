import {
  addTask,
  removeTask,
  setTasks,
  updateTask,
} from "../../slices/tasksSlice";
import axios from "axios";
import {
  addEmployee,
  removeEmployee,
  setEmployees,
  setEmployeeStatus,
  updateEmployee,
} from "../../slices/employeesSlice";
import {
  addProduct,
  removeProduct,
  setProducts,
  updateProduct,
} from "../../slices/productsSlice";
const url = {
  taskUrl: "http://localhost:5000/tasks",
  employeeUrl: "http://localhost:5000/employees",
  productUrl: "http://localhost:5000/products",
  statusUrl: "http://localhost:5000/status",
};

export const fetchTasksFromDb = () => async (dispatch) => {
  const response = await axios.get(url.taskUrl);
  dispatch(setTasks(response.data));
};
export const deleteTaskFromDb = (id) => async (dispatch) => {
  const response = await axios.delete(`${url.taskUrl}/${id}`);
  console.log(response.request);
  dispatch(removeTask(response.data));
};

export const addTaskToDb = (data) => async (dispatch) => {
  const response = await axios.post(url.taskUrl, data);
  dispatch(addTask(response.data));
};

export const updateTaskFromDb = (data) => async (dispatch) => {
  const response = await axios.put(`${url.taskUrl}/${data.id}`, data);
  dispatch(updateTask(response.data));
};

export const fetchEmployeesFromDb = () => async (dispatch) => {
  const response = await axios.get(url.employeeUrl);
  dispatch(setEmployees(response.data));
};

export const deleteEmployeeFromDb = (id) => async (dispatch) => {
  const response = await axios.delete(`${url.employeeUrl}/${id}`);
  dispatch(removeEmployee(response.data));
};

export const addEmployeeToDb = (data) => async (dispatch) => {
  const response = await axios.post(url.employeeUrl, data);
  dispatch(addEmployee(response.data));
};

export const updateEmployeeFromDb = (data) => async (dispatch) => {
  const response = await axios.put(`${url.employeeUrl}/${data.id}`, data);
  dispatch(updateEmployee(response.data));
};

export const fetchStatusFromDb = () => async (dispatch) => {
  const response = await axios.get(url.statusUrl);
  dispatch(setEmployeeStatus(response.data));
};

export const fetchProductsFromDb = () => async (dispatch) => {
  const response = axios.get(url.productUrl);
  dispatch(setProducts(response.data));
};

export const addProductToDb = (data) => async (dispatch) => {
  const response = axios.post(url.productUrl, data);
  dispatch(addProduct(response.data));
};

export const updateProductFromDb = (data) => async (dispatch) => {
  const response = axios.put(`${url.productUrl}/${data.id}`);
  dispatch(updateProduct(response.data));
};

export const deleteProductFromDb = (id) => async (dispatch) => {
  const response = axios.delete(`${url.productUrl}/${id}`);
  dispatch(removeProduct(response.data));
};
