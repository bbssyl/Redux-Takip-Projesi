import { useSelector } from "react-redux";
import Card from "./Card";
import EmployesTopList from "../components/Employees/EmployeesTopList";
import TasksTopList from "./Tasks/TasksTopList";

const Dashboard = () => {
  const { employees } = useSelector((state) => state.employee);
  const { products } = useSelector((state) => state.product);
  const { tasks } = useSelector((state) => state.task);

  const taskIsDoneCount = () => {
    const count = tasks.reduce(
      (total, task) => (task.isDone ? total + 1 : total),
      0
    );
    return count;
  };

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
          count={tasks?.length > 0 ? tasks.length - taskIsDoneCount() : 0}
        />
        <Card
          title={"Bitirilen İş (Toplam)"}
          count={tasks.length > 0 ? taskIsDoneCount() : 0}
        />
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
