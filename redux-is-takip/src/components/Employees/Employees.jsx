import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteEmployee,
  fetchEmployees,
  removeEmployee,
  resetSelectedData,
  setSelectedData,
} from "../../slices/employeesSlice";
import { Modal } from "reactstrap";
import { AiFillWarning, AiFillInfoCircle } from "react-icons/ai";
import EmployeeModal from "./EmployeeModal";
import EmployeesContent from "./EmployeesContent";

const Employees = () => {
  const employees = useSelector((state) => state.employee.employees);
  const employeeDetail = useSelector((state) => state.employee.employeeDetail);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
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
    dispatch(deleteEmployee(id));
    dispatch(removeEmployee(id));
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
      {employees?.length > 0 ? (
        <EmployeesContent
          employees={employees}
          avarageOfRating={avarageOfRating}
          handleOpenModal={handleOpenModal}
          handleDelete={handleDelete}
        />
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
