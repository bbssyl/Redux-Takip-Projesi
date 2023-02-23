import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteEmployee,
  deleteEmployees,
  fetchEmployees,
  resetSelectedData,
  setSelectedData,
} from "../../slices/employeesSlice";
import { Modal } from "reactstrap";
import { AiFillWarning, AiFillInfoCircle } from "react-icons/ai";
import EmployeeModal from "./EmployeeModal";

const Employees = () => {
  const employees = useSelector((state) => state.employee.employees);
  const employeeDetail = useSelector((state) => state.employee.employeeDetail);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const avarageOfRating = (rating) => {
    const avarage = rating.reduce((total, x) => total + x, 0) / rating.length;
    if (rating.length > 0) {
      return avarage;
    } else {
      return 0;
    }
  };

  const handleOpenModal = (selectedData) => {
    dispatch(setSelectedData(selectedData));
    setModal(true);
  };
  const handleCloseModal = () => {
    dispatch(resetSelectedData());
    setModal(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployees(id));
    dispatch(deleteEmployee(id));
  };
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  const navigate = useNavigate();
  return (
    <div>
      <Modal isOpen={modal}>
        <EmployeeModal
          data={employeeDetail}
          handleCloseModal={handleCloseModal}
        />
      </Modal>
      <div className="border-bottom p-3">
        <h4 className="text-center">Personel Listesi</h4>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary bg-gradient btn-sm"
            onClick={() => navigate("/dashboard/newEmployee")}
          >
            Yeni Personel
          </button>
        </div>
      </div>
      {employees && employees.length > 0 ? (
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
                          {employee.employeeFirstName}{" "}
                          {employee.employeeLastName}
                        </td>
                        <td>{employee.employeeEmail}</td>
                        <td className="text-center">
                          {employee.employeePhone}
                        </td>
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
      ) : (
        <>
          <div className="alert alert-warning d-flex gap-2 align-items-center">
            <AiFillWarning />
            Şirkette çalışan personel bulunmamaktadır.
          </div>
          <div className="alert alert-primary d-flex gap-2 align-items-center">
            <AiFillInfoCircle />
            Sağ üst köşede yer alan "Yeni Personel" butonu ile personel
            ekleyebilirsiniz.
          </div>
        </>
      )}
    </div>
  );
};

export default Employees;