import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../slices/employeesSlice";
import TasksContent from "./TasksContent";
import bgTask from "../../images/jobs.png";
import { deleteTask, fetchTasks } from "../api/api";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  const handleTaskDelete = (id) => {
    dispatch(deleteTask(id));
  };
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div
      className="vh-100"
      style={{
        background: `url(${bgTask})`,
        backgroundSize: "600px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
    >
      <h4>Görevler</h4>
      {tasks?.length > 0 ? (
        <TasksContent tasks={tasks} handleTaskDelete={handleTaskDelete} />
      ) : (
        <div className="alert alert-success">Hiçbir görev bulunmamaktadır.</div>
      )}
    </div>
  );
};

export default Tasks;
