import React from "react";
import { FaPhone, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const TasksUserContent = ({ taskId }) => {
  const { employees } = useSelector((state) => state.employee);
  const data = employees?.filter((employee) => employee.id === taskId);
  return (
    <div className="flex flex-col gap-2">
      <div>
        <small className="flex gap-1 items-center">
          <FaUserCircle size={16} />
          {data[0]?.employeeFirstName} {data[0]?.employeeLastName}
        </small>
      </div>
      <div>
        <small className="flex gap-1 items-center">
          <FaPhone size={16} />
          {data[0]?.employeePhone}
        </small>
      </div>
    </div>
  );
};

export default TasksUserContent;
