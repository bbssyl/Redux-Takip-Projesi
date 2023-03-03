import React from "react";
import TasksUserContent from "./TasksUserContent";

const TasksContent = ({ tasks, handleTaskDelete }) => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {tasks?.map((task) => (
        <div
          className="shadow-md m-2 bg-white rounded-xl"
          key={task.id}
          onClick={() => handleTaskDelete(task.id)}
        >
          <div className="p-4">
            <h4 className="text-blue-500 font-semibold">{task.title}</h4>
            <p className="text-blue-500">{task.info}</p>
            <div>
              <TasksUserContent taskId={task.employeeId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksContent;
