import React from "react";
import TasksUserContent from "./TasksUserContent";

const TasksContent = ({ tasks, handleTaskDelete }) => {
  return tasks?.map((task) => (
    <div
      className="card"
      key={task.id}
      onClick={() => handleTaskDelete(task.id)}
    >
      <div className="card-body">
        <h4 className="card-title">{task.title}</h4>
        <p className="card-text">{task.info}</p>
        <div className="">
          <TasksUserContent taskId={task.employeeId} />
        </div>
      </div>
    </div>
  ));
};

export default TasksContent;
