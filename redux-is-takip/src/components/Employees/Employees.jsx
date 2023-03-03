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
import { AiFillWarning, AiFillInfoCircle } from "react-icons/ai";
import EmployeeModal from "./EmployeeModal";
import EmployeesContent from "./EmployeesContent";

const Employees = () => {
  const employees = useSelector((state) => state.employee.employees);
  const employeeDetail = useSelector((state) => state.employee.employeeDetail);
  const [open, setOpen] = useState(false);
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
    setOpen(true);
  };
  const handleCloseModal = () => {
    dispatch(resetSelectedData());
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(removeEmployee(id));
    dispatch(deleteEmployee(id));
  };
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <div>
      <EmployeeModal
        data={employeeDetail}
        open={open}
        setOpen={setOpen}
        handleCloseModal={handleCloseModal}
      />

      <div className="border-b p-3 flex flex-row justify-between items-center gap-2">
        <h4 className="text-blue-400">Personel Listesi</h4>
        <div>
          <button
            className="text-blue-700 bg-blue-200 rounded-lg p-2 px-4 hover:bg-blue-600 hover:text-blue-50 ease-in-out duration-500"
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
        <div className="mt-3 flex flex-col gap-2">
          <div className="text-yellow-700 bg-yellow-200 flex gap-2 items-center p-4 rounded-lg">
            <AiFillWarning size={"2rem"} />
            Şirkette çalışan personel bulunmamaktadır.
          </div>
          <div className="text-blue-700 bg-blue-200 flex gap-2 items-center p-4 rounded-lg">
            <AiFillInfoCircle size={"2rem"} />
            Sağ üst köşede yer alan "Yeni Personel" butonu ile personel
            ekleyebilirsiniz.
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
