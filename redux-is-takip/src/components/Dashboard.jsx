import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import EmployesTopList from "../components/Employees/EmployeesTopList";
import TasksTopList from "./Tasks/TasksTopList";
import { useEffect } from "react";
import { fetchEmployees } from "../slices/employeesSlice";
import { fetchProducts } from "../slices/productsSlice";
import { fetchTasks } from "./api/api";

const Dashboard = () => {
  const employees = useSelector((state) => state.employee.employees);
  const products = useSelector((state) => state.product.products);
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchProducts());
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div className="px-4">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 md:mx-auto sm:grid-cols-1 gap-4 mb-3">
        <Card
          title={"Personel (Toplam)"}
          count={employees?.length > 0 ? employees.length : 0}
          icon={""}
        />
        <Card
          title={"Ürünler (Toplam)"}
          count={products?.length > 0 ? products.length : 0}
        />
        <Card
          title={"Bekleyen İş"}
          count={tasks?.length > 0 ? tasks.length : 0}
        />
        <Card title={"Bitirilen İş (Toplam)"} count={""} />
      </div>
      <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-2">
        <div className="w-full rounded-lg">
          <EmployesTopList />
        </div>
        <div className="w-full rounded-lg">
          <TasksTopList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
