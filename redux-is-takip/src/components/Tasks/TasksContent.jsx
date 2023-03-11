import {
  AiFillBell,
  AiFillCalendar,
  AiFillDelete,
  AiFillEdit,
} from "react-icons/ai";
import { MdSubject } from "react-icons/md";
import TasksUserContent from "./TasksUserContent";
import moment from "moment";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { AiOutlineClockCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { FaStar } from "react-icons/fa";
const TasksContent = ({ tasks, handleTaskDelete, handleModalOpen }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const { filterDatas } = useSelector((state) => state.task);
  const filterInput = filterDatas.trim().toLowerCase();

  const filterData = tasks.filter((task) =>
    task.name?.toLowerCase().includes(filterInput)
  );

  return (
    <motion.div
      className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {filterData?.map((task) => (
        <motion.div
          className="p-4 flex flex-col justify-between shadow-md m-2 bg-white rounded-xl gap-2"
          variants={item}
          key={task.id}
        >
          <div className="text-blue-500 font-semibold flex justify-between">
            {task.isDone ? (
              <small className="text-green-700 bg-green-200 rounded-lg px-2 font-light flex gap-2 items-center">
                <AiOutlineCheckCircle />
                Tamamlandı
              </small>
            ) : (
              <small className="text-yellow-700 bg-yellow-200 rounded-lg px-2 font-light flex gap-2 items-center">
                <AiOutlineClockCircle />
                Bekliyor
              </small>
            )}
            <div>
              <button
                onClick={() => handleModalOpen(task)}
                className="text-sm text-gray-400 hover:bg-gray-500 hover:text-gray-50 p-1 rounded-full ease-in-out duration-500"
              >
                <AiFillEdit />
              </button>

              <button
                onClick={() => handleTaskDelete(task.id)}
                className="text-sm text-red-400 hover:bg-red-500 hover:text-red-50 p-1 rounded-full ease-in-out duration-500"
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div>
              <p className="text-blue-500">{task.info}</p>
              <small className="flex gap-1 items-center">
                <MdLocationPin className="text-red-600" size={20} />
                {task.address ? task.address : "Adres belirtilmemiş"}
              </small>
              <div>
                <TasksUserContent taskId={task.employeeId} />
              </div>
            </div>
            <div>
              {task.employeeRate?.length > 0 ? (
                <>
                  <small className="text-indigo-600 p-6 w-full italic flex flex-col items-center justify-center rounded-full ">
                    <FaStar className="text-yellow-400" size={16} />
                    {task.employeeRate} yıldız
                  </small>
                </>
              ) : (
                <>
                  <small className="text-indigo-600 p-2 w-full italic flex flex-col items-center justify-center">
                    <FaStar className="text-gray-400" size={16} />
                    Değerlendirme yok
                  </small>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 gap-2 xs:flex-col">
            <small className="text-gray-600 bg-gray-200 rounded-lg p-2 w-full italic flex flex-col items-center justify-center">
              <AiFillCalendar />
              {moment(task.created_at).format("DD.MM.YYYY")}
            </small>
            {task.urgency === "Acil" ? (
              <small className="text-red-600 bg-red-200 rounded-lg p-2 w-full italic flex flex-col items-center justify-center">
                <AiFillBell />
                {task.urgency}
              </small>
            ) : (
              <small className="text-blue-600 bg-blue-200 rounded-lg p-2 w-full italic flex flex-col items-center justify-center">
                <AiFillBell />
                {task.urgency}
              </small>
            )}

            <small className="text-indigo-600 bg-indigo-200 rounded-lg p-2 w-full italic flex flex-col items-center justify-center">
              <MdSubject />
              {task.name}
            </small>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TasksContent;
