import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../../slices/employeesSlice";
import { deleteTask, fetchTasks, removeTask } from "../../slices/tasksSlice";
import TasksContent from "./TasksContent";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleTaskDelete = (id) => {
    dispatch(deleteTask(id));
    dispatch(removeTask(id));
  };
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchEmployees());
  }, [dispatch]);
  return (
    <div>
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
