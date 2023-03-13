import React from "react";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillMail,
  AiFillPhone,
  AiFillStar,
} from "react-icons/ai";

const EmployeesContent = ({ employees, handleOpenModal, handleDelete }) => {
  return (
    <div className="grid grid-cols-4 p-2">
      {employees?.map((employee) => {
        return (
          <div className="p-4 rounded-lg shadow-md" key={employee.id}>
            <div className="p-2 flex justify-end gap-1">
              <button
                className="text-sm text-gray-400 hover:bg-gray-500 hover:text-gray-50 p-1 rounded-full ease-in-out duration-500"
                onClick={() => {
                  handleOpenModal(employee);
                }}
              >
                <AiFillEdit />
              </button>
              <button
                className="text-sm text-red-400 hover:bg-red-500 hover:text-red-50 p-1 rounded-full ease-in-out duration-500"
                onClick={() => handleDelete(employee.id)}
              >
                <AiFillDelete />
              </button>
            </div>
            <div className="flex gap-2 items-center mb-3">
              <div className="border rounded-full p-2">
                <img
                  src=""
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="text-blue-500 flex flex-col">
                  <span>
                    {employee.employeeFirstName} {employee.employeeLastName}
                  </span>
                  <small className="text-gray-400 italic">
                    {employee.employeeStatus}
                  </small>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-1 flex-wrap justify-center">
              <div className="flex gap-2 items-center rounded-lg p-2 border border-gray-100">
                <AiFillMail size={20} className="text-gray-500" />
                <small>{employee.employeeEmail}</small>
              </div>
              <div className="flex gap-2 items-center rounded-lg p-2 border border-gray-100">
                <AiFillPhone className="text-gray-500" />
                <small>{employee.employeePhone}</small>
              </div>
              <div className="flex gap-2 items-center rounded-lg p-2 border border-gray-100">
                <AiFillStar className="text-yellow-500" />
                <small>{employee.employeeRating}</small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    // <div className="table w-full p-2">
    //   <div className="table-header-group">
    //     <div className="table-row">
    //       <div className="table-cell font-bold pb-2">Personel ID</div>
    //       <div className="table-cell font-bold pb-2">Ad Soyad</div>
    //       <div className="table-cell font-bold pb-2">E-posta</div>
    //       <div className="table-cell font-bold pb-2">Telefon</div>
    //       <div className="table-cell font-bold pb-2">Yaş</div>
    //       <div className="table-cell font-bold pb-2">Cinsiyet</div>
    //       <div className="table-cell font-bold pb-2">Adres</div>
    //       <div className="table-cell font-bold pb-2">Ünvan</div>
    //       <div className="table-cell font-bold pb-2">Puan</div>
    //       <div className="table-cell font-bold pb-2"></div>
    //     </div>
    //   </div>
    //   <div className="table-row-group">
    //     {employees?.map((employee) => {
    //       return (
    //         <div
    //           className="table-row hover:bg-blue-50 border"
    //           key={employee.id}
    //         >
    //           <div className="table-cell">{employee.employeeId}</div>
    //           <div className="table-cell">
    //             {employee.employeeFirstName} {employee.employeeLastName}
    //           </div>
    //           <div className="table-cell">{employee.employeeEmail}</div>
    //           <div className="table-cell">{employee.employeePhone}</div>
    //           <div className="table-cell">{employee.employeeAge}</div>
    //           <div className="table-cell">
    //             {employee.employeeGender === "k" ? "Kadın" : "Erkek"}
    //           </div>
    //           <div className="table-cell">{employee.employeeAddress}</div>
    //           <div className="table-cell">{employee.employeeStatus}</div>
    //           <div className="table-cell">{employee.employeeRating}</div>
    //           <div className="table-cell p-2">
    //             <button
    //               className="text-sm text-yellow-700 bg-yellow-200 rounded-l-lg p-2 hover:bg-yellow-500 hover:text-yellow-50 ease-in-out duration-500"
    //               onClick={() => {
    //                 handleOpenModal(employee);
    //               }}
    //             >
    //               Düzenle
    //             </button>
    //             <button
    //               className="text-sm text-red-700 bg-red-300 p-2 rounded-r-lg hover:bg-red-700 hover:text-red-50 ease-in-out duration-500"
    //               onClick={() => handleDelete(employee.id)}
    //             >
    //               Sil
    //             </button>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default EmployeesContent;
