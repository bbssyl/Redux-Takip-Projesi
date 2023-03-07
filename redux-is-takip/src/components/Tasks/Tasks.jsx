import { useDispatch, useSelector } from "react-redux";
import TasksContent from "./TasksContent";
import {
  deleteTaskFromDb,
  fetchEmployeesFromDb,
  fetchTasksFromDb,
} from "../api/api";
import { useEffect, useState } from "react";
import { TaskModal } from "../modals/TaskModal";
import {
  setTaskData,
  resetTaskData,
  filterTasks,
} from "../../slices/tasksSlice";

const Tasks = () => {
  const { tasks, taskDetail } = useSelector((state) => state.task);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTaskDelete = (id) => {
    if (window.confirm("Emin misiniz?")) {
      dispatch(deleteTaskFromDb(id));
    }
    console.log(id);
  };

  const handleModalOpen = (selectedData) => {
    if (selectedData.id) {
      dispatch(setTaskData(selectedData));
    }
    setIsOpen(true);
  };
  const handleModalClose = () => {
    dispatch(resetTaskData());
    setIsOpen(false);
  };

  // const handleSortData = (sortKey) => {
  //   dispatch(sortData(sortKey));
  // };

  const handleFilterData = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchTasksFromDb());
    dispatch(fetchEmployeesFromDb());
  }, [dispatch]);
  return (
    <div className="h-screen p-4">
      <TaskModal
        handleModalClose={handleModalClose}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={taskDetail}
      />
      <h4 className="font-bold text-blue-400">Görevler</h4>
      <div className="flex justify-between items-center">
        <button
          className="text-blue-600 bg-blue-200 p-2 my-2 rounded-lg   ease-in-out hover:text-blue-200 hover:bg-blue-600 duration-500"
          onClick={handleModalOpen}
        >
          Yeni Görev Ekle
        </button>
        {/* <button onClick={() => handleSortData("isDone")}>SIRALA</button> */}
        <div className="flex items-center">
          <label
            htmlFor="filterData"
            className=" text-sm border rounded-l-lg p-2 bg-blue-100 text-blue-600"
          >
            Ara:
          </label>
          <input
            type="text"
            id="filterData"
            onChange={handleFilterData}
            className="p-2 text-blue-400 outline-blue-400 border rounded-r-lg placeholder:italic placeholder:text-sm px-2 text-sm"
            placeholder="Arıza türüne göre"
          />
        </div>
      </div>
      {tasks?.length > 0 ? (
        <TasksContent
          tasks={tasks}
          handleTaskDelete={handleTaskDelete}
          handleModalOpen={handleModalOpen}
        />
      ) : (
        <div className="text-green-700 bg-green-200 rounded-lg p-4">
          Hiçbir görev bulunmamaktadır.
        </div>
      )}
    </div>
  );
};

export default Tasks;
