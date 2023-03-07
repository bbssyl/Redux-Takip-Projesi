import React from "react";

const EmployeesContent = ({
  employees,
  avarageOfRating,
  handleOpenModal,
  handleDelete,
}) => {
  return (
    <div className="table w-full p-2">
      <div className="table-header-group">
        <div className="table-row">
          <div className="table-cell font-bold pb-2">Personel ID</div>
          <div className="table-cell font-bold pb-2">Ad Soyad</div>
          <div className="table-cell font-bold pb-2">E-posta</div>
          <div className="table-cell font-bold pb-2">Telefon</div>
          <div className="table-cell font-bold pb-2">Yaş</div>
          <div className="table-cell font-bold pb-2">Cinsiyet</div>
          <div className="table-cell font-bold pb-2">Adres</div>
          <div className="table-cell font-bold pb-2">Ünvan</div>
          <div className="table-cell font-bold pb-2">Puan</div>
          <div className="table-cell font-bold pb-2"></div>
        </div>
      </div>
      <div className="table-row-group">
        {employees?.map((employee) => {
          return (
            <div className="table-row hover:bg-blue-50" key={employee.id}>
              <div className="table-cell">{employee.employeeId}</div>
              <div className="table-cell">
                {employee.employeeFirstName} {employee.employeeLastName}
              </div>
              <div className="table-cell">{employee.employeeEmail}</div>
              <div className="table-cell">{employee.employeePhone}</div>
              <div className="table-cell">{employee.employeeAge}</div>
              <div className="table-cell">
                {employee.employeeGender === "k" ? "Kadın" : "Erkek"}
              </div>
              <div className="table-cell">{employee.employeeAddress}</div>
              <div className="table-cell">{employee.employeeStatus}</div>
              <div className="table-cell">
                {avarageOfRating(employee.employeeRating)}
              </div>
              <div className="table-cell p-2">
                <button
                  className="text-sm text-yellow-700 bg-yellow-200 rounded-l-lg p-2 hover:bg-yellow-500 hover:text-yellow-50 ease-in-out duration-500"
                  onClick={() => {
                    handleOpenModal(employee);
                  }}
                >
                  Düzenle
                </button>
                <button
                  className="text-sm text-red-700 bg-red-300 p-2 rounded-r-lg hover:bg-red-700 hover:text-red-50 ease-in-out duration-500"
                  onClick={() => handleDelete(employee.id)}
                >
                  Sil
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeesContent;
