import { useDispatch, useSelector } from "react-redux";
import TasksContent from "./TasksContent";
import bgTask from "../../images/jobs.png";
import { deleteTask, fetchTasks } from "../api/api";
import { useEffect, useState } from "react";
import { TaskModal } from "../modals/TaskModal";
import { fetchEmployees } from "../../slices/employeesSlice";

const Tasks = () => {
  const { tasks } = useSelector((state) => state.task);
  const { employees } = useSelector((state) => state.employee);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTaskDelete = (id) => {
    if (window.confirm("Emin misiniz?")) {
      dispatch(deleteTask(id));
    }
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchEmployees());
  }, [dispatch]);
  return (
    <div
      className="h-screen"
      style={{
        background: `url(${bgTask})`,
        backgroundSize: "600px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
    >
      <TaskModal
        handleModalClose={handleModalClose}
        isOpen={isOpen}
        employees={employees}
      />
      <h4 className="font-bold text-blue-400">Görevler</h4>
      <button
        className="text-blue-600 bg-blue-200 p-2 my-2 rounded-lg   ease-in-out hover:text-blue-200 hover:bg-blue-600 duration-500"
        onClick={handleModalOpen}
      >
        Yeni Görev Ekle
      </button>
      {tasks?.length > 0 ? (
        <TasksContent tasks={tasks} handleTaskDelete={handleTaskDelete} />
      ) : (
        <div className="text-green-700 bg-green-200 rounded-lg p-4">
          Hiçbir görev bulunmamaktadır.
        </div>
      )}
    </div>
  );
};

export default Tasks;
