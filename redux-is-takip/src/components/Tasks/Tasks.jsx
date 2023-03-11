import { useDispatch, useSelector } from "react-redux";
import TasksContent from "./TasksContent";
import { useState } from "react";
import { TaskModal } from "../modals/TaskModal";
import {
  setTaskData,
  resetTaskData,
  filterTasks,
} from "../../slices/tasksSlice";
import { deleteTaskFromFirebase } from "../../firebase/Config";

const Tasks = () => {
  const { tasks, taskDetail } = useSelector((state) => state.task);
  const { employees } = useSelector((state) => state.employee);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTaskDelete = async (id) => {
    if (window.confirm("Emin misiniz?")) {
      await deleteTaskFromFirebase(id);
    }
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

  return (
    <div className="h-screen p-4">
      <TaskModal
        handleModalClose={handleModalClose}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={taskDetail}
      />
      <h4 className="font-bold text-blue-400">Görevler</h4>
      <div className="flex justify-between items-center xs:flex-col">
        {employees.length > 0 ? (
          <button
            className="text-blue-600 bg-blue-200 p-2 my-2 rounded-lg px-4 ease-in-out hover:text-blue-200 hover:bg-blue-600 duration-500 xs:w-full"
            onClick={handleModalOpen}
          >
            Yeni Görev
          </button>
        ) : (
          <div className="text-yellow-700 bg-yellow-200 rounded-lg p-4 w-full mb-3">
            Yeni görev ekleyebilmek için lütfen öncelikle personel ekleyin!
          </div>
        )}
        {/* <button onClick={() => handleSortData("isDone")}>SIRALA</button> */}
        {tasks ? (
          <div className="flex items-center xs:flex-col">
            <label htmlFor="filterData" className=" text-sm p-2 text-blue-600">
              Ara:
            </label>
            <input
              type="text"
              id="filterData"
              onChange={handleFilterData}
              className="p-2 text-blue-400 outline-none border-b placeholder:italic placeholder:text-sm px-2 text-sm xs:w-full"
              placeholder="Arıza türüne göre"
            />
          </div>
        ) : (
          <div></div>
        )}
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
