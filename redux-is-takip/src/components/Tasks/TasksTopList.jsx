import React from "react";
import { useSelector } from "react-redux";

const JobsTopList = () => {
  const { tasks } = useSelector((state) => state.task);
  return (
    <div className="shadow-sm shadow-gray-400 rounded-lg p-2">
      <div className="text-blue-500 p-4 ">Son 5 Görev</div>
      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row">
            <div className="table-cell font-bold">Konu</div>
            <div className="table-cell font-bold text-center">
              Oluşturma Tar.
            </div>
            <div className="table-cell font-bold text-center">Aciliyet</div>
          </div>
        </div>
        <div className="table-row-group">
          {tasks?.map((task) => {
            return (
              <div className="table-row" key={task.id}>
                <div className="table-cell" title={task.name}>
                  {task.info}
                </div>
                <div className="table-cell text-center">{task.created_at}</div>
                {task.urgency === "Normal" ? (
                  <div className="table-cell text-center text-green-700">
                    {task.urgency}
                  </div>
                ) : (
                  <div className="table-cell text-center text-red-700">
                    {task.urgency}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobsTopList;
