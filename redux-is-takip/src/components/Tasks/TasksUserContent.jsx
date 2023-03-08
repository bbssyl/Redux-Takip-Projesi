import React from "react";
import { useSelector } from "react-redux";

const TasksUserContent = ({ taskId }) => {
  const { employees } = useSelector((state) => state.employee);
  const data = employees?.filter((employee) => employee.employeeId === taskId);
  return (
    <>
      <div>
        <small>
          {data[0]?.employeeFirstName} {data[0]?.employeeLastName}
        </small>
      </div>
      <div>
        <small>{data[0]?.employeePhone}</small>
      </div>
      <div>
        <small className="italic text-gray-500">
          {data[0]?.employeeRating.length > 0
            ? data[0]?.employeeRating
            : "Personele girilen değerlendirme puanı bulunmamaktadır"}
        </small>
      </div>
    </>
  );
};

export default TasksUserContent;
