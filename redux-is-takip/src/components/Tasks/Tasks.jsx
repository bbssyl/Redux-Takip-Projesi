import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "../../slices/employeesSlice";
import { deleteTask, fetchTasks, removeTask } from "../../slices/tasksSlice";
import TasksContent from "./TasksContent";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleTaskDelete = (id) => {
    dispatch(removeTask(id));
    dispatch(deleteTask(id));
  };
  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchEmployees());
  }, [dispatch]);
  return (
    <div>
      <h4>Görevler</h4>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            className="card"
            key={task.id}
            onClick={() => handleTaskDelete(task.id)}
          >
            <div className="card-body">
              <h4 className="card-title">{task.title}</h4>
              <p className="card-text">{task.info}</p>
              <div className="">
                <TasksContent taskId={task.employeeId} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-success">Hiçbir görev bulunmamaktadır.</div>
      )}
    </div>
  );
};

export default Tasks;
