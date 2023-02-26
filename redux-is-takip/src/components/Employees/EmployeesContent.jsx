import React from "react";

const EmployeesContent = ({
  employees,
  avarageOfRating,
  handleOpenModal,
  handleDelete,
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-borderless align-middle">
        <thead>
          <tr>
            <th>Personel ID</th>
            <th>Ad Soyad</th>
            <th>E-posta</th>
            <th className="text-center">Telefon</th>
            <th className="text-center">Yaş</th>
            <th className="text-center">Cinsiyet</th>
            <th>Adres</th>
            <th>Ünvan</th>
            <th className="text-center">Puan</th>
            <th style={{ width: "200px" }}></th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee) => {
              return (
                <>
                  <tr key={employee.id}>
                    <td>{employee.employeeId}</td>
                    <td>
                      {employee.employeeFirstName} {employee.employeeLastName}
                    </td>
                    <td>{employee.employeeEmail}</td>
                    <td className="text-center">{employee.employeePhone}</td>
                    <td className="text-center">{employee.employeeAge}</td>
                    <td className="text-center">
                      {employee.employeeGender === "k" ? "Kadın" : "Erkek"}
                    </td>
                    <td>{employee.employeeAddress}</td>
                    <td>{employee.employeeStatus}</td>
                    <td className="text-center">
                      {avarageOfRating(employee.employeeRating)}
                    </td>
                    <td className="text-center d-flex gap-2 justify-content-center">
                      <button
                        className="btn bg-gradient btn-warning btn-sm"
                        onClick={() => {
                          handleOpenModal(employee);
                        }}
                      >
                        Düzenle
                      </button>
                      <button
                        className="btn bg-gradient btn-danger btn-sm"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesContent;
